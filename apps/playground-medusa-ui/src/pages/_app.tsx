import type { AppProps } from 'next/app';
import { NavigationGuardProvider } from '@/components/navigation-guard';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationGuardProvider>
      <Component {...pageProps} />
    </NavigationGuardProvider>
  );
}
