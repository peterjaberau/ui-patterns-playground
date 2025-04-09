'use client';

import { GlobalBreadcrumbs } from '@/ui/global-breadcrumbs';
import { GlobalLayout } from '@/ui/global-layout';
import { GlobalNav } from '@/ui/global-nav';
import { GlobalNavTopHeader } from '@/ui/global-nav-topheader';

import { EuiThemeProviderCustom } from '@/components/eui/theme-provider';
import { RootMachineProvider } from '@/providers/root-machine-provider';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootMachineProvider>
      <EuiThemeProviderCustom>
        <>
          <GlobalNavTopHeader collapsibleNav={<GlobalNav />} headerBreadcrumb={<GlobalBreadcrumbs />} />
          <GlobalLayout>{children}</GlobalLayout>
        </>
      </EuiThemeProviderCustom>
    </RootMachineProvider>
  );
};
