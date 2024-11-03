import BannerSection from '@/components/banner-section/banner-section';
import ShopWrapper from '@/app/shop/components/shop-wrapper';
import Filter from '@/components/filter/filter';

async function Page(props) {
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
            <ShopWrapper category={category} store={store} price={price} discount={discount} sort={sort} />
        </main>
    )
}

export default Page;
