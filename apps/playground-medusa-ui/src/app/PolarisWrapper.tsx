'use client';

// import { wdyrLoaded } from '../lib/wdyr';
// console.log('[PolarisWrapper] WDYR loaded:', wdyrLoaded); // ← log should hit

import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import React from 'react';

export const PolarisWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider i18n={en}>{children}</AppProvider>;
};
