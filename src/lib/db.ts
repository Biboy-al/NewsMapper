'use server'

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.PROJECT_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUp(email: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
}

export async function signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    console.log(data)
    console.log(error)

    if (error) {
        console.error('Sign in error:', error.message)
        return false
      }
  
      if (data.user && data.session) {
        return true
      }
  
      return false
  }