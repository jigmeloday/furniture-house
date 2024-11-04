'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SetupShow() {

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <motion.div
                className="inline-block w-full flex items-center justify-between space-x-[16px]"
                animate={{ x: ['0%', '-100%' ] }} // Animate to create the scroll effect
                transition={{
                    duration: 500, // Total duration for a full scroll
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop' // Loop the animation
                }}
            >
                <div className="flex flex-col space-y-[16px]">
                    <div className="flex items-end space-x-[16px]">
                        <div className="relative h-[382px] w-[274px]">
                            <Image src="/images/decor1.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[312px] w-[451px]">
                            <Image src="/images/decor2.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex space-x-[16px]">
                        <div className="relative h-[382px] min-w-[381px]">
                            <Image src="/images/decor9.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[312px] min-w-[344px]">
                            <Image src="/images/decor3.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                <div className="relative h-[392px] min-w-[295px]">
                    <Image src="/images/decor4.webp" alt="decor" fill className="object-cover" />
                </div>

                <div className="flex flex-col space-y-[16px]">
                    <div className="flex items-end space-x-[16px]">
                        <div className="relative h-[348px] min-w-[425px]">
                            <Image src="/images/decor5.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[433px] min-w-[262px]">
                            <Image src="/images/decor6.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex space-x-[16px]">
                        <div className="relative h-[242px] min-w-[178px]">
                            <Image src="/images/decor7.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[196px] min-w-[258px]">
                            <Image src="/images/decor8.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-[16px]">
                    <div className="flex items-end space-x-[16px]">
                        <div className="relative h-[382px] w-[274px]">
                            <Image src="/images/living.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[312px] w-[451px]">
                            <Image src="/images/dinning.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex space-x-[16px]">
                        <div className="relative h-[382px] min-w-[381px]">
                            <Image src="/images/bed-room.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[312px] min-w-[344px]">
                            <Image src="/images/decor3.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                <div className="relative h-[392px] min-w-[295px]">
                    <Image src="/images/decor4.webp" alt="decor" fill className="object-cover" />
                </div>

                <div className="flex flex-col space-y-[16px]">
                    <div className="flex items-end space-x-[16px]">
                        <div className="relative h-[348px] min-w-[425px]">
                            <Image src="/images/decor5.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[433px] min-w-[262px]">
                            <Image src="/images/decor6.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex space-x-[16px]">
                        <div className="relative h-[242px] min-w-[178px]">
                            <Image src="/images/decor7.webp" alt="decor" fill className="object-cover" />
                        </div>
                        <div className="relative h-[196px] min-w-[258px]">
                            <Image src="/images/decor8.webp" alt="decor" fill className="object-cover" />
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
