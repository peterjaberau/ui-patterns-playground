'use client';
import {
  BuildingStorefront,
  Buildings,
  ChevronDownMini,
  CogSixTooth,
  CurrencyDollar,
  EllipsisHorizontal,
  MagnifyingGlass,
  MinusMini,
  OpenRectArrowOut,
  ReceiptPercent,
  ShoppingCart,
  SquaresPlus,
  Tag,
  Users,
} from '@medusajs/icons';
import { Avatar, Divider, DropdownMenu, Text, clx } from '@medusajs/ui';
import { Collapsible as RadixCollapsible } from 'radix-ui';
import { useState } from 'react';

import { Skeleton } from '../../common/skeleton';
import { INavItem, NavItem } from '../../layout/nav-item';
import { Shell } from '../../layout/shell';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { UserMenu } from '../user-menu';

const useCoreRoutes = (): Omit<INavItem, 'pathname'>[] => {
  return [
    {
      icon: <ShoppingCart />,
      label: 'Orders',
      to: '/orders',
      items: [],
    },
    {
      icon: <Tag />,
      label: 'Products',
      to: '/products',
      items: [
        {
          label: 'Collections',
          to: '/collections',
        },
        {
          label: 'Categories',
          to: '/categories',
        },
        // TODO: Enable when domin is introduced
        // {
        //   label: t("giftCards.domain"),
        //   to: "/gift-cards",
        // },
      ],
    },
    {
      icon: <Buildings />,
      label: 'Inventory',
      to: '/inventory',
      items: [
        {
          label: 'Reservations',
          to: '/reservations',
        },
      ],
    },
    {
      icon: <Users />,
      label: 'Customers',
      to: '/customers',
      items: [
        {
          label: 'Customer Groups',
          to: '/customer-groups',
        },
      ],
    },
    {
      icon: <ReceiptPercent />,
      label: 'promotions',
      to: '/promotions',
      items: [
        {
          label: 'Campaigns',
          to: '/campaigns',
        },
      ],
    },
    {
      icon: <CurrencyDollar />,
      label: 'Price Lists',
      to: '/price-lists',
    },
  ];
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <Shell sidebar={<MainSidebar />}>{children}</Shell>;
};

const MainSidebar = () => {
  return (
    <aside className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 flex-col">
        <div className="bg-ui-bg-subtle sticky top-0">
          <Header />
          <div className="px-3">
            <Divider variant="dashed" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-1 flex-col">
            <CoreRouteSection />
            <ExtensionRouteSection />
          </div>
          <UtilitySection />
        </div>
        <div className="bg-ui-bg-subtle sticky bottom-0">
          <UserSection />
        </div>
      </div>
    </aside>
  );
};

const Logout = () => {
  const handleLogout = () => {
    console.log('Logging out');
  };

  return (
    <DropdownMenu.Item onClick={handleLogout}>
      <div className="flex items-center gap-x-2">
        <OpenRectArrowOut className="text-ui-fg-subtle" />
        <span>{'Logout'}</span>
      </div>
    </DropdownMenu.Item>
  );
};

const Header = () => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('Admin');

  const fallback = name?.slice(0, 1).toUpperCase();

  const isLoaded = !isPending && !!name && !!fallback;

  if (isError) {
    throw error;
  }

  return (
    <div className="w-full p-3">
      <DropdownMenu>
        <DropdownMenu.Trigger
          disabled={!isLoaded}
          className={clx(
            'bg-ui-bg-subtle transition-fg grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none',
            'hover:bg-ui-bg-subtle-hover',
            'data-[state=open]:bg-ui-bg-subtle-hover',
            'focus-visible:shadow-borders-focus',
          )}
        >
          {fallback ? (
            <Avatar variant="squared" size="xsmall" fallback={fallback} />
          ) : (
            <Skeleton className="h-6 w-6 rounded-md" />
          )}
          <div className="block overflow-hidden text-left">
            {name ? (
              <Text size="small" weight="plus" leading="compact" className="truncate">
                {name}
              </Text>
            ) : (
              <Skeleton className="h-[9px] w-[120px]" />
            )}
          </div>
          <EllipsisHorizontal className="text-ui-fg-muted" />
        </DropdownMenu.Trigger>
        {isLoaded && (
          <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-0">
            <div className="flex items-center gap-x-3 px-2 py-1">
              <Avatar variant="squared" size="small" fallback={fallback} />
              <div className="flex flex-col overflow-hidden">
                <Text size="small" weight="plus" leading="compact" className="truncate">
                  {name}
                </Text>
                <Text size="xsmall" leading="compact" className="text-ui-fg-subtle">
                  {'Store'}
                </Text>
              </div>
            </div>
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="gap-x-2" asChild>
              <Link href="/settings/store">
                <BuildingStorefront className="text-ui-fg-subtle" />
                {'Store settings'}
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <Logout />
          </DropdownMenu.Content>
        )}
      </DropdownMenu>
    </div>
  );
};

const Searchbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div className="px-3">
      <button
        onClick={() => setToggleSearch(!toggleSearch)}
        className={clx(
          'bg-ui-bg-subtle text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none',
          'hover:bg-ui-bg-subtle-hover',
          'focus-visible:shadow-borders-focus',
        )}
      >
        <MagnifyingGlass />
        <div className="flex-1 text-left">
          <Text size="small" leading="compact" weight="plus">
            {'Search'}
          </Text>
        </div>
        <Text size="small" leading="compact" className="text-ui-fg-muted">
          ⌘K
        </Text>
      </button>
    </div>
  );
};

const CoreRouteSection = () => {
  const coreRoutes = useCoreRoutes();

  const menuItems = useState([]);

  menuItems.forEach((item: any) => {
    if (item.nested) {
      const route = coreRoutes.find((route) => route.to === item.nested);
      if (route) {
        route.items?.push(item);
      }
    }
  });

  return (
    <nav className="flex flex-col gap-y-1 py-3">
      <Searchbar />
      {coreRoutes.map((route) => {
        return <NavItem key={route.to} {...route} />;
      })}
    </nav>
  );
};

const ExtensionRouteSection = () => {
  const [menu, setMenu] = useState([]);

  const menuItems = menu.filter((item: any) => !item.nested);

  if (!menuItems.length) {
    return null;
  }

  return (
    <div>
      <div className="px-3">
        <Divider variant="dashed" />
      </div>
      <div className="flex flex-col gap-y-1 py-3">
        <RadixCollapsible.Root defaultOpen>
          <div className="px-4">
            <RadixCollapsible.Trigger asChild className="group/trigger">
              <button className="text-ui-fg-subtle flex w-full items-center justify-between px-2">
                <Text size="xsmall" weight="plus" leading="compact">
                  {'Extensions'}
                </Text>
                <div className="text-ui-fg-muted">
                  <ChevronDownMini className="group-data-[state=open]/trigger:hidden" />
                  <MinusMini className="group-data-[state=closed]/trigger:hidden" />
                </div>
              </button>
            </RadixCollapsible.Trigger>
          </div>
          <RadixCollapsible.Content>
            <nav className="flex flex-col gap-y-0.5 py-1 pb-4">
              {menuItems.map((item: any, i: any) => {
                return (
                  <NavItem
                    key={i}
                    to={item.to}
                    label={item.label}
                    icon={item.icon ? item.icon : <SquaresPlus />}
                    items={item.items}
                    type="extension"
                  />
                );
              })}
            </nav>
          </RadixCollapsible.Content>
        </RadixCollapsible.Root>
      </div>
    </div>
  );
};

const UtilitySection = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-0.5 py-3">
      <NavItem label={'Settings'} to="/settings" from={pathname} icon={<CogSixTooth />} />
    </div>
  );
};

const UserSection = () => {
  return (
    <div>
      <div className="px-3">
        <Divider variant="dashed" />
      </div>
      <UserMenu />
    </div>
  );
};
