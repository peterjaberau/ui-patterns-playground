import '../styles/globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { ProtectedRoute } from '@/layers/protected-route';
import { Providers } from '@/providers';
import { AddressBar } from '@/ui/address-bar';
import Byline from '@/ui/byline';
import { GlobalNav } from '@/ui/global-nav';
import { BellAlertDone, Link, SidebarLeft } from '@medusajs/icons';
import { Metadata } from 'next';
import { Container, Header } from '@/ui/byline';
import { clx, IconButton } from '@medusajs/ui';

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
    <html lang="en" className="[data-mode:light]">
      <body>
        <div className="relative flex h-screen flex-col items-start overflow-hidden lg:flex-row">
          <div className="fixed inset-x-0 top-0 z-50 h-1"></div>

          <GlobalNav />

          <Providers>
            <ProtectedRoute>
              <MainLayout>{children}</MainLayout>
            </ProtectedRoute>
          </Providers>
        </div>
      </body>
    </html>
  );
}
