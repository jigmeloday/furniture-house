'use server';
import { createClient } from '@/lib/supbase/server';

export async function addFavorite(item_id: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .rpc('toggle_favorite', {
            p_item_id:item_id,
        });

    if (error) throw error;

    else return data;
}
