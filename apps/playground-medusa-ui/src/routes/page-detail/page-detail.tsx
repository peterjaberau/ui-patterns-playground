'use client';

import { SingleColumnPageSkeleton } from '@/components/common/skeleton';
import { TwoColumnPage } from '@/components/layout/pages';
import { useOrder, useProduct } from '@/mock-api';
import { OrderActivitySection } from '@/routes/page-detail/components/order-activity-section';
import { ProductAttributeSection } from '@/routes/page-detail/components/product-attribute-section';
import { ProductMediaSection } from '@/routes/page-detail/components/product-media-section';
import { CustomerAddressSection } from './components/customer-address-section';
import { CustomerGeneralSection } from './components/customer-general-section';
import { CustomerGroupSection } from './components/customer-group-section';
import { CustomerOrderSection } from './components/customer-order-section';
import { useLoaderData, useExtension, useCustomer } from './loader';

export const PageDetail = () => {
  const initialData = useLoaderData();

  const { customer, isLoading, isError, error } = useCustomer();
  const { product } = useProduct();
  const { order } = useOrder();

  const { getWidgets } = useExtension();

  if (isLoading || !customer) {
    return <SingleColumnPageSkeleton sections={2} showJSON showMetadata />;
  }

  if (isError) {
    throw error;
  }

  return (
    <TwoColumnPage
      widgets={
        {
          before: getWidgets('customer.details.before'),
          after: getWidgets('customer.details.after'),
          sideAfter: getWidgets('customer.details.side.after'),
          sideBefore: getWidgets('customer.details.side.before'),
        } as any
      }
      data={customer}
      hasOutlet
      showJSON
      showMetadata
    >
      <TwoColumnPage.Main>
        <CustomerGeneralSection customer={customer} />
        <ProductMediaSection product={product} />
        <CustomerOrderSection customer={customer} />
        <CustomerGroupSection customer={customer} />
      </TwoColumnPage.Main>
      <TwoColumnPage.Sidebar>
        <CustomerAddressSection customer={customer} />
        <ProductAttributeSection product={product} />
        <OrderActivitySection order={order} />
      </TwoColumnPage.Sidebar>
    </TwoColumnPage>
  );
};
