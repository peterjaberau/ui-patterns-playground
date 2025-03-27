export const Header = {
  HelloWorld01: {
    useStore: {
      store: {
        id: 'store_01JQ6CNVEP71K8J7P0BZ7R4H5N',
        name: 'Medusa Store',
        default_sales_channel_id: 'sc_01JQ6CNVEDJQ969PWVDXP6G5W3',
        default_region_id: null,
        default_location_id: null,
        metadata: null,
        created_at: '2025-03-25T10:13:26.101Z',
        updated_at: '2025-03-25T10:13:26.101Z',
        supported_currencies: [
          {
            id: 'stocur_01JQ6CNXDW87GKXHYATTJM2GAC',
            currency_code: 'eur',
            is_default: true,
            store_id: 'store_01JQ6CNVEP71K8J7P0BZ7R4H5N',
            created_at: '2025-03-25T10:13:28.119Z',
            updated_at: '2025-03-25T10:13:28.119Z',
            deleted_at: null,
            currency: {
              code: 'eur',
              symbol: '€',
              symbol_native: '€',
              name: 'Euro',
              decimal_digits: 2,
              raw_rounding: {
                value: '0',
                precision: 20,
              },
              created_at: '2025-03-25T10:13:23.672Z',
              updated_at: '2025-03-25T10:13:23.672Z',
              deleted_at: null,
              rounding: 0,
            },
          },
          {
            id: 'stocur_01JQ6CNXDWKZKS7S77NG4YN0VH',
            currency_code: 'usd',
            is_default: false,
            store_id: 'store_01JQ6CNVEP71K8J7P0BZ7R4H5N',
            created_at: '2025-03-25T10:13:28.119Z',
            updated_at: '2025-03-25T10:13:28.119Z',
            deleted_at: null,
            currency: {
              code: 'usd',
              symbol: '$',
              symbol_native: '$',
              name: 'US Dollar',
              decimal_digits: 2,
              raw_rounding: {
                value: '0',
                precision: 20,
              },
              created_at: '2025-03-25T10:13:23.672Z',
              updated_at: '2025-03-25T10:13:23.672Z',
              deleted_at: null,
              rounding: 0,
            },
          },
        ],
      },
      isPending: false,
      isError: false,
      error: null,
    },
    Header: {
      fallback: 'M',
      isLoaded: true,
    },
  },
};

export const CoreRouteSection = {
  useCoreRoutes: {
    coreRoutes: [
      {
        icons: '',
        items: [],
        label: 'Orders',
        to: '/orders',
      },
      {
        icons: '',
        items: [
          {
            label: 'Collections',
            to: '/collections',
          },
          {
            label: 'Categories',
            to: '/categories',
          },
        ],
        label: 'Products',
        to: '/products',
      },
      {
        icon: '',
        items: [
          {
            label: 'Reservations',
            to: '/reservations',
          },
        ],
        label: 'Inventory',
        to: '/inventory',
      },
      {
        icons: '',
        items: [
          {
            label: 'Customer Groups',
            to: '/customer-groups',
          },
        ],
        label: 'Customers',
        to: '/customers',
      },
      {
        icons: '',
        items: [
          {
            label: 'Campaigns',
            to: '/campaigns',
          },
        ],
        label: 'Promotions',
        to: '/promotions',
      },
      {
        icons: '',
        items: [],
        label: 'Price Lists',
        to: '/price-lists',
      },
      {
        icons: '',
        items: [],
        label: 'Settings',
        to: '/settings',
      },
    ],
  },
};
