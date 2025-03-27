'use client';

import type { Item } from '@/ui/tab-group';
import { Button } from '@medusajs/ui';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const pathname = usePathname();
  const navigate = useRouter();

  const href = item.slug ? path + '/' + item.slug : path;
  const isActive = pathname === href;

  return (
    <Button variant={isActive ? 'secondary' : 'primary'} onClick={() => navigate.push(href)}>
      {item.text}
    </Button>
  );
};
