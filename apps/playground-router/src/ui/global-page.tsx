'use client';

import { GlobalPageHeader, GlobalPageHeaderProps } from '@/ui/global-page-header';

interface GlobalPageProps {
  [key: string]: any;
  children?: React.ReactNode;
  header?: GlobalPageHeaderProps;
}

export const GlobalPage = (props: GlobalPageProps) => {
  const { children, header, ...rest }: any = props;
  const { pageTitle, ...headerRest }: any = header || {};
  return (
    <>
      {header && <GlobalPageHeader pageTitle={header?.pageTitle || 'Untitled page'} {...headerRest} />}
      {children}
    </>
  );
};
