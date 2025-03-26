'use client';
import { EuiButton, EuiLink } from '@elastic/eui';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const ExternalLink = ({
  children,
  href,
  iconType,
}: {
  children: React.ReactNode;
  href: string;
  iconType?: string;
}) => {
  return (
    <EuiButton iconType={iconType ?? undefined} color="primary" size="s" fill href={href} target="_blank">
      {children}
    </EuiButton>
  );
};
