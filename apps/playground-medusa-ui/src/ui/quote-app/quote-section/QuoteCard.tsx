'use client';
import { Badge, Container, Heading, Label } from '@medusajs/ui';

const QuoteCard = ({ quote }: any) => {
  return (
    <Container>
      <Heading level="h3">{quote.quote}</Heading>
      <Label>Author: {quote.author}</Label>
      <Badge>{quote.category}</Badge>
    </Container>
  );
};

export default QuoteCard;
