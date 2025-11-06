
-- Migration: 20251030135842
-- Create contact_submissions table to store all contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('talent', 'company')),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  experience_level text,
  company_name text,
  company_size text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create indexes for common queries
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_inquiry_type ON public.contact_submissions(inquiry_type);

-- Add comment for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores all contact form submissions from the website';

-- Migration: 20251030182302
-- Enable Row Level Security on contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow the service role (used by edge functions) to insert new submissions
CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

-- Allow the service role to select submissions (for the .select().single() call)
CREATE POLICY "Service role can select contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);

-- Allow the service role to update submissions if needed
CREATE POLICY "Service role can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO service_role
USING (true);

-- Migration: 20251103121848
-- Create table to track rate limiting for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  submission_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient rate limit lookups
CREATE INDEX idx_contact_rate_limits_ip_window ON public.contact_rate_limits(ip_address, window_start);

-- Enable RLS
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- Service role can manage rate limit records
CREATE POLICY "Service role can manage rate limits"
ON public.contact_rate_limits
FOR ALL
USING (true)
WITH CHECK (true);

-- Function to clean up old rate limit records (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.contact_rate_limits 
  WHERE window_start < (now() - INTERVAL '24 hours');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
