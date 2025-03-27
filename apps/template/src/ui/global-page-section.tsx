'use client';

import { EuiPanel, EuiSplitPanel, EuiText, EuiPageTemplate } from '@elastic/eui';

interface GlobalPageSectionProps {
  colors?:
    | 'transparent'
    | 'accent'
    | 'accentSecondary'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'subdued'
    | 'plain'
    | 'highlighted';

  bottomBorder?: boolean | 'extended';
  restrictWidth?: boolean | number | string;
  paddingSize?: 'none' | 's' | 'm' | 'l' | 'xl';
  grow?: boolean;
  alignment?: 'cemter' | 'top' | 'bottom' | 'horizontalCenter';
  footer?: React.ReactNode | string;
  hasBorder?: boolean;
  hasShadow?: boolean;
  [key: string]: any;
}

export const GlobalPageSection = (props: GlobalPageSectionProps) => {
  const { children, title, footer, paddingSize, restrictWidth, ...restProps }: any = props;

  return (
    <>
      <EuiPageTemplate.Section paddingSize="s" restrictWidth={restrictWidth}>
        <EuiSplitPanel.Outer hasShadow={true} hasBorder={false} color="plain" {...restProps}>
          {title && (
            <EuiSplitPanel.Inner grow={false}>
              <EuiText>{title}</EuiText>
            </EuiSplitPanel.Inner>
          )}
          <EuiSplitPanel.Inner grow={true}>{children}</EuiSplitPanel.Inner>
          <EuiSplitPanel.Inner grow={false}>{footer && <>{footer}</>}</EuiSplitPanel.Inner>
        </EuiSplitPanel.Outer>
      </EuiPageTemplate.Section>
    </>
  );
};
