'use client';
import { EuiHeaderBreadcrumbs } from '@elastic/eui';
import { usePathname } from 'next/navigation';

export const GlobalBreadcrumbs = () => {
  const pathname = usePathname();

  return (
    <>
      <EuiHeaderBreadcrumbs
        breadcrumbs={[
          {
            text: 'medua-ui',
          },
          ...pathname
            .split('/')
            .slice(2)
            .map((segment) => ({
              text: segment,
            })),
        ]}
        lastBreadcrumbIsCurrentPage={true}
        truncate={true}
        type="application"
        responsive={{
          m: 4,
          s: 2,
          xs: 1,
        }}
      />
    </>
  );
};
