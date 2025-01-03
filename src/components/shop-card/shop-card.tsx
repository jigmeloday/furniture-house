'use client';
import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { addFavorite } from '@/lib/server-actions/add-fav-action';
import { PopularOrder, ShopItem, User } from '@/lib/schema';
import { useDispatch } from 'react-redux';
import { addItemCart } from '@/lib/slices/add-to-cart';
import { useToast } from '@/hooks/use-toast';

function ShopCard(props: {
  item: PopularOrder & ShopItem;
  user: User | null;
  store?: string;
}) {
  const { item, user, store } = props;
  const [like, setLike] = useState(item?.is_favorite);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleLike = async () => {
    if (user) {
      try {
        const response = await addFavorite(item.item_id);
        if (response) {
          setLike(!like);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'You need to sign up to perform this action',
      });
    }
  };

  const handleCart = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      dispatch(
        addItemCart({
          ...item,
          id: item.id || item.item_id,
        })
      );
    } else {
      toast({
        variant: 'destructive',
        title: 'OUT OF STOCK',
        description:
          'You cannot add more than the available quantity in stock.',
      });
    }
  };

  return (
    <div
      className="w-full xl:w-[285px] border group rounded-sm"
      key={item?.item_id}
    >
      <div className="relative h-[301px] w-full">
        <Image
          src={item.cover || '/images/living.webp'}
          alt="dummy"
          fill
          className="object-cover transition-all"
        />
        {item.discount ? (
          <div className="h-10 w-10 flex items-center justify-center rounded-full absolute z-[10] top-4 right-4 bg-primary-light/70">
            <span className="text-[12px] font-[800] text-primary text-center">
              {item?.discount_percentage}%
            </span>
          </div>
        ) : null}
        <div className="z-[20] justify-center items-center bg-primary-lighter/80 min-h-full w-full absolute flex bottom-0 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex space-x-[12px]">
            <ShoppingCart
              onClick={() => handleCart()}
              className="text-primary cursor-pointer hover:text-primary/50 transition ease-in-out duration-300"
            />
            <Heart
              fill={like ? '#B88E2F' : 'transparent'}
              className="text-primary cursor-pointer hover:text-primary/50 transition ease-in-out duration-300"
              onClick={handleLike}
            />
          </div>
        </div>
      </div>
      <Link href={`/shop/${item.item_id || item.id}`}>
        <div className="flex flex-col pt-[4px] pb-[12px] px-[16px]  cursor-pointer">
          <p className="font-[700] text-[14px] group-hover:text-primary transition duration-300">
            {item?.store_name || store}
          </p>
          <p className="font-[400] text-[12px]">
            {item?.item_name || item.name}
          </p>
          <div className="flex space-x-[12px] items-center">
            <span className="font-[600] text-[14px]">Nu.{item?.price}</span>
            {item.discount ? (
              <s className="text-typo-dark/50 text-[12px]">
                Nu.{item.discount}
              </s>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShopCard;
