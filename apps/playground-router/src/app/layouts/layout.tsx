import { getCategories } from '@/app/api/categories/getCategories';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutSection } from '@/ui/global-layout-section';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

const title = 'Nested Layouts';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <>
      <GlobalLayoutSection restrictWidth={true} hasShadow={false}>
        <TabGroup
          path="/layouts"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
          action={<ClickCounter />}
        />
        {children}
      </GlobalLayoutSection>
    </>
  );
}
