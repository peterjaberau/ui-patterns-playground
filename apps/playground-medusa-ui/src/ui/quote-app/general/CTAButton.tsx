'use client';

import React from 'react';
import { Button } from '@medusajs/ui';
import { useRouter } from 'next/navigation';

const CTAButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push('/quotes/add-quote')}>Add a Quote</Button>
    </div>
  );
};

export default CTAButton;
