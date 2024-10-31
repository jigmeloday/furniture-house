'use client';

import Image from 'next/image';

function Swapper() {
    return (
        <div className="relative w-[300px] h-[200px] md:w-[980px] md:h-[400px] overflow-x-auto hide-scroll">
            <div className="overflow-x-auto h-full grid grid-flow-col gap-[12px] hide-scroll">
                {
                    [1, 2, 3, 4, 5].map((item) => (
                        <div className="relative h-full w-[140px] md:w-[340px] rounded-md overflow-hidden group transition duration-300 ease-in-out" key={item}>
                            <Image src='/images/dinning.webp' alt='swapper' fill className="object-cover" />
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                hello
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Swapper;
