'use client';
import { Variants } from '@/lib/schema';
import Image from 'next/image';
import { useState } from 'react';

function ImageHolder(props: { variant: Variants }) {
  const [active, setActive] = useState(props?.variant?.image[0]);
  
  return (
    <div className="flex space-x-8">
      <div className="w-[76px] space-y-[28px]">
        {props.variant.image.map((item) => (
          <div
            className={`w-full h-[80px] relative rounded-lg overflow-hidden ${
              active === item ? 'border-2 border-primary' : ''
            }`}
            key={item}
            onClick={() => setActive(item)}
          >
            <Image
              src={item}
              alt="product item"
              fill
              className="object-cover object-center cursor-pointer "
            />
          </div>
        ))}
      </div>
      <div className="w-[423px] h-[500px] relative">
        <Image src={active} alt="product item" fill className="object-cover" />
      </div>
    </div>
  );
}

export default ImageHolder;
