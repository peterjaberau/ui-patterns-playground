'use client';
import { EuiCollapsibleNavBeta, EuiCollapsibleNavItem, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { useRouter } from 'next/navigation';
import { demos, type Item } from '@/lib/demos';
import { useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <EuiCollapsibleNavBeta initialIsCollapsed={false} side="left" width={340}>
        <EuiCollapsibleNavBeta.Body>
          {demos.map((section) => {
            return (
              <EuiCollapsibleNavItem
                key={section.name}
                icon="desktop"
                isCollapsible={false}
                title={section.name}
                items={section.items.map((item) => ({
                  onClick: () => router.push(`/${item.slug}`),
                  title: item.name,
                }))}
              />
            );
          })}
        </EuiCollapsibleNavBeta.Body>
        <EuiCollapsibleNavBeta.Footer></EuiCollapsibleNavBeta.Footer>
      </EuiCollapsibleNavBeta>
    </>
  );
}
