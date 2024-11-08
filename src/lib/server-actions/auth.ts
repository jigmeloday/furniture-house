'use server';
import { createClient } from '@/lib/supbase/server';
import { redirect } from 'next/navigation';

export async function login( formData:{ email: string; password: string } ) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
    });

    if (error) {
        throw error;
    }

    return {
        message: 'Success',
        session: data.session
    };
}

export async function signUp( formData:{ email: string; password: string} ) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
    });

    if (error) {
       throw error;
    }

    return {
        message: 'Success',
        session: data.session
    };
}

export async function signOut() {
    const supabase = await createClient();
    supabase.auth.signOut();
    redirect('/');
}
