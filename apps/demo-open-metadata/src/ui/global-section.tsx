'use client';

import { EuiPanel, EuiSplitPanel, EuiText, EuiPageTemplate, EuiFlexGroup } from '@elastic/eui';
import { EuiTitle } from '@elastic/eui';

interface GlobalSectionProps {
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
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const GlobalSection = (props: GlobalSectionProps) => {
  const { children, title, footer, description, paddingSize, ...restProps }: any = props;

  return (
    <>
      <EuiSplitPanel.Outer {...restProps}>
        {title && (
          <EuiSplitPanel.Inner grow={false}>
            <EuiFlexGroup justifyContent="flexStart" alignItems="center" direction="row">
              {title}
            </EuiFlexGroup>
            <EuiText>{description}</EuiText>
          </EuiSplitPanel.Inner>
        )}
        <EuiSplitPanel.Inner grow={true}>{children}</EuiSplitPanel.Inner>
        <EuiSplitPanel.Inner grow={false}>{footer && <>{footer}</>}</EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
    </>
  );
};
