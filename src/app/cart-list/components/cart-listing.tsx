'use client';

import { PopularOrder, ShopItem } from '@/lib/schema';
import { selectCartItems } from '@/lib/slices/add-to-cart';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function CartListing() {
  const products = useSelector(selectCartItems) as PopularOrder[] & ShopItem[];

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-center">Product</div>
        <div className="text-center">Product</div>
        <div className="">Product</div>
        <div className="">Product</div>
      </div>
      <div>
        {products.length ? (
          products.map(
            ({
              item_name,
              name,
              price,
              item_id,
              total_item,
              cover,
              store_name,
            }) => (
              <div className="flex justify-between" key={item_id}>
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] relative">
                    <Image
                      src={cover}
                      alt="product image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>{item_name || name}</span>
                    <span>{store_name}</span>
                  </div>
                </div>
                <div>{price}</div>
                <div>{total_item}</div>
                <div>{total_item * price}</div>
              </div>
            )
          )
        ) : (
          <>no data</>
        )}
      </div>
    </div>
  );
}

export default CartListing;
