'use client';

import { demos } from '@/lib/demos';
import { GlobalCard } from '@/ui/global-card';
import { GlobalPage } from '@/ui/global-page';
import { GlobalPageSection } from '@/ui/global-page-section';
import { Button } from '@medusajs/ui';
import Link from 'next/link';
import { EuiFlexGrid, EuiFlexItem, EuiPanel } from '@elastic/eui';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <GlobalPage header={{ pageTitle: 'Examples' }}>
      <GlobalPageSection grow={false} alignment="top" hasShadow={false} paddingSize="none">
        <EuiFlexGrid columns={2}>
          {demos.map((section) => {
            return (
              <GlobalPageSection title={<h3>{section.name}</h3>} key={section.name}>
                <EuiFlexGrid columns={2}>
                  {section.items.map((item) => {
                    return (
                      <GlobalCard
                        key={item.name}
                        layout="horizontal"
                        title={item.name}
                        onClick={() => router.push(`/${item.slug}`)}
                      >
                        {item.description}
                      </GlobalCard>
                    );
                  })}
                </EuiFlexGrid>
              </GlobalPageSection>
            );
          })}
        </EuiFlexGrid>
      </GlobalPageSection>
    </GlobalPage>
  );
}
