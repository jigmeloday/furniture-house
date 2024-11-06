import BannerSection from '@/components/banner-section/banner-section';
import { Clock, MapPin, Phone } from 'lucide-react';
import Form from './components/form';

function Page() {
  return(
    <main>
      <BannerSection title="Contact Us"/>
      <section className="flex flex-col items-center px-[16px] sm:px-[85px] w-full my-[28px] sm:my-[96px]">
        <h3>Get In Touch With Us</h3>
        <p className="mt-[6px] w-[644px] text-center text-[14px] text-typo-dark/70">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </section>
      <section className="flex space-x-8 justify-center px-[16px] sm:px-[85px] w-full my-[28px] sm:my-[96px]">
        <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <MapPin />
              <div className="space-y-2">
                <h6>Address</h6>
                <p className="text-typo-dark/70 w-[240px] text-[14px]">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone />
              <div className="space-y-2">
                <h6>Phone</h6>
                <p className="text-typo-dark/70 w-[240px] text-[14px]">Mobile: +(84) 546-6789</p>
                <p className="text-typo-dark/70 w-[240px] text-[14px]">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock />
              <div className="space-y-2">
                <h6>Working Hour</h6>
                <p className="text-typo-dark/70 w-[240px] text-[14px]">Monday-Friday: 9:00 - 22:00 </p>
                <p className="text-typo-dark/70 w-[240px] text-[14px]">Saturday-Sunday: 9:00 - 21:00 </p>
              </div>
            </div>
        </div>
        <div className="flex flex-col w-[40%]">
          <Form />
        </div>
      </section>
    </main>
  );
}

export default Page;