import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nhakooelgvwkuhevsakk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oYWtvb2VsZ3Z3a3VoZXZzYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDgxNzYsImV4cCI6MjA1NjA4NDE3Nn0.ICAw1gw9jRupARl-lx3C1lVhw3OJw9AYiTSYZovIl_k';

// Create Supabase client with realtime options
export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  // Enable console logs for debugging
  debug: import.meta.env.DEV
});

