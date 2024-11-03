'use client';
import { ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

function BannerSection({ title }){
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter((segment) => segment);

    return(
        <div className="flex flex-col justify-center items-center bg-cover-section bg-cover min-h-[316px]">
            <h4>{title}</h4>
            <div className="flex items-center text-center">
                <Link href="/">
                    <span className="cursor-pointer">Home</span>
                </Link>

                {pathArray.map((segment, index) => {
                    const isLast = index === pathArray.length - 1;
                    const href = '/' + pathArray.slice(0, index + 1).join('/');
                    const displaySegment = segment.charAt(0).toUpperCase() + segment.slice(1);

                    return (
                        <div key={href} className="flex items-center">
                            <ChevronRight className="h-[16px] w-[16px]" />
                            {!isLast ? (
                                <Link href={href}>
                                    <span className="cursor-pointer">{displaySegment}</span>
                                </Link>
                            ) : (
                                <span className="font-[200]">{displaySegment}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BannerSection;
