import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kaomksywzvzmeqxsamjt.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthb21rc3l3enZ6bWVxeHNhbWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MjgwMTcsImV4cCI6MjA0NjQwNDAxN30.VC4kYAzqL99hC4mVyAKWEA0Fr-yftbrTmHsB8mmHe6s'; // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 