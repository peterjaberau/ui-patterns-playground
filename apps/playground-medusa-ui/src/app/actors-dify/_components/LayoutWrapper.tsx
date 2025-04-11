'use client';
import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Layout, Card } from '@shopify/polaris';
import { ExportIcon, PlusIcon } from '@shopify/polaris-icons';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProvider i18n={enTranslations}>
        <Layout>
          <Layout.Section>
            <Card>{children}</Card>
          </Layout.Section>
        </Layout>
      </AppProvider>
    </>
  );
}

/*

 <Page
 fullWidth
 title="Layout"
 primaryAction={{
 content: 'Create order',
 icon: PlusIcon,
 accessibilityLabel: 'Create order',
 }}
 >
 <Layout>
 <Layout.Section>{children}</Layout.Section>
 </Layout>
 </Page>

 */
