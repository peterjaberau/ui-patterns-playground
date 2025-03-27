import debounceFn from 'lodash/debounce';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { KeybindContext } from './keybind-context';
import { Shortcut } from './types';
import { findShortcut } from './utils';

export const useKeybind = () => {
  const context = useContext(KeybindContext);

  if (!context) {
    throw new Error('useKeybind must be used within a KeybindProvider');
  }

  return context;
};

export const useRegisterShortcut = () => {};

export const useShortcuts = ({ shortcuts = [], debounce }: { shortcuts?: Shortcut[]; debounce: number }) => {
  const [keys, setKeys] = useState<string[]>([]);
  const navigate = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeKeys = useCallback(
    debounceFn(() => setKeys([]), debounce),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const invokeShortcut = useCallback(
    debounceFn((shortcut: Shortcut | null) => {
      if (shortcut && shortcut.callback) {
        shortcut.callback();
        setKeys([]);

        return;
      }

      if (shortcut && shortcut.to) {
        navigate.push(shortcut.to);
        setKeys([]);

        return;
      }
    }, debounce / 2),
    [],
  );

  useEffect(() => {
    if (keys.length > 0 && shortcuts.length > 0) {
      const shortcut = findShortcut(shortcuts, keys);
      invokeShortcut(shortcut);
    }

    return () => invokeShortcut.cancel();
  }, [keys, shortcuts, invokeShortcut]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      /**
       * Ignore key events from input, textarea and contenteditable elements
       */
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        removeKeys();
        return;
      }

      setKeys((oldKeys) => [...oldKeys, event.key]);
      removeKeys();
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [removeKeys]);
};

export const useGlobalShortcuts = () => {
  const navigate = useRouter();

  const handleLogout = () => {
    console.log('Logging out');
  };

  const globalShortcuts: Shortcut[] = [
    // Pages
    {
      keys: {
        Mac: ['G', 'O'],
      },
      label: 'Go to Orders',
      type: 'pageShortcut',
      to: '/orders',
    },
    {
      keys: {
        Mac: ['G', 'P'],
      },
      label: 'Go to Products',
      type: 'pageShortcut',
      to: '/products',
    },
    {
      keys: {
        Mac: ['G', 'C'],
      },
      label: 'Go to Collections',
      type: 'pageShortcut',
      to: '/collections',
    },
    {
      keys: {
        Mac: ['G', 'A'],
      },
      label: 'Go to Categories',
      type: 'pageShortcut',
      to: '/categories',
    },
    {
      keys: {
        Mac: ['G', 'U'],
      },
      label: 'Go to Customers',
      type: 'pageShortcut',
      to: '/customers',
    },
    {
      keys: {
        Mac: ['G', 'G'],
      },
      label: 'Go to Customer Groups',
      type: 'pageShortcut',
      to: '/customer-groups',
    },
    {
      keys: {
        Mac: ['G', 'I'],
      },
      label: 'Go to Inventory',
      type: 'pageShortcut',
      to: '/inventory',
    },
    {
      keys: {
        Mac: ['G', 'R'],
      },
      label: 'Go to Reservations',
      type: 'pageShortcut',
      to: '/reservations',
    },
    {
      keys: {
        Mac: ['G', 'L'],
      },
      label: 'Go to Price Lists',
      type: 'pageShortcut',
      to: '/price-lists',
    },
    {
      keys: {
        Mac: ['G', 'M'],
      },
      label: 'Go to Promotions',
      type: 'pageShortcut',
      to: '/promotions',
    },
    {
      keys: {
        Mac: ['G', 'K'],
      },
      label: 'Go to Campaigns',
      type: 'pageShortcut',
      to: '/campaigns',
    },
    // Settings
    {
      keys: {
        Mac: ['G', ','],
      },
      label: 'Go to Settings',
      type: 'settingShortcut',
      to: '/settings',
    },
    {
      keys: {
        Mac: ['G', ',', 'S'],
      },
      label: 'Go to Store',
      type: 'settingShortcut',
      to: '/settings/store',
    },
    {
      keys: {
        Mac: ['G', ',', 'U'],
      },
      label: 'Go to Users',
      type: 'settingShortcut',
      to: '/settings/users',
    },
    {
      keys: {
        Mac: ['G', ',', 'R'],
      },
      label: 'Go to Regions',
      type: 'settingShortcut',
      to: '/settings/regions',
    },
    {
      keys: {
        Mac: ['G', ',', 'T'],
      },
      label: 'Go to Tax Regions',
      type: 'settingShortcut',
      to: '/settings/tax-regions',
    },
    {
      keys: {
        Mac: ['G', ',', 'A'],
      },
      label: 'Go to Sales Channels',
      type: 'settingShortcut',
      to: '/settings/sales-channels',
    },
    {
      keys: {
        Mac: ['G', ',', 'P'],
      },
      label: 'Go to Product Types',
      type: 'settingShortcut',
      to: '/settings/product-types',
    },
    {
      keys: {
        Mac: ['G', ',', 'L'],
      },
      label: 'Go to Locations',
      type: 'settingShortcut',
      to: '/settings/locations',
    },
    {
      keys: {
        Mac: ['G', ',', 'M'],
      },
      label: 'Go to Return Reasons',
      type: 'settingShortcut',
      to: '/settings/return-reasons',
    },
    {
      keys: {
        Mac: ['G', ',', 'J'],
      },
      label: 'Go to publishable API keys',
      type: 'settingShortcut',
      to: '/settings/publishable-api-keys',
    },
    {
      keys: {
        Mac: ['G', ',', 'K'],
      },
      label: 'Go to secret API keys',
      type: 'settingShortcut',
      to: '/settings/secret-api-keys',
    },
    {
      keys: {
        Mac: ['G', ',', 'W'],
      },
      label: 'Go to Workflows',
      type: 'settingShortcut',
      to: '/settings/workflows',
    },
    {
      keys: {
        Mac: ['G', ',', 'M'],
      },
      label: 'Go to Profile',
      type: 'settingShortcut',
      to: '/settings/profile',
    },
    // Commands
    {
      keys: {
        Mac: ['B', 'Y', 'E'],
      },
      label: 'Logout',
      type: 'commandShortcut',
      callback: () => handleLogout(),
    },
  ];

  return globalShortcuts;
};
