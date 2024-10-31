import Image from 'next/image';
import Login from '@/app/(auth)/login/components/login';

function Page() {
    return(
        <div className="flex justify-center items-center h-screen w-full">
            <div className="flex items-center py-16 px-12 shadow-md rounded-md bg-primary-lighter space-x-[16px]">
                <Login />
                <div className="flex items-center justify-center w-[340px] relative h-[240px]">
                    <Image src='/images/living.webp' alt='sign-in' fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Page
