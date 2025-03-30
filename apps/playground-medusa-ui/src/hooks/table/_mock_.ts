export const captureCustomerGroups: any = {
  start: {
    filters: [
      {
        key: 'has_account',
        label: 'Account',
        type: 'select',
        options: [
          {
            label: 'Registered',
            value: 'true',
          },
          {
            label: 'Guest',
            value: 'false',
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
    useCustomerGroupsAll: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
  },
  done: {
    customer_groups: [
      {
        id: 'cusgroup_01JQE2H01NXH9NWB58YVVAS23E',
        name: 'Recently Joined',
        created_by: 'user_01JQDTHQJ16HFRYJ3DY7MP3J2E',
        created_at: '2025-03-28T09:49:56.661Z',
        updated_at: '2025-03-28T09:49:56.661Z',
        deleted_at: null,
        metadata: null,
      },
      {
        id: 'cusgroup_01JQE2HTHXS0GWNASPCY4DJ71F',
        name: '2nd Time Customer',
        created_by: 'user_01JQDTHQJ16HFRYJ3DY7MP3J2E',
        created_at: '2025-03-28T09:50:23.805Z',
        updated_at: '2025-03-28T09:50:23.805Z',
        deleted_at: null,
        metadata: null,
      },
    ],
    filters: [
      {
        key: 'groups',
        label: 'Customer groups',
        type: 'select',
        multiple: true,
        options: [
          {
            label: 'Recently Joined',
            value: 'cusgroup_01JQE2H01NXH9NWB58YVVAS23E',
          },
          {
            label: '2nd Time Customer',
            value: 'cusgroup_01JQE2HTHXS0GWNASPCY4DJ71F',
          },
        ],
      },
      {
        key: 'has_account',
        label: 'Account',
        type: 'select',
        options: [
          {
            label: 'Registered',
            value: 'true',
          },
          {
            label: 'Guest',
            value: 'false',
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
    useCustomerGroupsAll: {
      customer_groups: [
        {
          id: 'cusgroup_01JQE2H01NXH9NWB58YVVAS23E',
          name: 'Recently Joined',
          created_by: 'user_01JQDTHQJ16HFRYJ3DY7MP3J2E',
          created_at: '2025-03-28T09:49:56.661Z',
          updated_at: '2025-03-28T09:49:56.661Z',
          deleted_at: null,
          metadata: null,
        },
        {
          id: 'cusgroup_01JQE2HTHXS0GWNASPCY4DJ71F',
          name: '2nd Time Customer',
          created_by: 'user_01JQDTHQJ16HFRYJ3DY7MP3J2E',
          created_at: '2025-03-28T09:50:23.805Z',
          updated_at: '2025-03-28T09:50:23.805Z',
          deleted_at: null,
          metadata: null,
        },
      ],
      count: 2,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743290160353,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
  },
};

export const captureRegionsAndSalesChannels: any = {
  start: {
    allRegions: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    allSalesChannels: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    filters: [
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
    paymentStatusFilter: {
      key: 'payment_status',
      label: 'Payment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not paid',
          value: 'not_paid',
        },
        {
          label: 'Awaiting',
          value: 'awaiting',
        },
        {
          label: 'Captured',
          value: 'captured',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
        {
          label: 'Partially refunded',
          value: 'partially_refunded',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    fulfillmentStatusFilter: {
      key: 'fulfillment_status',
      label: 'Fulfillment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not fulfilled',
          value: 'not_fulfilled',
        },
        {
          label: 'Fulfilled',
          value: 'fulfilled',
        },
        {
          label: 'Partially fulfilled',
          value: 'partially_fulfilled',
        },
        {
          label: 'Returned',
          value: 'returned',
        },
        {
          label: 'Partially returned',
          value: 'partially_returned',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Partially shipped',
          value: 'partially_shipped',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    dateFilters: [
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
  },
  process: {
    allRegions: {
      regions: [
        {
          id: 'reg_01JQDTGZZXWZ8NM2PMQQ98E0Q2',
          name: 'Europe',
        },
      ],
      count: 1,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743290914195,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: false,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    allSalesChannels: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    filters: [
      {
        key: 'region_id',
        label: 'Region',
        type: 'select',
        options: [
          {
            label: 'Europe',
            value: 'reg_01JQDTGZZXWZ8NM2PMQQ98E0Q2',
          },
        ],
        multiple: true,
        searchable: true,
      },
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
    paymentStatusFilter: {
      key: 'payment_status',
      label: 'Payment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not paid',
          value: 'not_paid',
        },
        {
          label: 'Awaiting',
          value: 'awaiting',
        },
        {
          label: 'Captured',
          value: 'captured',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
        {
          label: 'Partially refunded',
          value: 'partially_refunded',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    fulfillmentStatusFilter: {
      key: 'fulfillment_status',
      label: 'Fulfillment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not fulfilled',
          value: 'not_fulfilled',
        },
        {
          label: 'Fulfilled',
          value: 'fulfilled',
        },
        {
          label: 'Partially fulfilled',
          value: 'partially_fulfilled',
        },
        {
          label: 'Returned',
          value: 'returned',
        },
        {
          label: 'Partially returned',
          value: 'partially_returned',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Partially shipped',
          value: 'partially_shipped',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    dateFilters: [
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
  },
  done: {
    allRegions: {
      regions: [
        {
          id: 'reg_01JQDTGZZXWZ8NM2PMQQ98E0Q2',
          name: 'Europe',
        },
      ],
      count: 1,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743290914195,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: false,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    allSalesChannels: {
      sales_channels: [
        {
          id: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
          name: 'Default Sales Channel',
        },
      ],
      count: 1,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743290914198,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: false,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    filters: [
      {
        key: 'region_id',
        label: 'Region',
        type: 'select',
        options: [
          {
            label: 'Europe',
            value: 'reg_01JQDTGZZXWZ8NM2PMQQ98E0Q2',
          },
        ],
        multiple: true,
        searchable: true,
      },
      {
        key: 'sales_channel_id',
        label: 'Sales Channel',
        type: 'select',
        multiple: true,
        searchable: true,
        options: [
          {
            label: 'Default Sales Channel',
            value: 'sc_01JQDTGY0BDTYDQN9FZYKMD5Q1',
          },
        ],
      },
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
    paymentStatusFilter: {
      key: 'payment_status',
      label: 'Payment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not paid',
          value: 'not_paid',
        },
        {
          label: 'Awaiting',
          value: 'awaiting',
        },
        {
          label: 'Captured',
          value: 'captured',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
        {
          label: 'Partially refunded',
          value: 'partially_refunded',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    fulfillmentStatusFilter: {
      key: 'fulfillment_status',
      label: 'Fulfillment status',
      type: 'select',
      multiple: true,
      options: [
        {
          label: 'Not fulfilled',
          value: 'not_fulfilled',
        },
        {
          label: 'Fulfilled',
          value: 'fulfilled',
        },
        {
          label: 'Partially fulfilled',
          value: 'partially_fulfilled',
        },
        {
          label: 'Returned',
          value: 'returned',
        },
        {
          label: 'Partially returned',
          value: 'partially_returned',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Partially shipped',
          value: 'partially_shipped',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Requires action',
          value: 'requires_action',
        },
      ],
    },
    dateFilters: [
      {
        key: 'created_at',
        label: 'Created At',
        type: 'date',
      },
      {
        key: 'updated_at',
        label: 'Updated At',
        type: 'date',
      },
    ],
  },
};

export const captureProductTypesTags: any = {
  start: {
    allProductTypes: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    allProductTags: {
      status: 'pending',
      fetchStatus: 'fetching',
      isPending: true,
      isSuccess: false,
      isError: false,
      isInitialLoading: true,
      isLoading: true,
      dataUpdatedAt: 0,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: true,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: true,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    filters: [
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
    statusFilter: {
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
    dateFilters: [
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
  },
  done: {
    allProductTypes: {
      product_types: [],
      count: 0,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743291862535,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: false,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
    allProductTags: {
      product_tags: [
        {
          id: 'ptag_01JQE2TD79MX795G3KV05TXXK3',
          value: 'ProductTag1',
          created_at: '2025-03-28T09:55:05.066Z',
          updated_at: '2025-03-28T09:55:05.066Z',
        },
      ],
      count: 1,
      offset: 0,
      limit: 1000,
      status: 'success',
      fetchStatus: 'idle',
      isPending: false,
      isSuccess: true,
      isError: false,
      isInitialLoading: false,
      isLoading: false,
      dataUpdatedAt: 1743291862538,
      error: null,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isRefetching: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isStale: false,
      promise: {
        status: 'rejected',
        reason: {},
      },
    },
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
    statusFilter: {
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
    dateFilters: [
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
  },
};

export const useCustomerGroups = (query?: any, options?: any) => {
  return captureCustomerGroups.done.useCustomerGroupsAll;
};

export const useRegions = (query?: any, options?: any) => {
  return captureRegionsAndSalesChannels.done.allRegions;
};

export const useSalesChannels = (query?: any, options?: any) => {
  return captureRegionsAndSalesChannels.done.allSalesChannels;
};

export const useProductTypes = (query?: any, options?: any) => {
  return captureProductTypesTags.done.allProductTypes;
};

export const useProductTags = (query?: any, options?: any) => {
  return captureProductTypesTags.done.allProductTags;
};
