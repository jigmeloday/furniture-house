'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { HEADER_ICONS, HEADER_LINK } from '@/components/header/header.constant';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Sheet,
    SheetTrigger
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import SideNav from '@/components/side-nav/side-nav';

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const pathName = usePathname();
    const {replace} = useRouter();
    const [searchKey, setSearchKey] = useState('');

    const handleSearch = (e) => {
        if ( e.key === 'Enter' ) {
            setOpen(false)
            replace(`/shop?${searchKey.toString()}`);
        }
    }
    
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, lastScrollY]);

    return(
        <nav className={`z-[101] flex items-center justify-between px-[4%] xl:px-[6%] py-[8px] shadow transition-transform duration-300 bg-white ${showHeader ? 'translate-y-0 sticky top-0' : '-translate-y-full'}`}>
            <Link prefetch={false} href='/'>
                <div className='flex items-center h-[60px] w-[52px] rounded-[0.22px] relative'>
                    {/*<Image src='/images/logo/header-logo.svg' alt='logo' fill />*/}
                    Logo
                </div>
            </Link>

            <ol className='space-x-[24px] hidden lg:flex'>

                {
                    HEADER_LINK.map(({ id, label, link }) => (
                        <li key={id} className='cursor-pointer'>
                            <Link href={link} className={`pb-[4px] ${ link == pathName ? 'text-primary hover:text-primary/50 transition duration-300 ease-in-out' : 'hover:text-primary transition duration-300 ease-in-out transition duration-300 ease-in-out' }` }>
                                {label}
                            </Link>
                        </li>
                    ))
                }
            </ol>
            <Dialog open={isOpen}>
                <ol className='space-x-[24px] hidden lg:flex'>

                    {
                        HEADER_ICONS.map(({ id, icon: IconComponent, link }) => (
                            id === 'search' ?
                                <li key={id} className='cursor-pointer'>
                                    <div onClick={() => setOpen(true)} className='pb-[4px] transition duration-300 ease-in-out'>
                                       <IconComponent />
                                    </div>
                                </li> :
                                <li key={id} className='cursor-pointer'>
                                    <Link href={link} className='pb-[4px] transition duration-300 ease-in-out'>
                                        <IconComponent />
                                    </Link>
                                </li>
                        ))
                    }
                </ol>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle/>
                        <DialogDescription>
                            <Input placeholder='Search...' className='mt-4' onChange={(e) => setSearchKey(e.target.value)} onKeyDown={handleSearch} />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div className='lg:hidden'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant='ghost'>
                            <Menu className='cursor-pointer !h-[30px] !w-[30px] text-primary' />
                        </Button>
                    </SheetTrigger>
                    <SideNav />
                </Sheet>
            </div>

        </nav>
    )
}

export default Header;
