'use client';
import type { JSX } from 'react';

import { EuiButton } from '@elastic/eui';

import { GridWrapper } from '@/components/grid-wrapper';

export function EuiButtonDemo(): JSX.Element {
  return (
    <GridWrapper>
      <div className="grid place-items-center gap-6">
        <EuiButton size="s">Small</EuiButton>
        <EuiButton size="m" color="accent">
          Accent
        </EuiButton>
        <EuiButton size="m" isLoading={true} color="accent">
          Loading
        </EuiButton>
      </div>
    </GridWrapper>
  );
}
