import '../styles/globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { AppInstance } from '@/layers/app-instance';
import { ProtectedRoute } from '@/layers/protected-route';

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en" className="[data-mode:light]">
      <body>
        <AppInstance>
          <ProtectedRoute>
            <MainLayout>{props.children}</MainLayout>
            {props.modal}
            <div id="modal-root" />
          </ProtectedRoute>
        </AppInstance>
      </body>
    </html>
  );
}
