export interface Variants {
  id: number;
  color: string;
  variant_option: number;
  image: string[];
}

export interface ShopItem {
  id: string;
  sid: string;
  item_name: string;
  cover: string;
  price: number;
  description: number;
  quantity: number;
  sku: number;
  category: string;
  created_at: string;
  favorite_id: number;
  is_favorite: boolean;
  variants: Variants[];
  total_item: number;
}

export interface Store {
  cover: string | null;
  created_at: string;
  description: string;
  id: string;
  logo: string | null;
  name: string;
  products: string[];
}

export interface Order {
  id: string;
  uid: string;
  status: string;
  item_id: string;
}

export interface PopularOrder {
  item_id: string;
  cover: string;
  repeat_count: number;
  name: string;
  favorite_id: number;
  price: number;
  quantity: number;
  discount: number;
  discount_percentage: number;
  store_name: string;
  is_favorite: boolean;
  total_item: number;
}

export interface User {
  id: string;
}

export interface ContactForm {
  email: string;
  name: string;
  subject: string;
  message: string;
}

export type Params = { slug: string };

export type SearchParams = { [key: string]: string | string[] | undefined };
