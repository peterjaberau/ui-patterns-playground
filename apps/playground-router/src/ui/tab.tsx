'use client';
import { EuiTab } from '@elastic/eui';

import type { Item } from '@/ui/tab-group';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const pathname = usePathname();

  const href = item.slug ? path + '/' + item.slug : path;
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <EuiTab>{item.text}</EuiTab>
    </Link>
  );
};
