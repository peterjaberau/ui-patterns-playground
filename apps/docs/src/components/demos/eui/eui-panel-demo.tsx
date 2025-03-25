'use client';
import type { JSX } from 'react';

import { EuiPanel } from '@elastic/eui';

import { GridWrapper } from '@/components/grid-wrapper';

export function EuiPanelDemo(): JSX.Element {
  return (
    <GridWrapper>
      <div className="grid place-items-center gap-6">
        <EuiPanel title="My Panel">panel content</EuiPanel>
      </div>
    </GridWrapper>
  );
}
