import type { Viewport } from 'next';

import '@/styles/globals.css';
import { LayoutWrapper } from './layout.wrapper';

const RootLayout = async (props: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <LayoutWrapper>{props.children}</LayoutWrapper>
      </body>
    </html>
  );
};
