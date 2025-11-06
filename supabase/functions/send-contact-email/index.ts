import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.1';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

// Gmail SMTP configuration
const smtpConfig = {
  hostname: "smtp.gmail.com",
  port: 465,
  username: Deno.env.get("GMAIL_USER")!,
  password: Deno.env.get("GMAIL_APP_PASSWORD")!,
};

// Initialize Supabase client for database operations
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Server-side validation schema
const contactSchema = z.object({
  inquiryType: z.enum(["talent", "company"]),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
  experienceLevel: z.string().max(50).optional(),
  companyName: z.string().max(100).optional(),
  companySize: z.string().max(50).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check - get IP address from headers
    const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
                     || req.headers.get('x-real-ip') 
                     || 'unknown';
    
    console.log("Checking rate limit for IP:", ipAddress);
    
    // Check current rate limit status
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('contact_rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .gte('window_start', oneHourAgo)
      .single();
    
    if (rateLimitError && rateLimitError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error("Rate limit check error:", rateLimitError);
      // Continue with request if rate limit check fails (fail open)
    } else if (rateLimitData) {
      // Check if limit exceeded (5 submissions per hour)
      if (rateLimitData.submission_count >= 5) {
        console.warn("Rate limit exceeded for IP:", ipAddress);
        return new Response(
          JSON.stringify({ 
            error: "Too many requests. Please try again later.",
            retryAfter: 3600 // seconds
          }),
          {
            status: 429,
            headers: { 
              "Content-Type": "application/json",
              "Retry-After": "3600",
              ...corsHeaders 
            },
          }
        );
      }
      
      // Increment submission count
      await supabase
        .from('contact_rate_limits')
        .update({ 
          submission_count: rateLimitData.submission_count + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', rateLimitData.id);
      
      console.log("Rate limit updated:", rateLimitData.submission_count + 1);
    } else {
      // Create new rate limit record
      await supabase
        .from('contact_rate_limits')
        .insert({
          ip_address: ipAddress,
          submission_count: 1,
          window_start: new Date().toISOString()
        });
      
      console.log("New rate limit record created for IP:", ipAddress);
    }
    
    // Clean up old rate limit records (older than 24 hours)
    await supabase.rpc('cleanup_old_rate_limits').catch(err => {
      console.error("Cleanup error (non-critical):", err);
    });

    const rawData = await req.json();
    
    // Server-side validation using Zod
    const validationResult = contactSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.format());
      return new Response(
        JSON.stringify({ 
          error: "Invalid form data",
          details: validationResult.error.format()
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const formData = validationResult.data;
    console.log("Received valid contact form submission:", { 
      inquiryType: formData.inquiryType
    });

    // Save submission to database
    console.log("Saving submission to database...");
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        inquiry_type: formData.inquiryType,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        experience_level: formData.experienceLevel || null,
        company_name: formData.companyName || null,
        company_size: formData.companySize || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error (continuing with email):", dbError);
      // Don't fail the request - we'll still send emails
    } else {
      console.log("Submission saved to database:", submission?.id);
    }

    // Sanitize HTML entities to prevent injection
    const escapeHtml = (text: string) => {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // Format email content based on inquiry type
    let emailContent = "";
    let subjectLine = "";

    if (formData.inquiryType === "talent") {
      subjectLine = `New Talent Inquiry from ${escapeHtml(formData.name)}`;
      emailContent = `
        <h2>New Talent Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        ${formData.experienceLevel ? `<p><strong>Experience Level:</strong> ${escapeHtml(formData.experienceLevel)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
      `;
    } else {
      subjectLine = `New Company Inquiry from ${escapeHtml(formData.companyName || formData.name)}`;
      emailContent = `
        <h2>New Company Partnership Inquiry</h2>
        <p><strong>Contact Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        ${formData.companyName ? `<p><strong>Company:</strong> ${escapeHtml(formData.companyName)}</p>` : ''}
        ${formData.companySize ? `<p><strong>Company Size:</strong> ${escapeHtml(formData.companySize)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
      `;
    }

    // Initialize SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: smtpConfig.hostname,
        port: smtpConfig.port,
        tls: true,
        auth: {
          username: smtpConfig.username,
          password: smtpConfig.password,
        },
      },
    });
    
    try {
      // Send notification email to Carolyn
      console.log("Sending notification email to Carolyn...");
      await client.send({
        from: `Cognite Labs <${smtpConfig.username}>`,
        to: ["carolyn.symonds@cognitelabs.co"],
        subject: subjectLine,
        content: emailContent,
        html: emailContent,
      });
      console.log("Notification email sent successfully");

      // Send auto-reply confirmation to user
      console.log("Sending confirmation email to user...");
      await client.send({
        from: `Cognite Labs <${smtpConfig.username}>`,
        to: [formData.email],
        subject: "We received your message - Cognite Labs",
        content: `Thank you for reaching out, ${formData.name}!`,
        html: `
          <h1>Thank you for reaching out, ${escapeHtml(formData.name)}!</h1>
          <p>We have received your ${formData.inquiryType === "talent" ? "talent" : "partnership"} inquiry and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to explore more about what we do at <a href="https://cognitelabs.com">cognitelabs.com</a>.</p>
          <p>Best regards,<br>The Cognite Labs Team</p>
        `,
      });
      console.log("Confirmation email sent to user");

    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      // Don't fail the request - submission is already saved to database
    } finally {
      // Only close if client connection was established
      try {
        await client.close();
      } catch (closeError) {
        console.error("Error closing SMTP client:", closeError);
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send message. Please try again later." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
