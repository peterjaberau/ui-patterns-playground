'use client';

import { EuiPageTemplate } from '@elastic/eui';
import { GlobalPageHeader, GlobalPageHeaderProps } from '@/ui/global-page-header';

interface GlobalLayoutProps {
  children?: React.ReactNode;
  grow?: boolean;
  direction?: 'row' | 'column';
  responsive?: string[]; //[ 'xs', 's']
  panelled?: boolean;
  restrictWidth?: boolean | number | string;
  bottomBorder?: boolean | 'extended';
  contentBorder?: boolean;
  minHeight?: number | string;
  offset?: number;
  header?: GlobalPageHeaderProps;

  [key: string]: any;
}

export const GlobalLayout = (props: GlobalLayoutProps) => {
  const { children, restrictWidth, header, ...rest }: any = props;
  const { pageTitle, ...headerRest }: any = header || {};

  return (
    <>
      <EuiPageTemplate {...rest}>
        {header && <GlobalPageHeader pageTitle={header?.pageTitle || 'Untitled page'} {...headerRest} />}
        {children}
      </EuiPageTemplate>
    </>
  );
};
