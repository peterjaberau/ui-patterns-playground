import '../styles/globals.css';
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
          {/* navigation bar */}
          <div className="fixed inset-x-0 top-0 z-50 h-1"></div>

          <div>
            {/* desktop sidebar container */}
            <GlobalNav />
          </div>
          <div className="flex h-screen w-full flex-col overflow-auto">
            {/* top bar */}
            <div className="grid w-full grid-cols-2 border-b p-3">
              <div className="flex items-center gap-x-1.5">
                {/* Toggle sidebar */}
                <div>
                  <IconButton className="hidden lg:flex" variant="transparent" size="small">
                    <SidebarLeft className="text-ui-fg-muted" />
                  </IconButton>
                  <IconButton className="hidden max-lg:flex" variant="transparent" size="small">
                    <SidebarLeft className="text-ui-fg-muted" />
                  </IconButton>
                </div>

                <ol className={clx('text-ui-fg-muted txt-compact-small-plus flex select-none items-center')}>
                  <AddressBar />
                </ol>
              </div>
              <div className="flex items-center justify-end gap-x-3">
                <IconButton variant="transparent" size="small" className="text-ui-fg-muted hover:text-ui-fg-subtle">
                  <BellAlertDone />
                </IconButton>
              </div>
            </div>

            <main className="flex h-full w-full flex-col items-center overflow-y-auto transition-opacity delay-200 duration-200">
              {/*   Gutter */}
              <Container className="flex w-3/4 max-w-[1600px] flex-col gap-y-2 p-3">
                {/*   Outlet */}
                {children}
              </Container>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
