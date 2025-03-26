import { getCategories } from '@/app/api/categories/getCategories';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutWrapper } from '@/ui/global-layout-wrapper';
import { GlobalPageHeader } from '@/ui/global-page-header';
import { GlobalPageSection } from '@/ui/global-page-section';
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
      <GlobalPageHeader pageTitle="Layouts" rightSideItems={[<ClickCounter />]} />
      <GlobalPageSection restrictWidth={true} hasShadow={false}>
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
        />
        {children}
      </GlobalPageSection>
    </>
  );
}

/*


 <>
 <GlobalLayoutWrapper direction="column">
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
 />

 <ClickCounter />
 <div>{children}</div>
 </GlobalLayoutWrapper>
 </>


 */
