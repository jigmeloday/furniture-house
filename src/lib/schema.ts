export interface ShopItem {
    id: string;
    sid: string;
    item_name: string;
    price: number;
    description: number;
    quantity: number;
    sku: number;
    category: string;
    created_at: string;
    favorite_id: number
    is_favorite: boolean;
}

export interface Store{
    cover: string | null;
    created_at: string;
    description: string;
    id: string;
    logo: string | null;
    name: string;
    products: string[];
}

export interface Order{
    id: string;
    uid: string;
    status: string;
    item_id: string;
}

export interface PopularOrder {
    item_id: string;
    repeat_count: number;
    name: string;
    favorite_id: number;
    price: number;
    discount: number;
    discount_percentage: number;
    store_name: string;
    is_favorite: boolean;
}

export interface User {
    id: string;
}

export type Params = { slug: string }

export type SearchParams = { [key: string]: string | string[] | undefined }