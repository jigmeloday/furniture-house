import BannerSection from '@/components/banner-section/banner-section';
import Filter from '@/components/filter/filter';
import StoreWrapper from '@/app/store/components/store-wrapper';
import { SearchParams } from '@/lib/schema';

async function Page(props: { searchParams: Promise<SearchParams> }){
    const searchParam = await props.searchParams;

    return(
        <main>
            <BannerSection title="Store" />
            <Filter />
            <StoreWrapper search={searchParam.query as string}/>
        </main>
    );
}

export default Page;
