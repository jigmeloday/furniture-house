import BannerSection from '@/components/banner-section/banner-section';
import ShopWrapper from '@/app/shop/components/shop-wrapper';
import Filter from '@/components/filter/filter';
import { SearchParams } from '@/lib/schema';

async function Page(props: { searchParams: Promise<SearchParams> }) {
    const searchParam = await props.searchParams;
    const category = searchParam.category;
    const store = searchParam.store;
    const discount = searchParam.discount;
    const price = searchParam.price;
    const sort = searchParam.sort;

    return(
        <main>
            <BannerSection title="Shop" />
            <Filter />
            <ShopWrapper category={category as string} store={store as string} price={price as string} discount={discount as string} sort={sort as string} />
        </main>
    );
}

export default Page;
