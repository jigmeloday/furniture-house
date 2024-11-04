import { createClient } from '@/lib/supbase/server';

export async function fetchStore(page = 1, pageSize = 8, searchQuery = '') {
    const supabase = await createClient();

    const offset = (page - 1) * pageSize;
    const { data, error } = await supabase
        .from('store')
        .select('*')
        .ilike('name', `%${searchQuery}%`)
        .order('created_at', { ascending: false })
        .range(offset, offset + pageSize - 1);

    if (error) {
        return error;
    }

    return data;
}
