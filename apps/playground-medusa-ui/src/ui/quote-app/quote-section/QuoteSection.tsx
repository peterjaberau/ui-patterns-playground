'use client';
import CategoryTabs from './CategoryTabs';
import ScrollableQuoteList from './ScrollableQuoteList';
import { Container, Heading } from '@medusajs/ui';

const QouteSection = ({ category }: any) => {
  return (
    <Container className="flex flex-col gap-4">
      <CategoryTabs />
      <ScrollableQuoteList category={category} />
    </Container>
  );
};

export default QouteSection;
