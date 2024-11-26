import BannerSection from '@/components/banner-section/banner-section';
import CartListing from './components/cart-listing';

function CartList() {
  return (
    <div>
      <BannerSection title="Cart" />
      <div className="py-[32px] px-[16px] sm:px-[85px]">
        <CartListing />
      </div>
    </div>
  );
}

export default CartList;
