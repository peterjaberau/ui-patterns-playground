"use client";
import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProvider i18n={enTranslations}>{children}</AppProvider>
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
