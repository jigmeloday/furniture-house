'use server';
import { createClient } from '@/lib/supbase/server';

export async function addFavorite(fav_id, item_id, uid) {
    const supabase = await createClient();

    let { data, error } = await supabase
        .rpc('toggle_favorite', {
            fav_id,
            item_id,
            uid : '123123'
        })
    if (error) console.error(error)
    else return data

}
