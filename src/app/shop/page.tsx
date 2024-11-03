import BannerSection from '@/components/banner-section/banner-section';
import ShopWrapper from '@/app/shop/components/shop-wrapper';

async function Page() {
    return(
        <main>
            <BannerSection title="Shop" />
            <ShopWrapper />
        </main>
    )
}

export default Page;
