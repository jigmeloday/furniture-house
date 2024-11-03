'use server';
import { createClient } from '@/lib/supbase/server';
import { redirect } from 'next/navigation';

export async function login( formData) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
    });

    if (error) {
        return {
            error: true,
            message: error.message || 'Something went wrong'
        };
    }

    return {
        message: 'Success',
        session: data.session
    };
}

export async function signOut() {
    const supabase = await createClient();
    const { error } = supabase.auth.signOut();
    redirect('/')
}
