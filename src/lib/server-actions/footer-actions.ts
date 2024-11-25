'use server';
import { createClient } from '@/lib/supbase/server';
import { NewsLetterForm } from '../schema';

export async function NewsLetter( formData: NewsLetterForm ) {
  const supabase = await createClient();

  const { error } = await supabase
  .from('newsletter')
  .insert([{
    email: formData.email,
  }]);

  if (error) {
      throw error;
  }
  return {
      message: 'Success',
  };
}