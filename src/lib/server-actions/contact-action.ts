'use server';
import { createClient } from '@/lib/supbase/server';
import { ContactForm } from '../schema';

export async function contactUs( formData: ContactForm ) {
  const supabase = await createClient();
  
  const { error } = await supabase
  .from('contact')
  .insert([{
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  }]);

  if (error) {
      throw error;
  }
  
  return {
      message: 'Success',
  };
}