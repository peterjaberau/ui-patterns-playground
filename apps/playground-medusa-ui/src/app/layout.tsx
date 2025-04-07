import '@ant-design/v5-patch-for-react-19';

import '../styles/globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { AppInstance } from '@/layers/app-instance';
import { ProtectedRoute } from '@/layers/protected-route';
import { EuiThemeProviderCustom } from '@/components/eui/theme-provider';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className="[data-mode:light]">
      <body>
        {/* <EuiThemeProviderCustom> */}
        <AppInstance>
          <ProtectedRoute>
            <MainLayout>{props.children}</MainLayout>
          </ProtectedRoute>
        </AppInstance>
        {/* </EuiThemeProviderCustom> */}
      </body>
    </html>
  );
}
