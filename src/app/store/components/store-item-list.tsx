import { Button } from '@/components/ui/button';
import Image from 'next/image';

function StoreItemList({ data, user }) {
    return(
        <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85] space-y-[24px] mb-[24px]">
            <div className="grid grid-cols md:grid-cols-4">
                {
                    data?.map((item) => (
                        <div className="relative min-h-[224px] w-[295px] border rounded-md overflow-hidden">
                            <div className="relative h-[123px] w-full overflow-hidden">
                                <Image src='/images/dinning.webp' alt="store" fill className="object-cover" />
                            </div>
                            <div className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-[80px] w-[80px]">
                                <div className="h-full w-full rounded-full overflow-hidden relative shadow-md">
                                    <Image src='/logo/ikea.svg' alt="store" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-[12px] justify-end h-[calc(224px-123px)] px-[8px] pb-[8px]">
                                <h5 className="text-dark/80">{item.name}</h5>
                                <div className="flex flex-wrap gap-[4px]">
                                    {item.products.map((product, index) => (
                                        <div className="text-[12px] px-2 bg-primary rounded-md text-primary-lighter" key={`${product}-${index}`}>
                                            {product}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    )
}

export default StoreItemList;
