'use client';

import { Button } from '@/components/ui/button';
import { PopularOrder, ShopItem } from '@/lib/schema';
import {
  addItemCart,
  removeFromCart,
  selectCartItems,
  selectCartSubtotal,
} from '@/lib/slices/add-to-cart';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

function CartListing() {
  const products = useSelector(selectCartItems) as PopularOrder[] & ShopItem[];
  const subtotal = useSelector(selectCartSubtotal);
  const tax = Math.ceil(subtotal * (5 / 100));
  const dispatch = useDispatch();

  return (
    <div>
      {products.length ? (
        <div className="flex space-x-[38px]">
          <div className="border px-8 py-4 h-fit">
            {products.map((item) => (
              <div className="grid grid-cols-4 gap-4" key={item.item_id}>
                <div className="flex space-x-4 items-center">
                  <div className="h-[80px] w-[80px] relative">
                    <Image
                      src={item.cover}
                      alt="product image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="font-bold">{item.store_name}</span>
                    <span className="text-[12px]">
                      {item.item_name || item.name}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  Nu. {item.price}
                </div>
                <div className="flex space-x-2 items-center justify-center">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      dispatch(addItemCart(item as PopularOrder & ShopItem))
                    }
                    className={`px-2 rounded text-white  ${
                      item.quantity <= 1 ? 'bg-primary/50' : 'bg-primary'
                    }`}
                  >
                    +
                  </button>
                  <div className="border px-2 rounded">{item.total_item}</div>
                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item as PopularOrder & ShopItem))
                    }
                    className="px-2 rounded bg-primary text-white"
                  >
                    -
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  {item.total_item * item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[360px] p-[24px] bg-primary-light rounded-md">
            <span className="font-light">Price Details</span>
            <div className="mt-[16px] space-y-[16px]">
              <div className="w-full flex justify-between">
                <span className="text-[14px] text-typo-dark/70">Subtotal</span>
                <span className="text-[12px] text-typo-dark/70">
                  Nu. {subtotal}
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-[14px] text-typo-dark/70">
                  Shipping Charge
                </span>
                <span className="text-[12px] text-typo-dark/70">Nu. 200</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-[14px] text-typo-dark/70">5% tax</span>
                <span className="text-[12px] text-typo-dark/70">Nu. {tax}</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-[14px] font-semibold">Total Amount</span>
                <span className="text-[14px] font-semibold">
                  Nu. {subtotal + 200 + tax}
                </span>
              </div>
              <Button className="w-full">Proceed to buy</Button>
            </div>
          </div>
        </div>
      ) : (
        <>No Data</>
      )}
    </div>
  );
}

export default CartListing;
