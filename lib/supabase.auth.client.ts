"use client";

import { supabaseForClientComponent } from "@/lib/supabase.client";
import * as Supabase from "@supabase/supabase-js";

export async function authenticateUsingPassword(credentials: Supabase.SignInWithPasswordCredentials) {
  return await supabaseForClientComponent.auth.signInWithPassword(credentials);
}


export async function signupUsingPassword(props: { role: string; email: string; password: string; }) {
  return await supabaseForClientComponent.auth.signUp({
    email: props.email,
    password: props.password,
    options: {
      data: {
        role: props.role,
      },
    },
  });
}