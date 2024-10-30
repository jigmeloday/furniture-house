import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { HEADER_LINK } from '@/components/header/header.constant';

function SideNav() {
    return(
            <SheetContent className='z-[110]'>
                <SheetHeader className='flex flex-row !items-center justify-between relative'>
                   <SheetTitle>
                       <div className='h-[48px] w-[40px] relative'>
                           {/*<Image src='images/logo/header-logo.svg' alt='logo' fill />*/}
                       </div>
                       <SheetPrimitive.Close className='absolute top-[4px] right-0'>
                           <X className='text-[20px] text-black-mid' />
                       </SheetPrimitive.Close>
                   </SheetTitle>
                    <SheetDescription/>
                </SheetHeader>
                <div className='mt-[16px]'>
                    <ol className='space-y-[16px]'>
                        {
                            HEADER_LINK.map(({ id, label, link }) => (
                                <li key={id+''+label} className='cursor-pointer'>
                                   <SheetClose asChild>
                                       <Link href={link} >{label}</Link>
                                   </SheetClose>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </SheetContent>
    );
}

export default SideNav;
