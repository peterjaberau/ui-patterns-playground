import { ProductList } from '@/routes/products/product-list/product-list';

const title = 'Products';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductList />
      {children}
    </>
  );
}
