'use server';
import { createClient } from '@/lib/supbase/server';

export async function fetchTopProducts() {
    const supabase = await createClient()

    let { data, error } = await supabase
        .rpc('fetch_top_sold')
    if (error) console.error(error)
    else return(data)
}

export async function fetchShop(page, page_size) {
    const supabase = await createClient()

    let { data, error } = await supabase
        .rpc('fetch_items', {
            page,
            page_size
        })
    if (error) console.error(error)
    else  return(data);

}

export async function fetchStore() {
    const supabase = await createClient()

    let { data, error } = await supabase.from('store')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(8);
    if ( error ) console.error(error)
    else return data
}
