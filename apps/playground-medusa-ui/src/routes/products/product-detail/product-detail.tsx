'use client';
import { TwoColumnPage } from '@/components/layout/pages/two-column-page';

export const ProductDetail = () => {
  return (
    <TwoColumnPage showJSON showMetadata data={{}}>
      <TwoColumnPage.Main>
        {/* ProductGeneralSection */}
        {/* ProductMediaSection */}
        {/* ProductOptionSection */}
        {/* ProductVariantSection */}
      </TwoColumnPage.Main>
      <TwoColumnPage.Sidebar>
        {/* ProductSalesChannelSection */}
        {/* ProductShippingProfileSection */}
        {/* ProductOrganizationSection */}
      </TwoColumnPage.Sidebar>
    </TwoColumnPage>
  );
};
