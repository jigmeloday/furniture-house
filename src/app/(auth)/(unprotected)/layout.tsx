import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { ReactElement } from 'react';

async function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:flex sm:w-[40%] xl:w-[60%]">
        <div className="h-full w-full relative">
          <Image
            src="/images/living.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full sm:w-[60%] xl:w-[40%] px-[42px]">
        {children}
        <div className="space-y-[24px] mt-[24px]">
          <div className="flex items-center w-full space-x-[16px]">
            <div className="w-full">
              <Separator />
            </div>
            <div className="text-typo-dark/70 text-[14px] font-semibold">
              {' '}
              OR{' '}
            </div>
            <div className="w-full">
              <Separator />
            </div>
          </div>
          <div className="w-full">
            <Button className="w-full" variant="outline">
              Login With Gmail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
