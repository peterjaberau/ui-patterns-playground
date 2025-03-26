import { getCategories } from '@/app/api/categories/getCategories';
import { Boundary } from '@/ui/boundary';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutSection } from '@/ui/global-layout-section';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <Boundary labels={['tabbable layout']} color="orange" animateRerendering={false}>
      <GlobalLayoutSection>
        <TabGroup
          path="/route-groups"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
            { text: 'Checkout', slug: 'checkout' },
            { text: 'Blog', slug: 'blog' },
          ]}
          action={<ClickCounter />}
        />

        {children}
      </GlobalLayoutSection>
    </Boundary>
  );
}
