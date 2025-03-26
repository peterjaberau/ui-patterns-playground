'use client';
import React from 'react';
import { EuiButton } from '@elastic/eui';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <EuiButton onClick={() => setCount(count + 1)} size="s" color="accent">
      {count} Clicks
    </EuiButton>
  );
}
