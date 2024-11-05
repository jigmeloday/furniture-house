import BannerSection from '@/components/banner-section/banner-section';
import Image from 'next/image';

function Page() {
  return (
        <main>
          <BannerSection title="About Us" />
          <section className="px-[16px] sm:px-[85px] mt-[52px] mb-[40px]">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center py-[16px]">
                <h2>Our Mission</h2>
                <p className="text-[14px] text-typo-dark/70 w-[500px] my-[24px]">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
              <div className="space-y-[16px]">
                <div className="flex space-x-[12px]">
                  <div className="relative h-[230px] w-[50%] rounded-md overflow-hidden">
                    <Image src="/images/about-1.webp" alt="about" fill className="object-cover" />
                  </div>
                  <div className="relative h-[230px] w-[50%] rounded-md overflow-hidden">
                  <Image src="/images/about-2.webp" alt="about" fill className="object-cover" />
                  </div>
                </div>
                <div className="w-[100%] h-[230px] relative rounded-md overflow-hidden">
                <Image src="/images/about-3.webp" alt="about" fill className="object-cover" />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[24px] bg-primary-lighter">
            <div className="flex flex-col items-center px-[16px] sm:px-[85px] py-[42px]">
            <h1>Our Services</h1>
            <div className="grid grid-cols-3 gap-[16px] my-[24px]">
              <div className="bg-white p-4 rounded-md">
                <h6>Consultation and Design</h6>
                <p className='text-[14px] text-typo-dark/80'>Personalized design consultations to help choose furniture styles and arrangements that suit your space.</p>
              </div>
  
              <div className="bg-white p-4 rounded-sm">
                <h6>Delivery Service</h6>
                <p className='text-[14px] text-typo-dark/80'>Safe and timely delivery of furniture to your home or business.</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <h6>Furniture Assembly and Fitting</h6>
                <p className='text-[14px] text-typo-dark/80'>Professional assembly and fitting to ensure correct and secure setup.</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <h6>Room Layout and Planning</h6>
                <p className='text-[14px] text-typo-dark/80'>Assistance with planning and visualizing the layout of a room.</p>
              </div>
              <div className="bg-white p-4 rounded-md">
                <h6>Product Protection Plans</h6>
                <p className='text-[14px] text-typo-dark/80'>Warranty and protection plans covering repair or replacement.</p>
              </div>
            </div>
            </div>
          </section>
          <section className="mt-[24px">
            <div className="flex flex-col items-center px-[16px] sm:px-[85px] py-[42px]">
              <h1>Meet Our Team</h1>
              <div className="grid grid-cols-4 gap-[32px] mt-[24px]">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-[140px] w-[140px] border rounded-full">

                  </div>
                  <span className="font-extrabold text-primary">Jimmy James</span>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-[140px] w-[140px] border rounded-full">

                  </div>
                  <span className="font-extrabold text-primary">Sept Curry </span>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-[140px] w-[140px] border rounded-full">

                  </div>
                  <span className="font-extrabold text-primary">Harden Lebron</span>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-[140px] w-[140px] border rounded-full">

                  </div>
                  <span className="font-extrabold text-primary">Mosi Bluter</span>
                </div>
              </div>
            </div>
          </section>
        </main>
  );
}

export default Page;