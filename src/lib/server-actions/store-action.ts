'use server';
import { createClient } from '@/lib/supbase/server';

export async function fetchStore(offset = 0, limit = 3, searchQuery = '') {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('store')
    .select('*')
    .ilike('name', `%${searchQuery}%`)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) {
    throw error;
  }

  return data;
}

export async function fetchStoreItems(
  store_id: string,
  page: number,
  page_size: number
) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('get_store_details', {
    page,
    page_size,
    store_id,
  });

  if (error) return error;
  else return data;
}
