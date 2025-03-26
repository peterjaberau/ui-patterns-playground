'use client';

import { useState } from 'react';
import { EuiHeader, EuiHeaderLogo } from '@elastic/eui';
import { useRouter } from 'next/navigation';

export function GlobalNavTopHeader({
  collapsibleNav,
  headerBreadcrumb,
}: {
  collapsibleNav?: React.ReactNode | any;
  headerBreadcrumb?: React.ReactNode | any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const router = useRouter();

  return (
    <>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo onClick={() => router.push('/')} iconType="logoElastic" aria-label="Go to home page" />,
            ],
          },
        ]}
      ></EuiHeader>
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [collapsibleNav, headerBreadcrumb],
          },
        ]}
      ></EuiHeader>
    </>
  );
}
