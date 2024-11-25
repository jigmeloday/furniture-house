'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { HEADER_LINK } from '@/components/header/header.constant';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Home,
  Menu,
  Search,
  ShoppingCart,
  User as UserIcon,
} from 'lucide-react';
import SideNav from '@/components/side-nav/side-nav';
import { User } from '@/lib/schema';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/lib/slices/add-to-cart';

function Header({ user }: { user: User | null }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const { replace } = useRouter();
  const [searchKey, setSearchKey] = useState('');
  const cartItem = useSelector(selectCartItems);
  console.log(cartItem);
  const handleSearch = (e: { key: string }) => {
    if (e.key === 'Enter') {
      setOpen(false);
      replace(`/shop?${searchKey.toString()}`);
    }
  };

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

  return (
    <nav
      className={`z-[101] flex items-center justify-between px-[4%] xl:px-[6%] py-[8px] shadow transition-transform duration-300 bg-white ${
        showHeader ? 'translate-y-0 sticky top-0' : '-translate-y-full'
      }`}
    >
      <Link prefetch={false} href="/">
        <div className="flex items-center h-[60px] w-[52px] rounded-[0.22px] relative">
          {/*<Image src='/images/logo/header-logo.svg' alt='logo' fill />*/}
          <Home className="text-primary" size={32} />
        </div>
      </Link>

      <ol className="space-x-[24px] hidden lg:flex">
        {HEADER_LINK.map(({ id, label, link }) => (
          <li key={id} className="cursor-pointer">
            <Link
              href={link}
              className={`pb-[4px] ${
                link == pathName
                  ? 'text-primary hover:text-primary/50 transition duration-300 ease-in-out'
                  : 'hover:text-primary transition duration-300 ease-in-out transition duration-300 ease-in-out'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ol>
      <div className="flex items-center">
        <Dialog open={isOpen}>
          <ol className="space-x-[24px] flex ">
            <li className="cursor-pointer">
              <div
                onClick={() => setOpen(true)}
                className="pb-[4px] transition duration-300 ease-in-out relative"
              >
                <Search />
              </div>
            </li>
            <li className="cursor-pointer">
              <Link
                href={''}
                className="pb-[4px] transition duration-300 ease-in-out relative"
              >
                {cartItem.length ? (
                  <div className="flex text-[10px] items-center justify-center absolute bg-primary h-4 w-4 rounded-full -top-1 -right-[8px] text-white">
                    {cartItem.length}
                  </div>
                ) : null}
                <ShoppingCart />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                href={!user ? '/login' : '/profile'}
                className="pb-[4px] transition duration-300 ease-in-out"
              >
                <UserIcon />
              </Link>
            </li>
          </ol>
          <DialogContent>
            <DialogHeader>
              <DialogTitle />
              <DialogDescription>
                <Input
                  placeholder="Search..."
                  className="mt-4"
                  onChange={(e) => setSearchKey(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="cursor-pointer !h-[30px] !w-[30px] text-primary" />
                </Button>
              </SheetTrigger>
              <SideNav />
            </Sheet>
          </div>
        </Dialog>
      </div>
    </nav>
  );
}

export default Header;
