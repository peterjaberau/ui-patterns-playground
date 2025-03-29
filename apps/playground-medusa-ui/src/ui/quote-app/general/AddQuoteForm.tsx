'use client';
import { Button } from '@medusajs/ui';
import React, { useState } from 'react';

import BackButton from './BackButton';
import { addQuote } from '@/ui/quote-app/lib/actions';
import { useRouter } from 'next/navigation';

const AddQuoteForm = () => {
  const router = useRouter();

  const handleSubmitAction = () => {
    addQuote(null);
    router.back();
  };

  return (
    <>
      <div className="flex gap-4">
        <Button variant="primary" onClick={handleSubmitAction}>
          Add Quote
        </Button>
        <BackButton />
      </div>

      <div className="mt-4">
        <BackButton />
      </div>
    </>
  );
};

export default AddQuoteForm;
