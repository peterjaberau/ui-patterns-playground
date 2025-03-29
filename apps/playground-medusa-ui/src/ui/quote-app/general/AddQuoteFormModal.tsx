'use client';
import { addQuote } from '@/ui/quote-app/lib/actions';
import React from 'react';

import BackButton from './BackButton';
import { Button } from '@medusajs/ui';
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
    </>
  );
};

export default AddQuoteForm;
