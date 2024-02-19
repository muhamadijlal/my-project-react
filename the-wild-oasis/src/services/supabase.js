import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kfghubpxlyxtsgmwuxzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmZ2h1YnB4bHl4dHNnbXd1eHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NzE2NDEsImV4cCI6MjAxNDI0NzY0MX0.uUeyziEEskRtXkXdCvYQgSbzY-KPsrdnbpeJH-fDbgY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
