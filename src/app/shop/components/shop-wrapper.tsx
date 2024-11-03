import { fetchShop } from '@/lib/server-actions/shop-action';
import ShopItemList from '@/app/shop/components/shop-item-list';
import { createClient } from '@/lib/supbase/server';

async function ShopWrapper({ category, store, price, discount, sort } ) {
    const data  = await fetchShop(1, 10, category ?? null, store ?? null, discount ?? null, price ?? null, sort ?? null)
    const {data: { user }} = await (await createClient()).auth.getUser();

    return(
        <ShopItemList data={data} user={user} />
    )
}

export default ShopWrapper;
