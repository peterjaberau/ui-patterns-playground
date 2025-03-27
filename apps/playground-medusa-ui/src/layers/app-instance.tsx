import { Providers } from '@/providers';
import { PropsWithChildren } from 'react';

export const AppInstance = ({ children }: PropsWithChildren) => {
  return <Providers>{children}</Providers>;
};
