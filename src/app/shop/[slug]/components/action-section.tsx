'use client';
import { Button } from '@/components/ui/button';
import { Variants } from '@/lib/schema';
import { Heart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

function ActionSection(props: { isFavorite: boolean; variant: Variants[] }) {
  const [like, setLike] = useState(props.isFavorite);
  const [activeColor, setActiveColor] = useState(props.variant[0].color);
  const pathname = usePathname();
  const { replace } = useRouter();
  const setColor = (id: number | string, color: string) => {
    const params = new URLSearchParams();
    params.set('color', id as string);
    replace(`${pathname}?${params.toString()}`);
    setActiveColor(color);
  };

  return (
    <div className="space-y-[24px] my-[34px]">
      <div className="flex space-x-2">
        {props?.variant?.map(({ variant_option, color }) => (
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
        <Button className="w-[190px]">Add to Cart</Button>
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
