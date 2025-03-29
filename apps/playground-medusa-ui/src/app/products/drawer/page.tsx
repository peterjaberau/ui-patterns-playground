'use client';

import { ProductDetail } from '@/routes/products/product-detail/product-detail';
import { Button, Container } from '@medusajs/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Drawer } from '@medusajs/ui';

export default async function Page() {
  const navigate = useRouter();
  const [open, setOpen] = useState(false);
  const [stackedModalOpen, onStackedModalOpen] = useState(false);

  return (
    <>
      <Drawer>
        <Drawer.Trigger>Trigger</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>Body</Drawer.Body>
          <Drawer.Footer>Footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer>

      <ProductDetail />
      <Container>
        <Link href={`/products`}>
          <Button>Go back</Button>
        </Link>
      </Container>
    </>
  );
}
