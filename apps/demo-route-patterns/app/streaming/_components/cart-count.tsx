'use client';

import { useCartCount } from '@/app/streaming/_components/cart-count-context';

export function CartCount() {
  const [count] = useCartCount();
  return <span>{count}</span>;
}
