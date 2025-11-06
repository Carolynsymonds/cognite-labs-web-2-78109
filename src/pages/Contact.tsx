import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, User, Building2, Briefcase, Send } from "lucide-react";
const contactSchema = z.object({
  inquiryType: z.enum(["talent", "company"], {
    required_error: "Please select an option"
  }),
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  experienceLevel: z.string().optional(),
  companyName: z.string().trim().max(100).optional(),
  companySize: z.string().optional()
});
type ContactFormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    toast
  } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: {
      errors
    }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  const inquiryType = watch("inquiryType");
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const {
        data: responseData,
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: data
      });
      if (error) throw error;
      setIsSuccess(true);
      reset();
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSuccess) {
    return <div className="min-h-screen bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-lg p-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your message and will get back to you shortly.
            </p>
            <Button onClick={() => setIsSuccess(false)}>
              Send Another Message
            </Button>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">Whether you're a company seeking to partner with us, or talent looking to become the next AI Product Manager, drop us a note and we'll get back to you soon.</p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Inquiry Type Selection */}
            <div className="space-y-3">
              <Label className="text-base font-heading">I am...</Label>
              <Controller
                name="inquiryType"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <label htmlFor="company" className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${inquiryType === "company" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                      <RadioGroupItem value="company" id="company" />
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="font-heading font-medium">
                          Company (Partnership)
                        </span>
                      </div>
                    </label>

                    <label htmlFor="talent" className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${inquiryType === "talent" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                      <RadioGroupItem value="talent" id="talent" />
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        <span className="font-heading font-medium">
                          Talent (Aspiring AI Product Manager)
                        </span>
                      </div>
                    </label>
                  </RadioGroup>
                )}
              />
              {errors.inquiryType && <p className="text-sm text-destructive">
                  {errors.inquiryType.message}
                </p>}
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-heading">
                Name *
              </Label>
              <Input id="name" {...register("name")} placeholder="Your full name" className="font-heading" />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-heading">
                Email *
              </Label>
              <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className="font-heading" />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            {/* Conditional Fields for Talent */}
            {inquiryType === "talent" && <div className="space-y-2">
                <Label htmlFor="experienceLevel" className="font-heading">
                  Experience Level
                </Label>
                <select id="experienceLevel" {...register("experienceLevel")} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select your experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6+ years)</option>
                </select>
              </div>}

            {/* Conditional Fields for Company */}
            {inquiryType === "company" && <>
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-heading">
                    Company Name
                  </Label>
                  <Input id="companyName" {...register("companyName")} placeholder="Your company name" className="font-heading" />
                  {errors.companyName && <p className="text-sm text-destructive">
                      {errors.companyName.message}
                    </p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize" className="font-heading">
                    Company Size
                  </Label>
                  <select id="companySize" {...register("companySize")} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
              </>}

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-heading">
                Message *
              </Label>
              <Textarea id="message" {...register("message")} placeholder="Tell us more about your inquiry..." rows={6} className="font-heading resize-none" />
              {errors.message && <p className="text-sm text-destructive">
                  {errors.message.message}
                </p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full font-heading" size="lg">
              {isSubmitting ? "Sending..." : <>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </>}
            </Button>
          </form>
        </div>
      </div>
    </div>;
};
export default Contact;