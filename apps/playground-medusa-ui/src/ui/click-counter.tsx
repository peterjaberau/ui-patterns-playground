'use client';

import { Button } from '@medusajs/ui';

import React from 'react';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)} variant="primary">
        {count} Clicks
      </Button>
    </>
  );
}
