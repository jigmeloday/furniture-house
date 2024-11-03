'use client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Filter() {
    const {replace} = useRouter();
    const pathname  = usePathname();
    const searchParam = useSearchParams();

    const [category, setCategory] = useState('');
    useEffect(() => {
        const categoryType = searchParam.get('category')
        setCategory(categoryType ?? '');
    }, [])

    const applyFilter = (value, type) => {
        const params = new URLSearchParams(location.search);
        if (type === 'category') {
            if (value === 'clear') {
                setCategory('');
                params.delete('category');
            } else {
                setCategory(value);
                params.set('category', value);
            }
        } else {
            if (value === 'clear') {
                params.delete(type);
            } else {
                params.set(type, value);
            }
        }
        replace(`${pathname}?${params.toString()}`);
    }


    return(
       <div className="flex justify-between items-center bg-primary-lighter py-[32px] px-[16px] sm:px-[85px]">
           <div className="flex space-x-[24px]">
               <Select onValueChange={(value) => applyFilter(value, 'category')} value={category}>
                   <SelectTrigger className="w-[180px]">
                       <SelectValue placeholder="Category" />
                   </SelectTrigger>
                   <SelectContent>
                       <SelectItem value="bedroom">Bedroom</SelectItem>
                       <SelectItem value="dinning">Dinning</SelectItem>
                       <SelectItem value="kitchen">Kitchen</SelectItem>
                       <SelectItem value="living">Living Room</SelectItem>
                       <SelectItem value="outdoor">Outdoor</SelectItem>
                       <SelectItem value="toilet">Toilet</SelectItem>
                       <SelectItem value="clear">Clear</SelectItem>
                   </SelectContent>
               </Select>
               <Select onValueChange={(value) => applyFilter(value, 'store')}>
                   <SelectTrigger className="w-[180px]">
                       <SelectValue placeholder="Store" />
                   </SelectTrigger>
                   <SelectContent>
                       <SelectItem value="ashley">Ashley Furniture</SelectItem>
                       <SelectItem value="cb2">CB2</SelectItem>
                       <SelectItem value="crate-barrel">Crate & Barrel</SelectItem>
                       <SelectItem value="havertys">Havertys</SelectItem>
                       <SelectItem value="ikea">IKEA</SelectItem>
                       <SelectItem value="la-z-boy">La-Z-Boy</SelectItem>
                       <SelectItem value="pottery-barn">Pottery Barn</SelectItem>
                       <SelectItem value="room-board">Room & Board</SelectItem>
                       <SelectItem value="wayfair">Wayfair</SelectItem>
                       <SelectItem value="west-elm">West Elm</SelectItem>
                       <SelectItem value="clear">Clear</SelectItem>
                   </SelectContent>
               </Select>
               <Select onValueChange={(value) => applyFilter(value, 'discount')}>
                   <SelectTrigger className="w-[180px]">
                       <SelectValue placeholder="Discount" />
                   </SelectTrigger>
                   <SelectContent>
                       <SelectItem value="discount">Discounted</SelectItem>
                       <SelectItem value="non-discount">Non-Discounted</SelectItem>
                       <SelectItem value="clear">Clear</SelectItem>
                   </SelectContent>
               </Select>
               <Select onValueChange={(value) => applyFilter(value, 'price')}>
                   <SelectTrigger className="w-[180px]">
                       <SelectValue placeholder="Price" />
                   </SelectTrigger>
                   <SelectContent>
                       <SelectItem value="low">Under Nu 1000</SelectItem>
                       <SelectItem value="medium">Nu 1000 - Nu 5000</SelectItem>
                       <SelectItem value="high">Nu 5000 - Nu 10000</SelectItem>
                       <SelectItem value="premium">Over Nu 10000</SelectItem>
                       <SelectItem value="clear">Clear</SelectItem>
                   </SelectContent>
               </Select>
           </div>
           <Select onValueChange={(value) => applyFilter(value, 'sort')}>
               <SelectTrigger className="w-[180px]">
                   <SelectValue placeholder="Sort by" />
               </SelectTrigger>
               <SelectContent>
                   <SelectItem value="newest">Newest Added</SelectItem>
                   <SelectItem value="oldest">Oldest Added</SelectItem>
                   <SelectItem value="price-asc">Price: Low to High</SelectItem>
                   <SelectItem value="price-desc">Price: High to Low</SelectItem>
                   <SelectItem value="clear">Clear</SelectItem>
               </SelectContent>
           </Select>
       </div>
    )
}

export default Filter;
