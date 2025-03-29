'use client';
import { Button } from '@medusajs/ui';
import { useState } from 'react';

type CounterProps = {
  label: string;
};

export function Counter(props: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <Button size="small" variant="primary" onClick={() => setCount(count + 1)}>
      {props.label} {count}
    </Button>
  );
}
