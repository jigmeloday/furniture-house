'use server';
import { createClient } from '@/lib/supbase/server';

export async function addFavorite(item_id) {
    const supabase = await createClient();

    let { data, error } = await supabase
        .rpc('toggle_favorite', {
            p_item_id:item_id,
        })
    if (error) console.error(error)

    else {
        console.log(data)
        return data
    }

}
