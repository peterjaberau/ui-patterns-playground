'use client';
import React from 'react';
import { Button } from '@medusajs/ui';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="primary">
      Back
    </Button>
  );
};

export default BackButton;
