'use client';

import { Boundary } from '@/ui/boundary';

import { useCounter } from './counter-context';

function ContextClickCounter() {
  const [count, setCount] = useCounter();

  return (
    <Boundary animateRerendering={false} color="blue" labels={['Counter Context [Client Component]']} size="small">
      <button
        className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count} Clicks
      </button>
    </Boundary>
  );
}

export function Counter() {
  const [count] = useCounter();

  return (
    <Boundary animateRerendering={false} color="blue" labels={['Counter Context [Client Component]']} size="small">
      <div className="span text-xl font-bold text-white">
        <span className="tabular-nums">{count}</span> Clicks
      </div>
    </Boundary>
  );
}

export default ContextClickCounter;
