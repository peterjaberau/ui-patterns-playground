'use client';
import React from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@codefast/ui';

import AddQuoteForm from '@/ui/quote-app/general/AddQuoteForm';

const AddQuotePage = () => {
  return (
    <Card className="lg:w-[600px]">
      <CardHeader>
        <CardTitle className="text-xl">Add A Quote</CardTitle>
        <CardDescription className="text-l">/quotes/add-quote/page.tsx</CardDescription>
      </CardHeader>
      <CardContent>
        <AddQuoteForm />
      </CardContent>
    </Card>
  );
};

export default AddQuotePage;
