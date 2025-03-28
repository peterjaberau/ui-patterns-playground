export const defaultRoutes = {
  name: 'Session',
  description: 'Create app instance',
  hints: 'layout.tsx',
  items: [
    {
      name: 'Base layout',
      slug: 'base',
      description: 'where only the header and footer are shared',
    },
  ],
};

export const defaultProducts = [
  {
    id: 'prod_01JQDTH04A5YF61V3AZ01626DQ',
    title: 'Medusa Sweatpants',
    handle: 'sweatpants',
    status: 'published',
    thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png',
    variants: [
      {
        id: 'variant_01JQDTH05MVA9JS17WCN1G7EZR',
      },
      {
        id: 'variant_01JQDTH05M72DTDBNT69F2QQDC',
      },
      {
        id: 'variant_01JQDTH05MCN5F6X66EXHCW918',
      },
      {
        id: 'variant_01JQDTH05M9CF2G81G7TE4T2MF',
      },
    ],
    collection: null,
    sales_channels: [
      {
        id: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
        name: 'Default Sales Channel',
        description: 'Created by Medusa',
        is_disabled: false,
        metadata: null,
        created_at: '2025-03-28T07:30:05.964Z',
        updated_at: '2025-03-28T07:30:05.964Z',
        deleted_at: null,
      },
    ],
  },
  {
    id: 'prod_01JQDTH04ACW2B7GM3A8F3FHH4',
    title: 'Medusa T-Shirt',
    handle: 't-shirt',
    status: 'published',
    thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png',
    variants: [
      {
        id: 'variant_01JQDTH05KWXTTJQY9F5GE4G2F',
      },
      {
        id: 'variant_01JQDTH05KTM8KXVCVHVFFG4RZ',
      },
      {
        id: 'variant_01JQDTH05KMJS9C87DZF9MG3XC',
      },
      {
        id: 'variant_01JQDTH05K90DQ8B49Z5EGKBJY',
      },
      {
        id: 'variant_01JQDTH05K7KFX0BX1Y9QNSA8P',
      },
      {
        id: 'variant_01JQDTH05KJ93P569E0694FZ2K',
      },
      {
        id: 'variant_01JQDTH05KAYC5C5DN5QGS7VH2',
      },
      {
        id: 'variant_01JQDTH05K24BNCV5VDYKCG8TR',
      },
    ],
    collection: null,
    sales_channels: [
      {
        id: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
        name: 'Default Sales Channel',
        description: 'Created by Medusa',
        is_disabled: false,
        metadata: null,
        created_at: '2025-03-28T07:30:05.964Z',
        updated_at: '2025-03-28T07:30:05.964Z',
        deleted_at: null,
      },
    ],
  },
  {
    id: 'prod_01JQDTH04AMRGFM5GRE9DVT7XQ',
    title: 'Medusa Shorts',
    handle: 'shorts',
    status: 'published',
    thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png',
    variants: [
      {
        id: 'variant_01JQDTH05MB1S742H1W775W9EF',
      },
      {
        id: 'variant_01JQDTH05MHMF8Y4BRQ41SSBBA',
      },
      {
        id: 'variant_01JQDTH05MEMV38AD270NT6XVV',
      },
      {
        id: 'variant_01JQDTH05M2QKQ3T0HCF691XWR',
      },
    ],
    collection: null,
    sales_channels: [
      {
        id: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
        name: 'Default Sales Channel',
        description: 'Created by Medusa',
        is_disabled: false,
        metadata: null,
        created_at: '2025-03-28T07:30:05.964Z',
        updated_at: '2025-03-28T07:30:05.964Z',
        deleted_at: null,
      },
    ],
  },
  {
    id: 'prod_01JQDTH04AZVTP47HQHM0Z83RG',
    title: 'Medusa Sweatshirt',
    handle: 'sweatshirt',
    status: 'published',
    thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png',
    variants: [
      {
        id: 'variant_01JQDTH05MAAD7GHT7A9WC7EXP',
      },
      {
        id: 'variant_01JQDTH05M2Y7WAD82ERNY3R90',
      },
      {
        id: 'variant_01JQDTH05M6ZF8XPGDBRRX0G9C',
      },
      {
        id: 'variant_01JQDTH05MK2C2RSN0M862B77G',
      },
    ],
    collection: null,
    sales_channels: [
      {
        id: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
        name: 'Default Sales Channel',
        description: 'Created by Medusa',
        is_disabled: false,
        metadata: null,
        created_at: '2025-03-28T07:30:05.964Z',
        updated_at: '2025-03-28T07:30:05.964Z',
        deleted_at: null,
      },
    ],
  },
];

export const defaultProductsConfig = {
  filters: [
    {
      key: 'type_id',
      label: 'Type',
      type: 'select',
      multiple: true,
      options: [],
    },
    {
      key: 'tag_id',
      label: 'Tag',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'ProductTag1',
          value: 'ptag_01JQE2TD79MX795G3KV05TXXK3',
        },
      ],
    },
    {
      key: 'sales_channel_id',
      label: 'Sales Channel',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Default Sales Channel',
          value: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
        },
      ],
    },
    {
      key: 'status',
      label: 'Status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Proposed',
          value: 'proposed',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
    },
    {
      key: 'created_at',
      label: 'Created',
      type: 'date',
    },
    {
      key: 'updated_at',
      label: 'Updated',
      type: 'date',
    },
  ],

  table: {
    options: {
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100,
      globalFilterFn: 'auto',
      groupedColumnMode: 'reorder',
      paginateExpandedRows: true,
      enableRowSelection: false,
      enableMultiRowSelection: true,
      enableSubRowSelection: true,
      columnResizeMode: 'onEnd',
      columnResizeDirection: 'ltr',
      columns: [
        {
          id: 'product',
        },
        {
          accessorKey: 'collection',
        },
        {
          accessorKey: 'sales_channels',
        },
        {
          accessorKey: 'variants',
        },
        {
          accessorKey: 'status',
        },
        {
          id: 'actions',
        },
      ],
      data: defaultProducts,
    },
  },
};
