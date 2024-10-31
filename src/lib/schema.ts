export interface ShopItem {
    id: string;
    sid: string;
    name: string;
    price: number;
    description: number;
    quantity: number;
    sku: number;
    category: string;
    created_at: string;
    favorite_id: number
}

export interface Store{
    id: string;
    name: string;
    logo:string
    created_at: string

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
