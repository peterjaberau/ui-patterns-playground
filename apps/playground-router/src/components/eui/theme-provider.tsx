'use client';

import { EuiProvider, EuiThemeProvider } from '@elastic/eui';
import iconCache from '@/registry/eui/icons/cache-icons';

export function EuiThemeProviderCustom({ children }: any) {
  return (
    <EuiProvider cache={iconCache}>
      <EuiThemeProvider>{children}</EuiThemeProvider>
    </EuiProvider>
  );
}
