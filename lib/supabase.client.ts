"use client";

import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./database.types";
import { createClient } from "@supabase/supabase-js";


/**
 * In client components, import the `supabaseForClientComponent` variable and use it like this:
 * @example
 * const { data, error } = await supabase
 *   .from('users')
 *   .select();
 */
export const supabaseForClientComponent = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const supabaseForClientComponentWithRoleKey = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJleXJzZnllb3poYndkeHd2YnFoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzgxMDUyNiwiZXhwIjoyMDE5Mzg2NTI2fQ.NKirQZkko0h5GSfLZPfJehnDZGBft5D11RAqfKPkf48'
);