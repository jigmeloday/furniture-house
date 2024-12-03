'use server';
import { createClient } from '@/lib/supbase/server';
import { ProfileModule } from '../schema';

export async function fetchAddress() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('address')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    throw error;
  }

  return data;
}

export async function fetchProfile(): Promise<ProfileModule | undefined> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('profile').select('*').single(); // Ensures exactly one record is returned

  if (error) {
    if (error.details === 'The result contains 0 rows') {
      return;
    }
    throw error;
  }

  return data;
}
