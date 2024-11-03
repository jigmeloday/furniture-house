'use client';

import Image from 'next/image';
import { Store } from '@/lib/schema';
import Link from 'next/link';

function Swapper({ store }: Store[]) {

    return (
        <div className="relative w-[300px] h-[200px] md:w-[980px] md:h-[400px] overflow-x-auto hide-scroll">
            <div className="overflow-x-auto h-full grid grid-flow-col gap-[12px] hide-scroll">
                {
                    store.map((item: Store) => (
                        <Link href={`/store/${item.id}`} key={item.id}>
                            <div className="relative h-full w-[140px] md:w-[340px] rounded-md overflow-hidden group transition duration-300 ease-in-out">
                                <Image
                                    src={`/images/dinning.webp`}
                                    alt="img"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill
                                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 z-[1] left-4 right-4">
                                   <div className="flex items-center space-x-[4px]">
                                       <div className="relative h-[24px] w-[24px] bg-white rounded-full overflow-hidden">
                                           <Image src="/logo/ikea.svg" alt="logo" fill className="object-fill" />
                                       </div>
                                       <h6 className="text-primary-light">
                                           {item.name}
                                       </h6>
                                   </div>
                                    <div className="flex flex-wrap gap-[4px]">
                                        {item.products.map((product, index) => (
                                            <div className="text-[12px] px-2 bg-primary rounded-md text-primary-lighter" key={`${product}-${index}`}>
                                                {product}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-typo-dark/50" />
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    );
}

export default Swapper;
