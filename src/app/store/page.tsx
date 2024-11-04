import BannerSection from '@/components/banner-section/banner-section';
import Filter from '@/components/filter/filter';
import StoreWrapper from '@/app/store/components/store-wrapper';

function Page(){
    return(
        <main>
            <BannerSection title="Store" />
            <Filter />
            <StoreWrapper  />
        </main>
    )
}

export default Page;
