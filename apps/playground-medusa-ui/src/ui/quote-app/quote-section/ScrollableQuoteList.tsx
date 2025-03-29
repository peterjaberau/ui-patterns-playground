'use client';
import NoQuoteCard from './NoQuoteCard';
import React from 'react';
import QuoteCard from './QuoteCard';

const QuotesDB = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
    id: '1',
    category: 'recent',
    created_at: '2021-10-01',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
    id: '2',
    category: 'motivation',
    created_at: '2021-10-01',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
    id: '3',
    category: 'motivation',
    created_at: '2021-10-01',
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
    id: '4',
    category: 'motivation',
    created_at: '2021-10-01',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'recent',
    id: '5',
    category: 'life',
    created_at: '2021-10-01',
  },
  {
    quote: 'Get busy living or get busy dying.',
    author: 'Stephen King',
    id: '6',
    category: 'life',
    created_at: '2021-10-01',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
    id: '7',
    category: 'life',
    created_at: '2021-10-01',
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: 'Thomas A. Edison',
    id: '8',
    category: 'life',
    created_at: '2021-10-01',
  },
];

const ScrollableQuoteList = async ({ category }: { category: string | string[] | undefined }) => {
  const quotes = await QuotesDB.filter((quote) => quote.category === category);

  return (
    <div className="mt-4">
      {quotes && quotes.length > 0 ? (
        quotes.map((quote) => <QuoteCard quote={quote} key={quote.id} />)
      ) : (
        <NoQuoteCard />
      )}
    </div>
  );
};

export default ScrollableQuoteList;
