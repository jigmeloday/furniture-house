import { Button } from '@/components/ui/button';
import { Store } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';

function StoreItemList({ data }: { data: Store[] }) {
  return (
    <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85] space-y-[24px] mb-[24px]">
      <div className="grid grid-cols md:grid-cols-4">
        {data?.map((item) => (
          <div
            className="relative min-h-[224px] w-[295px] border rounded-md overflow-hidden"
            key={item.id}
          >
            <Link href={`store/${item.id}`}>
              <div className="relative h-[123px] w-full overflow-hidden">
                <Image
                  src={item.cover || '/images/dinning.webp'}
                  alt="store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[124px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-[80px] w-[80px]">
                <div className="h-full w-full rounded-full overflow-hidden relative shadow-md">
                  <Image
                    src={(item?.logo as string) || '/logo/ikea.svg'}
                    alt="store"
                    fill
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div className="flex justify-start min-h-[calc(224px-123px)] px-[8px] pb-[16px]">
                <div className="h-full mt-[44px] space-y-[12px]">
                  <h5 className="text-dark/80">{item.name}</h5>
                  <div className="flex flex-wrap gap-[4px]">
                    {item?.products?.splice(0,3)?.map((product, index) => (
                      <div
                        className="text-[12px] px-2 bg-primary rounded-md text-primary-lighter"
                        key={`${product}-${index}`}
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
}

export default StoreItemList;
