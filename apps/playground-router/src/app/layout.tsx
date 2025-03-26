import '@/styles/globals.css';
import { GlobalBreadcrumbs } from '@/ui/global-breadcrumbs';
import { GlobalLayout } from '@/ui/global-layout';
import { GlobalNav } from '@/ui/global-nav';
import { GlobalNavTopHeader } from '@/ui/global-nav-topheader';
import { Metadata } from 'next';

import { EuiThemeProviderCustom } from '@/components/eui/theme-provider';
import { RootMachineProvider } from '@/providers/root-machine-provider';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  metadataBase: new URL('https://app-router.vercel.app'),
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  openGraph: {
    title: 'Next.js App Router Playground',
    description:
      'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootMachineProvider>
          <EuiThemeProviderCustom>
            <GlobalNavTopHeader collapsibleNav={<GlobalNav />} headerBreadcrumb={<GlobalBreadcrumbs />} />
            <GlobalLayout restrictWidth={false}>{children}</GlobalLayout>
          </EuiThemeProviderCustom>
        </RootMachineProvider>
      </body>
    </html>
  );
}
