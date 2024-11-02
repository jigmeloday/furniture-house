'use server';
import { createClient } from '@/lib/supbase/server';

export async function fetchTopProducts() {
    const supabase = await createClient()

    let { data, error } = await supabase
        .rpc('fetch_top_sold')
    if (error) console.error(error)
    else return(data)
}
