'use client';
import { SingleColumnPage } from '@/components/layout/pages';
import { ReactNode } from 'react';
import { ProductListTable } from './components/product-list-table';

export const ProductList = () => {
  return (
    <SingleColumnPage>
      <ProductListTable />
    </SingleColumnPage>
  );
};
