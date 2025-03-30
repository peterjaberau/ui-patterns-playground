'use client';
import { Toaster, TooltipProvider } from '@medusajs/ui';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';
// import { queryClient } from '@/lib/query-client';

export const Providers = ({ children }: any) => {
  return (
    <TooltipProvider>
      <HelmetProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        {/* </QueryClientProvider> */}
      </HelmetProvider>
    </TooltipProvider>
  );
};
