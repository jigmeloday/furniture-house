'use server';
import { createClient } from '@/lib/supbase/server';

export async function login(formData) {
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

