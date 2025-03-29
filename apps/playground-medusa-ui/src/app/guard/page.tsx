'use client';
import { Container, Heading, Button } from '@medusajs/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Heading>next-navigation-guard Example</Heading>
      <div className="flex flex-row justify-start gap-4">
        <Link href={'/guard/page1'}>
          <Button size="small" variant="secondary">
            AppRouter
          </Button>
        </Link>

        <Link href={'/pages-router/page1'}>
          <Button size="small" variant="secondary">
            Pages Router
          </Button>
        </Link>
      </div>
    </Container>
  );
}
