'use client';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react';

function Search() {
    const {replace} = useRouter();
    const pathname = usePathname();
    const [searchKey, setSearchKey] = useState('');

    const handleSearch = (e) => {
        if ( e.key === 'Enter' ) {
            replace(`/shop?${searchKey.toString()}`);
        }
    }
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle/>
                <DialogDescription>
                    <Input placeholder='Search...' className='mt-4' onChange={(e) => setSearchKey(e.target.value)} onKeyDown={handleSearch} />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default Search;
