'use client';

import { SingleColumnPageSkeleton } from '@/components/common/skeleton';
import { TwoColumnPage } from '@/components/layout/pages';
import { CustomerAddressSection } from './components/customer-address-section';
import { CustomerGeneralSection } from './components/customer-general-section';
import { CustomerGroupSection } from './components/customer-group-section';
import { CustomerOrderSection } from './components/customer-order-section';
import { useLoaderData, useExtension, useCustomer } from './loader';

export const PageDetail = () => {
  const initialData = useLoaderData();

  const { customer, isLoading, isError, error } = useCustomer();

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
        <CustomerOrderSection customer={customer} />
        <CustomerGroupSection customer={customer} />
      </TwoColumnPage.Main>
      <TwoColumnPage.Sidebar>
        <CustomerAddressSection customer={customer} />
      </TwoColumnPage.Sidebar>
    </TwoColumnPage>
  );
};
