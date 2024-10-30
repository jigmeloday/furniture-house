import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-full'>
      <section className='border w-full h-screen'>
          <div className='flex items-center justify-end h-full w-full bg-banner'>
              <div className='space-y-[36px] bg-primary-light pt-[62px] pb-[38px] px-[42px] mr-[58px] rounded-[10px]'>
                  <div>
                      <span className='text-typo-dark text-[14px] font-[600]'>New Arrival</span>
                      <div className='w-[420px]'>
                          <h1 className='text-primary'>Discover Our New Collection</h1>
                          <span className='text-[14px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
                      </div>
                  </div>
                  <div>
                      <Link href='/shop' className='bg-primary text-white px-[24px] py-[12px] rounded-[4px] hover:bg-primary/60 transition duration-300 ease-in-out'>
                          Shop Now
                      </Link>
                  </div>
              </div>
          </div>
      </section>
        <section className='border w-full min-h-screen'>
            <div className=" h-full w-full object-fill bg-[url('/images/banner.webp')]">

            </div>
        </section>
    </main>
  );
}
