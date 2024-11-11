import Image from 'next/image';
import { ReactElement } from 'react';

async function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%]">
        <div className="h-full w-full relative">
          <Image
            src="/images/living.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-[40%] border px-[42px]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
