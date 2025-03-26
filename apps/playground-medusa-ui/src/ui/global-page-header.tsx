'use client';

import { EuiPageTemplate } from '@elastic/eui';

export interface GlobalPageHeaderProps {
  paddingSize?: 'xs' | 'none' | 's' | 'm' | 'l' | 'xl';
  description?: string | React.ReactNode;

  /*  Pass custom an array of content to this side usually up to 3 buttons.
      The first button should be primary, usually with fill. At larger breakpoints,
      items will render from right to left, but will collapse vertically
      and render left to right on smaller mobile screens.*/
  rightSideItems?: React.ReactNode; //rightSideItems
  tabs?: React.ReactNode;
  icon?: string; //iconType
  responsive?: boolean | 'reverse';
  breadcrumb?: any[];
  alignItems?: 'center' | 'top' | 'bottom' | 'stretch';
  restrictWidth?: boolean | number | string;
  pageTitle?: string | React.ReactNode;
  iconType?: string;
  bottomBorder?: boolean | 'extended';
  [key: string]: any;
}

export const GlobalPageHeader = (props: GlobalPageHeaderProps) => {
  const { children, pageTitle, ...rest }: any = props;
  return (
    <>
      <EuiPageTemplate.Header pageTitle={pageTitle || 'Untitled page'} {...rest} />
    </>
  );
};
