import { NavigationGuardProvider } from '@/components/navigation-guard';
import { Providers } from '@/providers';
import { PropsWithChildren } from 'react';

export const AppInstance = ({ children }: PropsWithChildren) => {
  return (
    <NavigationGuardProvider>
      <Providers>{children}</Providers>
    </NavigationGuardProvider>
  );
};
