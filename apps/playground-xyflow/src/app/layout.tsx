import type { Viewport } from 'next';
import I18nServer from './components/i18n-server';
import BrowserInitor from './components/browser-initor';
import { getLocaleOnServer } from '@/i18n/server';
import { TanstackQueryIniter } from '@/context/query-client';
import { ThemeProvider } from 'next-themes';
import './styles/globals.css';
import './styles/markdown.scss';

export const metadata = {
  title: 'UiPatterns',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocaleOnServer();

  return (
    <html lang={locale ?? 'en'} className="h-full" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className="color-scheme h-full select-auto"
        data-api-prefix={process.env.NEXT_PUBLIC_API_PREFIX}
        data-pubic-api-prefix={process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX}
        data-public-edition={process.env.NEXT_PUBLIC_EDITION}
      >
        <BrowserInitor>
          <TanstackQueryIniter>
            <ThemeProvider
              attribute="data-theme"
              forcedTheme="light"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <I18nServer>{children}</I18nServer>
            </ThemeProvider>
          </TanstackQueryIniter>
        </BrowserInitor>
      </body>
    </html>
  );
};

export default LocaleLayout;
