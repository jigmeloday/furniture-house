import ShopCard from '@/components/shop-card/shop-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function ShopItemList({ data, user }) {
    return(
        <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85] space-y-[24px] mb-[24px]">
            <div className="grid grid-cols md:grid-cols-4">
                {
                    data?.map((item) => (
                        <ShopCard item={item} user={user} />
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    )
}

export default ShopItemList;
