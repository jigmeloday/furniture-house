import { fetchStore } from '@/lib/server-actions/store-action';
import StoreItemList from '@/app/store/components/store-item-list';
import { Store } from '@/lib/schema';

async function StoreWrapper({ search }: { search: string }) {
  const data = (await fetchStore(0, 4, search)) as Store[];

  return <StoreItemList data={data} />;
}

export default StoreWrapper;
