import ShopCard from '@/components/shop-card/shop-card';
import { Params, PopularOrder } from '@/lib/schema';
import { fetchStoreItems } from '@/lib/server-actions/store-action';
import { createClient } from '@/lib/supbase/server';
import Image from 'next/image';

async function Page(props: { params: Promise<Params> }) {
const param = await props.params;
const store = await fetchStoreItems(param.slug, 1, 10);
const {data: { user }} = await (await createClient()).auth.getUser();

return(
      <main>
        <section className="relative">
          <div className="relative">
          <div className="relative h-[320px]">
            <Image src={store.cover || '/images/dinning.webp'} alt='cover' fill className="object-cover" />
          </div>
          <div className="flex overflow-hidden justify-center items-center bg-white h-[140px] w-[140px] border absolute -bottom-[60px] left-8 rounded-full">
            <Image src={store.logo || '/logo/ikea.svg'} alt="logo" fill className="object-conte"/>
          </div>
          </div>
          <div className="flex justify-end my-[16px] ">
            <div className="flex flex-col items-start w-[88%]">
              <div className="w-[60%] space-y-4">
                <h4>{store.name}</h4>
                <span className="text-typo-dark/70 text-[14px]">{store.description}</span>
                <div className='flex flex-wrap space-x-4'>
                  {store.products.map((product: string[], index: number) => (
                    <div className="text-[12px] px-2 bg-primary-light rounded-sm" key={`${product}-${index}`}>
                       {product}
                    </div>
                  ))}
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className='px-[16px] sm:px-[85px] mt-[52px] mb-[40px]'>
         <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4">
          {
            store.items?.map((item: PopularOrder) => (
              <div key={item?.item_id}>
                <ShopCard user={user} item={item} store={store.name} />
              </div>
            ))
            }
         </div>
        </section>
      </main>
  );
}

export default Page;