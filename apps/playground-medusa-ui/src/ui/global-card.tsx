'use client';

import { EuiCard } from '@elastic/eui';

interface GlobalCardProps {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  layout?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  onClick?: () => void;
  titleSize?: 'xs' | 's';
  display?:
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
  paddingSize?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';
  hasBorder?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  footer?: string | React.ReactNode;
  image?: string | React.ReactNode;
  badgeLabel?: string;
  badgeTooltipContent?: string;
  [key: string]: any;
}

export const GlobalCard = (props: GlobalCardProps) => {
  const { title, titleSize = 'xs', children, badgeLabel, badgeTooltipContent, ...restProps }: any = props;
  return (
    <EuiCard
      betaBadgeProps={{
        label: badgeLabel ?? undefined,
        tooltipContent: (badgeLabel && badgeTooltipContent) ?? undefined,
      }}
      title={title}
      titleSize={titleSize}
      description={children}
      {...restProps}
    />
  );
};
