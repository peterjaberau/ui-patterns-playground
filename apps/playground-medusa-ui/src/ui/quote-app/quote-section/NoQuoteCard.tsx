'use client';
import { Alert, Container, Button } from '@medusajs/ui';
import Link from 'next/link';
import React from 'react';

const NoQuoteCard = () => {
  return (
    <Container className="flex flex-col gap-4">
      <Alert variant="info">No quotes available in this category.</Alert>
      <p className="text-center text-lg">Check out other categories for inspiring quotes or the latest quotes</p>
      <div className="mt-4 space-x-4">
        <Button variant="secondary" size="small">
          <Link href="/quotes/?category=recent">Latest</Link>
        </Button>
        <Button variant="secondary" size="small">
          <Link href="/quotes/?category=motivation">Motivation</Link>
        </Button>

        <Button variant="secondary" size="small">
          <Link href="/quotes/add-quote">Life</Link>
        </Button>
      </div>
    </Container>
  );
};

export default NoQuoteCard;
