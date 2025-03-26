'use client';

import { demos, type Item } from '@/lib/demos';
import { NextLogoDark } from '@/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="hidden h-screen w-[220px] flex-col border-r lg:flex">
      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({ item, close }: { item: Item; close: () => false | void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx('block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300', {
        'text-gray-400 hover:bg-gray-800': !isActive,
        'text-white': isActive,
      })}
    >
      {item.name}
    </Link>
  );
}
