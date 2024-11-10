'use server';
import { createClient } from '@/lib/supbase/server';
import { redirect } from 'next/navigation';

export async function login(formData: { email: string; password: string }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw error;
  }

  return {
    message: 'Success',
    session: data.session,
  };
}

export async function signUp(formData: { email: string; password: string }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw error;
  };

  return {
    message: 'Success',
    session: data.session,
  };
}

export async function forgotPassword(formData: { email: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_HOST}/update-password`,
  });

  if (error) {
    throw error;
  };
}

export async function updatePassword(formData: { password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: formData.password,
  });

  if (error) {
    throw error;
  };
}

export async function signOut() {
  const supabase = await createClient();
  supabase.auth.signOut();
  redirect('/');
}
