import ShopItemList from '@/app/shop/components/shop-item-list';
import { createClient } from '@/lib/supbase/server';
import { fetchStore } from '@/lib/server-actions/store-action';
import StoreItemList from '@/app/store/components/store-item-list';

async function StoreWrapper({ search } ) {
    const data  = await fetchStore(1, 10)
    const {data: { user }} = await (await createClient()).auth.getUser();

    return(
        <StoreItemList data={data} user={user} />
    )
}

export default StoreWrapper;
