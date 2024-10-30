import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY } from '@/components/home/constant/home.constant';
import { Button } from '@/components/ui/button';
import { VARIANT } from '@/lib/shared.constant';

export default function Home() {
    return (
        <main className="w-full">
            <section className="w-full h-screen">
                <div className="flex items-center justify-end h-full w-full bg-banner">
                    <div
                        className="space-y-[36px] bg-primary-light pt-[62px] pb-[38px] px-[42px] mr-[58px] rounded-[10px]">
                        <div>
                            <span className="text-typo-dark text-[14px] font-[600]">New Arrival</span>
                            <div className="w-[420px]">
                                <h1 className="text-primary">Discover Our New Collection</h1>
                                <span className="text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
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
            <section className="px-[85px] w-full my-[56px]">
                <div className="w-full flex flex-col items-center">
                    <h5>Browse The Range</h5>
                    <span className="text-typo-dark/70 text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="grid grid-cols-3 gap-[30px] mt-[40px]">
                    { CATEGORY.map( ( { id, image, label } ) => (
                        <Link href={`/shop?${id}`} key={id}>
                            <div className="flex flex-col items-center">
                                <div className="relative h-[480px] w-[380px] overflow-hidden rounded-sm">
                                    <Image src={image} alt='category' fill className="object-cover transition duration-300 ease-in-out hover:scale-110 cursor-pointer"/>
                                </div>
                                <span className="font-[600] text-typo-dark/80">
                                { label }
                            </span>
                            </div>
                        </Link>
                    ) ) }
                </div>
            </section>
            <section className="px-[85px] w-full my-[56px]">
                <div className="w-full flex flex-col items-center">
                    <h5>Popular Items</h5>
                </div>
                <div className="grid grid-cols-4 gap-[30px] mt-[40px]">
                    { [1,2,3,4,5,6,7,8].map( (item) => (
                       <div className="w-[285px] border group rounded-sm" key={item}>
                          <Link href={`/shop/${item}`}>
                              <div className="relative h-[301px] w-full">
                                  <Image src='/images/living.webp' alt='dummy' fill className='object-cover' />
                              </div>
                              <div className="flex flex-col pt-[4px] pb-[12px] px-[16px]">
                                  <p className="font-[700] text-[14px] group-hover:text-primary transition duration-300">Syltherine</p>
                                  <p className="font-[400] text-[12px]">Stylish cafe chair</p>
                                  <div className='flex space-x-[12px] items-center'>
                                      <span className="font-[600] text-[14px]">Nu. 25000.00</span>
                                      <s className="text-typo-dark/50 text-[12px]">Nu. 1500.00</s>
                                  </div>
                              </div>
                          </Link>
                       </div>
                    ) ) }
                </div>
                <div className="w-full flex justify-center mt-8">
                    <Link href='/shop' className={VARIANT['outlined']}>View More</Link>
                </div>
            </section>
        </main>
    );
}
