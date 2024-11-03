import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY } from '@/components/home/constant/home.constant';
import { VARIANT } from '@/lib/shared.constant';
import ShopCard from '@/components/shop-card/shop-card';
import { fetchStore, fetchTopProducts } from '@/lib/server-actions/shop-action';
import { PopularOrder, ShopItem } from '@/lib/schema';
import { createClient } from '@/lib/supbase/server';
import Swapper from '@/components/home/swapper';

export default async function Home() {
    const data: PopularOrder[]  = await fetchTopProducts();
    const store  = await fetchStore();
    const {data: { user }} = await (await createClient()).auth.getUser();

    return (
        <main className="w-full">
            <section className="w-full h-screen">
                <div className="flex items-center justify-end h-full w-full bg-banner bg-no-repeat bg-cover">
                    <div
                        className="space-y-[36px] bg-primary-light pt-[32px] px-[21px] pb-[24px] mr-[12px] sm:pt-[62px] sm:pb-[38px] sm:px-[42px] sm:mr-[58px] rounded-[10px]">
                        <div>
                            <span className="text-typo-dark text-[12px] sm:text-[14px] font-[600]">New Arrival</span>
                            <div className="w-[260px] sm:w-[420px]">
                                <h1 className="text-primary">Discover Our New Collection</h1>
                                <span className="text-[12px] sm:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
                            </div>
                        </div>
                        <div>
                            <Link href="/shop"
                                  className="bg-primary text-white px-[24px] py-[12px] rounded-[4px] hover:bg-primary/60 transition duration-300 ease-in-out">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*SECTION 2*/ }

            <section className="px-[16px] sm:px-[85px] w-full my-[28px] sm:my-[56px]">
                <div className="w-full flex flex-col items-center text-center">
                    <h4>Browse The Range</h4>
                    <span className="text-typo-dark/70 text-[12px] sm:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="grid grid-col md:grid-cols-3 md:gap-[30px] mt-[20px] sm:mt-[40px]">
                    { CATEGORY.map( ( { id, image, label } ) => (
                        <Link href={ `/shop?${ id }` } key={ id }>
                            <div className="flex flex-col space-y-[8px] items-center">
                                <div
                                    className="relative h-[300px] w-full md:h-[340px] xl:h-[480px] xl:w-[380px] overflow-hidden rounded-sm">
                                    <Image src={ image } alt="category" fill
                                           className="object-cover transition duration-300 ease-in-out hover:scale-110 cursor-pointer"/>
                                </div>
                                <span className="font-[600] text-[14] sm:text-[16] text-typo-dark/80">
                                { label }
                            </span>
                            </div>
                        </Link>
                    ) ) }
                </div>
            </section>

            {/*SECTION 3*/ }

            <section className="px-[16px] sm:px-[85px] w-full my-[28px] sm:my-[56px]">
                <div className="w-full flex flex-col items-center">
                    <h4>Popular Items</h4>
                </div>
                <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[40px]">
                    { data?.map( ( item: PopularOrder & ShopItem ) => (
                        <div key={item.id}>
                            <ShopCard item={item} user={user} />
                        </div>
                    ) ) }
                </div>
                <div className="w-full flex justify-center mt-8">
                    <Link href="/shop" className={ VARIANT[ 'outlined' ] }>View More</Link>
                </div>
            </section>

            <section className="w-full my-[28px] sm:my-[56px]">
                <div className="flex items-center py-[44px] pl-[16px] sm:pl-[85px] bg-primary-lighter space-x-[24px]">
                    <div className="h-full w-[422px] space-y-[24px]">
                        <div>
                            <h4>Stunning Products from Top Stores!</h4>
                            <span className="text-[14px] text-typo-dark/70">Discover over 50 handpicked, stunning products from top stores to inspire your style and elevate your space! </span>
                        </div>
                        <div>
                            <Link href="/store" className={VARIANT['contain']}>
                                Explore More
                            </Link>
                        </div>
                    </div>
                   <Swapper store={store} />
                </div>
            </section>
        </main>
    );
}
