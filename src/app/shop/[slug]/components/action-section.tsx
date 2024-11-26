'use client';
import { Button } from '@/components/ui/button';
import { PopularOrder, ShopItem, Variants } from '@/lib/schema';
import { addItemCart } from '@/lib/slices/add-to-cart';
import { Heart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ActionSection(props: { product: ShopItem & PopularOrder }) {
  const { product } = props;
  const [like, setLike] = useState(product.is_favorite);
  const [activeColor, setActiveColor] = useState(product.variants[0].color);
  const pathname = usePathname();
  const { replace } = useRouter();
  const dispatch = useDispatch();
  const setColor = (id: number | string, color: string) => {
    const params = new URLSearchParams();
    params.set('color', id as string);
    replace(`${pathname}?${params.toString()}`);
    setActiveColor(color);
  };

  return (
    <div className="space-y-[24px] my-[34px]">
      <div className="flex space-x-2">
        {product?.variants?.map(({ variant_option, color }) => (
          <div
            className={`h-8 w-8 rounded-full border-2 cursor-pointer ${
              color === activeColor ? 'border-primary' : 'border-primary-light'
            }`}
            style={{ background: color }}
            key={`${variant_option} + ${color}`}
            onClick={() => setColor(variant_option, color)}
          />
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Button className="w-[190px]" onClick={() => dispatch(addItemCart(product))}>Add to Cart</Button>
        <Heart
          size={32}
          fill={like ? '#B88E2F' : 'transparent'}
          className="text-primary cursor-pointer"
          onClick={() => setLike(true)}
        />
      </div>
    </div>
  );
}

export default ActionSection;
