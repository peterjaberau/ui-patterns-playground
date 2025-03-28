import { ProductDetail } from '@/routes/products/product-detail/product-detail';
import { Button, Container } from '@medusajs/ui';
import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <ProductDetail />
      <Container>
        <Link href={`/products`}>
          <Button>Go back</Button>
        </Link>
      </Container>
    </>
  );
}
