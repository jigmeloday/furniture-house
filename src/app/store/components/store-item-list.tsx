'use client';
import { Button } from '@/components/ui/button';
import { Store } from '@/lib/schema';
import { fetchStore } from '@/lib/server-actions/store-action';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function StoreItemList({ data }: { data: Store[] }) {
  const [isLoading, setLoading] = useState(false);
  const [isButtonHidden, setButtonHidden] = useState(true);
  const [offset, setOffset] = useState(4);
  const [store, setStore] = useState(data);

  const handleClick = async () => {
    setLoading(true);
    try {
      const nextStore = await fetchStore(offset, 4, ''); // Fetch the next set of data based on the current offset
      setButtonHidden(!!nextStore.length); // Hide the button if no more data is returned
      setOffset((prevOffset) => prevOffset + 4); // Increment offset by the number of items fetched (3)
      setStore((prevStore) => [...prevStore, ...nextStore]); // Append the new data to the existing store
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-[16px] sm:px-[85px] pt-[46px] pb-[85] space-y-[24px] mb-[24px]">
      <div className="grid grid-cols md:grid-cols-4 gap-6">
        {store?.map((item) => (
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
                  priority
                />
              </div>
              <div className="absolute top-[124px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-[80px] w-[80px]">
                <div className="h-full w-full rounded-full overflow-hidden relative shadow-md">
                  <Image
                    src={(item.logo as string) || '/logo/ikea.svg'}
                    alt="store logo"
                    fill
                    className="object-cover h-full w-full"
                    priority
                  />
                </div>
              </div>
              <div className="flex justify-start min-h-[calc(224px-123px)] px-[8px] pb-[16px]">
                <div className="h-full mt-[44px] space-y-[12px]">
                  <h5 className="text-dark/80">{item.name}</h5>
                  <div className="flex flex-wrap gap-[4px]">
                    {item?.products?.slice(0, 3)?.map((product, index) => (
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
      {isButtonHidden ? (
        <div className="flex justify-center">
          <Button disabled={isLoading} variant="outline" onClick={handleClick}>
            Load More
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default StoreItemList;
