'use client';
import { Toaster, TooltipProvider } from '@medusajs/ui';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: any) => {
  return (
    <TooltipProvider>
      <HelmetProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </HelmetProvider>
    </TooltipProvider>
  );
};
