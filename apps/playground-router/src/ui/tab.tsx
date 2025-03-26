'use client';
import { EuiTab, EuiFlexItem } from '@elastic/eui';

import type { Item } from '@/ui/tab-group';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const pathname = usePathname();

  const href = item.slug ? path + '/' + item.slug : path;
  const isActive = pathname === href;

  return (
    <EuiFlexItem grow={false}>
      <Link href={href}>
        <EuiTab isSelected={isActive}>{item.text}</EuiTab>
      </Link>
    </EuiFlexItem>
  );
};
