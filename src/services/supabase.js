import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://koprtfgvvbwovmqedgcc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvcHJ0Zmd2dmJ3b3ZtcWVkZ2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMjkxNDksImV4cCI6MjA0MTkwNTE0OX0.ZYNA26hB5lZMKLgEyrxjnbuKPAvJWFzlpGFDkSrsa1g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
