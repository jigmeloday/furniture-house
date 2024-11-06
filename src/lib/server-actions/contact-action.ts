'use server';
import { createClient } from '@/lib/supbase/server';

export async function contactUs( formData ) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
  .from('contact')
  .insert([{
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  }]);

  if (error) {
      console.error(error)
  }
  if( data) {
    console.log(data)
  }
  return {
      message: 'Success',
  };
}