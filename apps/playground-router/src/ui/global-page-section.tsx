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
  paddingSize?: 'none' | 's' | 'm' | 'l' | 'xl';
  grow?: boolean;
  alignment?: 'cemter' | 'top' | 'bottom' | 'horizontalCenter';
  footer?: React.ReactNode | string;
  hasBorder?: boolean;
  hasShadow?: boolean;
  [key: string]: any;
}

export const GlobalPageSection = (props: GlobalPageSectionProps) => {
  const { children, title, footer, paddingSize, ...restProps }: any = props;

  return (
    <>
      <EuiPageTemplate.Section>
        <EuiSplitPanel.Outer {...restProps}>
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
