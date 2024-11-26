import { Separator } from '@/components/ui/separator';
import ActionSection from './components/action-section';
import {
  fetchItemById,
  fetchVariantOption,
} from '@/lib/server-actions/shop-action';
import { Params, PopularOrder, SearchParams, ShopItem } from '@/lib/schema';
import ImageHolder from './components/image-holder';

async function Page(props: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const id = await props.params;
  const color = await props.searchParams;
  const product_item: ShopItem & PopularOrder = await fetchItemById(id.slug);
  const variant_option = await fetchVariantOption(
    (color.color as unknown as number) ??
      product_item.variants[0].variant_option
  );

  return (
    <main>
      <section className="w-full bg-primary-light py-[38px] px-[16px] sm:px-[85px]">
        Home
      </section>
      <section className="flex py-[38px] px-[16px] sm:px-[85px] space-x-8">
        <ImageHolder variant={variant_option} key={variant_option?.image[0]} />
        <div className="ml-[80px] w-[606px]">
          <h4>{product_item?.item_name}</h4>
          <span className="text-primary">{product_item.store_name}</span>
          <p className="text-typo-dark/60 text-[14px] font-[500]">
            Nu. {product_item.price}
          </p>
          <p className="w-[424px] text-[12px] mt-[8px]">
            {product_item.description}
          </p>
          <ActionSection
            product={product_item}
          />
          <Separator />
          <div className="space-y-2 mt-[24px]">
            <div className="flex text-typo-dark/70 text-[14px]  space-x-2">
              <span>SKU</span> : <span>{product_item.sku}</span>
            </div>
            <div className="flex text-typo-dark/70 text-[14px] space-x-2">
              <span>Category</span> :{' '}
              <span>
                {product_item.category.charAt(0).toUpperCase() +
                  product_item.category.slice(1)}
              </span>
            </div>
            <div className="flex text-typo-dark/70 text-[14px] space-x-2">
              <span>Total</span> : <span>{product_item.quantity}</span>
            </div>
            <div className="flex text-typo-dark/70 text-[14px] space-x-2">
              <span>Share</span> : <span>123123</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
