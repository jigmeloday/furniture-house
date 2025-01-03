'use server';
import { createClient } from '@/lib/supbase/server';

export async function fetchTopProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('fetch_top_sold');
  if (error) throw error;
  else return data;
}

export async function fetchShop(
  page: number,
  page_size: number,
  item_category: string,
  store_filter: string,
  discount_filter: string,
  price_filter: string,
  sort_order: string,
  search_query?: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('fetch_items', {
    discount_filter,
    item_category,
    page,
    page_size,
    price_filter,
    search_query,
    sort_order,
    store_filter,
  });
  if (error) throw error;
  else return data;
}

export async function fetchItemById(product_id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc('fetch_item_with_store_name', {product_id});
  if (error) throw error;
  else return data;
}

export async function fetchVariantOption(option_id:number) {
  const supabase = await createClient();
  const { data, error } = await supabase
  .from('variant_option')
  .select('*')
  .eq('id', option_id)
  .single();

if (error) {
  return error;
}

return data;
}