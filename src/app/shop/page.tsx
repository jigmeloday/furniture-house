import { fetchShop } from '@/lib/server-actions/shop-action';
import ShopCard from '@/components/shop-card/shop-card';

async function Page() {
    const data  = await fetchShop(1, 10)

    return(
        <main>
            <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85]">
                <div className="grid grid-cols md:grid-cols-4">
                    {
                        data.map((item) => (
                            <ShopCard item={item} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Page;
