import { getCategories } from '@/app/api/categories/getCategories';
import { Boundary } from '@/ui/boundary';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutSection } from '@/ui/global-layout-section';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <Boundary labels={['marketing layout']} color="violet" animateRerendering={false}>
      <GlobalLayoutSection restrictWidth={true} hasShadow={false}>
        <div className="self-start">
          <ClickCounter />
        </div>
        {children}
      </GlobalLayoutSection>
    </Boundary>
  );
}
