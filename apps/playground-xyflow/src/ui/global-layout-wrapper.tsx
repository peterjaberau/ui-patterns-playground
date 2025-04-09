'use client';

import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

interface GlobalLayoutWrapperProps {
  offset?: number;
  children?: React.ReactNode;
  alignItems?: 'center' | 'baseline' | 'stretch' | 'flexStart' | 'flexEnd';
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  gutterSize?: 's' | 'none' | 'm' | 'xs' | 'l' | 'xl';
  justifyContent?: 'flexStart' | 'flexEnd' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
  responsive?: boolean;
  wrap?: boolean;
  [key: string]: any;
}

export const GlobalLayoutWrapper = (props: GlobalLayoutWrapperProps) => {
  const { children, offset, ...rest } = props;
  return (
    <EuiFlexGroup style={{ top: offset ?? 0 }} {...rest}>
      <EuiFlexItem grow={true}>{children}</EuiFlexItem>
    </EuiFlexGroup>
  );
};
