'use client';
import { GlobalSection } from '@/ui/global-section';
import { EuiFlexItem } from '@elastic/eui';
import { EuiBadge } from '@elastic/eui';
import clsx from 'clsx';
import React from 'react';

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <EuiFlexItem grow={false}>
      <EuiBadge color={color} className={clsx({ 'animate-rerendering': animateRerendering })}>
        {children}
      </EuiBadge>
    </EuiFlexItem>
  );
};
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  animateRerendering?: boolean;
}) => {
  return (
    <>
      <GlobalSection
        title={labels.map((label) => {
          return (
            <Label key={label} color={color} animateRerendering={animateRerendering}>
              {label}
            </Label>
          );
        })}
      >
        {children}
      </GlobalSection>
    </>
  );
};
