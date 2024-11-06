import ShopCard from '@/components/shop-card/shop-card';
import { Button } from '@/components/ui/button';
import { PopularOrder } from '@/lib/schema';
import { User } from '@supabase/supabase-js';

function ShopItemList({ data, user }: { data: PopularOrder[], user: User | null }) {
    return(
        <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85] space-y-[24px] mb-[24px]">
            <div className="grid grid-cols md:grid-cols-4">
                {
                    data?.map((item) => (
                        <div key={item.item_id}>
                            <ShopCard item={item} user={user} />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    );
}

export default ShopItemList;
