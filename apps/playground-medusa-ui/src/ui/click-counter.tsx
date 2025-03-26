'use client';
import React from 'react';
import { EuiButton } from '@elastic/eui';
import { Button } from '@medusajs/ui';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <Button onClick={() => setCount(count + 1)} variant="primary">
      {count} Clicks
    </Button>
  );
}

/*



 <EuiButton onClick={() => setCount(count + 1)} size="s" color="primary">
 {count} Clicks
 </EuiButton>

 */
