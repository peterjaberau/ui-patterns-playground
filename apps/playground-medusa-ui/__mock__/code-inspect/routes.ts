export const codeInspectRoutes = {
  input: {
    coreRoutes: [],
    settingsRoutes: [],
  },
  router: {
    createBrowserRouter: {},
    getRouteMap: [
      {
        children: [],
        element: {},
        errorElement: {},
      },
    ],
  },
  api: {},
};

export const getRoutMap = [
  {
    element: 'ProtectedRoute',
    errorElement: 'ErrorBoundary',
    children: [
      {
        element: 'MainLayout',
        children: [
          {
            path: '/',
            errorElement: 'ErrorBoundary',
            lazy: '../../routes/home',
          },
          {
            path: '/products',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'products.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/products/product-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/products/product-create',
                  },
                  {
                    path: 'import',
                    lazy: '../../routes/products/product-import',
                  },
                  {
                    path: 'export',
                    lazy: '../../routes/products/product-export',
                  },
                ],
              },
              {
                path: ':id',
                errorElement: 'ErrorBoundary',
                lazy: '../../routes/products/product-detail',
                children: [
                  {
                    path: '',
                    lazy: '../../routes/products/product-detail',
                    children: [
                      {
                        path: 'edit',
                        lazy: '../../routes/products/product-edit',
                      },
                      {
                        path: 'edit-variant',
                        lazy: '../../routes/product-variants/product-variant-edit',
                      },
                      {
                        path: 'sales-channels',
                        lazy: '../../routes/products/product-sales-channels',
                      },
                      {
                        path: 'attributes',
                        lazy: '../../routes/products/product-attributes',
                      },
                      {
                        path: 'organization',
                        lazy: '../../routes/products/product-organization',
                      },
                      {
                        path: 'shipping-profile',
                        lazy: '../../routes/products/product-shipping-profile',
                      },
                      {
                        path: 'media',
                        lazy: '../../routes/products/product-media',
                      },
                      {
                        path: 'prices',
                        lazy: '../../routes/products/product-prices',
                      },
                      {
                        path: 'options/create',
                        lazy: '../../routes/products/product-create-option',
                      },
                      {
                        path: 'options/:option_id/edit',
                        lazy: '../../routes/products/product-edit-option',
                      },
                      {
                        path: 'variants/create',
                        lazy: '../../routes/products/product-create-variant',
                      },
                      {
                        path: 'stock',
                        lazy: '../../routes/products/product-stock',
                      },
                      {
                        path: 'metadata/edit',
                        lazy: '../../routes/products/product-metadata',
                      },
                    ],
                  },
                  {
                    path: 'variants/:variant_id',
                    lazy: '../../routes/product-variants/product-variant-detail',
                    children: [
                      {
                        path: 'edit',
                        lazy: '../../routes/product-variants/product-variant-edit',
                      },
                      {
                        path: 'prices',
                        lazy: '../../routes/products/product-prices',
                      },
                      {
                        path: 'manage-items',
                        lazy: '../../routes/product-variants/product-variant-manage-inventory-items',
                      },
                      {
                        path: 'metadata/edit',
                        lazy: '../../routes/product-variants/product-variant-metadata',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: '/categories',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'categories.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/categories/category-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/categories/category-create',
                  },
                  {
                    path: 'organize',
                    lazy: '../../routes/categories/category-organize',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/categories/category-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/categories/category-edit',
                  },
                  {
                    path: 'products',
                    lazy: '../../routes/categories/category-products',
                  },
                  {
                    path: 'organize',
                    lazy: '../../routes/categories/category-organize',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/categories/categories-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/orders',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'orders.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/orders/order-list',
              },
              {
                path: ':id',
                lazy: '../../routes/orders/order-detail',
                children: [
                  {
                    path: 'fulfillment',
                    lazy: '../../routes/orders/order-create-fulfillment',
                  },
                  {
                    path: 'returns/:return_id/receive',
                    lazy: '../../routes/orders/order-receive-return',
                  },
                  {
                    path: 'allocate-items',
                    lazy: '../../routes/orders/order-allocate-items',
                  },
                  {
                    path: ':f_id/create-shipment',
                    lazy: '../../routes/orders/order-create-shipment',
                  },
                  {
                    path: 'returns',
                    lazy: '../../routes/orders/order-create-return',
                  },
                  {
                    path: 'claims',
                    lazy: '../../routes/orders/order-create-claim',
                  },
                  {
                    path: 'exchanges',
                    lazy: '../../routes/orders/order-create-exchange',
                  },
                  {
                    path: 'edits',
                    lazy: '../../routes/orders/order-create-edit',
                  },
                  {
                    path: 'refund',
                    lazy: '../../routes/orders/order-create-refund',
                  },
                  {
                    path: 'transfer',
                    lazy: '../../routes/orders/order-request-transfer',
                  },
                  {
                    path: 'email',
                    lazy: '../../routes/orders/order-edit-email',
                  },
                  {
                    path: 'shipping-address',
                    lazy: '../../routes/orders/order-edit-shipping-address',
                  },
                  {
                    path: 'billing-address',
                    lazy: '../../routes/orders/order-edit-billing-address',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/orders/order-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/promotions',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'promotions.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/promotions/promotion-list',
              },
              {
                path: 'create',
                lazy: '../../routes/promotions/promotion-create',
              },
              {
                path: ':id',
                lazy: '../../routes/promotions/promotion-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/promotions/promotion-edit-details',
                  },
                  {
                    path: 'add-to-campaign',
                    lazy: '../../routes/promotions/promotion-add-campaign',
                  },
                  {
                    path: ':ruleType/edit',
                    lazy: '../../routes/promotions/common/edit-rules',
                  },
                ],
              },
            ],
          },
          {
            path: '/campaigns',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'campaigns.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/campaigns/campaign-list',
              },
              {
                path: 'create',
                lazy: '../../routes/campaigns/campaign-create',
              },
              {
                path: ':id',
                lazy: '../../routes/campaigns/campaign-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/campaigns/campaign-edit',
                  },
                  {
                    path: 'configuration',
                    lazy: '../../routes/campaigns/campaign-configuration',
                  },
                  {
                    path: 'edit-budget',
                    lazy: '../../routes/campaigns/campaign-budget-edit',
                  },
                  {
                    path: 'add-promotions',
                    lazy: '../../routes/campaigns/add-campaign-promotions',
                  },
                ],
              },
            ],
          },
          {
            path: '/collections',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'collections.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/collections/collection-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/collections/collection-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/collections/collection-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/collections/collection-edit',
                  },
                  {
                    path: 'products',
                    lazy: '../../routes/collections/collection-add-products',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/collections/collection-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/price-lists',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'priceLists.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/price-lists/price-list-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/price-lists/price-list-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/price-lists/price-list-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/price-lists/price-list-edit',
                  },
                  {
                    path: 'configuration',
                    lazy: '../../routes/price-lists/price-list-configuration',
                  },
                  {
                    path: 'products/add',
                    lazy: '../../routes/price-lists/price-list-prices-add',
                  },
                  {
                    path: 'products/edit',
                    lazy: '../../routes/price-lists/price-list-prices-edit',
                  },
                ],
              },
            ],
          },
          {
            path: '/customers',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'customers.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/customers/customer-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/customers/customer-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/customers/customer-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/customers/customer-edit',
                  },
                  {
                    path: 'create-address',
                    lazy: '../../routes/customers/customer-create-address',
                  },
                  {
                    path: 'add-customer-groups',
                    lazy: '../../routes/customers/customers-add-customer-group',
                  },
                  {
                    path: ':order_id/transfer',
                    lazy: '../../routes/orders/order-request-transfer',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/customers/customer-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/customer-groups',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'customerGroups.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/customer-groups/customer-group-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/customer-groups/customer-group-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/customer-groups/customer-group-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/customer-groups/customer-group-edit',
                  },
                  {
                    path: 'add-customers',
                    lazy: '../../routes/customer-groups/customer-group-add-customers',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/customer-groups/customer-group-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/reservations',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'reservations.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/reservations/reservation-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/reservations/reservation-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/reservations/reservation-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/reservations/reservation-detail/components/edit-reservation',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/reservations/reservation-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: '/inventory',
            errorElement: 'ErrorBoundary',
            handle: {
              breadcrumb: 'inventory.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/inventory/inventory-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/inventory/inventory-create',
                  },
                  {
                    path: 'stock',
                    lazy: '../../routes/inventory/inventory-stock',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/inventory/inventory-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/inventory/inventory-detail/components/edit-inventory-item',
                  },
                  {
                    path: 'attributes',
                    lazy: '../../routes/inventory/inventory-detail/components/edit-inventory-item-attributes',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/inventory/inventory-metadata',
                  },
                  {
                    path: 'locations',
                    lazy: '../../routes/inventory/inventory-detail/components/manage-locations',
                  },
                  {
                    path: 'locations/:location_id',
                    lazy: '../../routes/inventory/inventory-detail/components/adjust-inventory',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: 'ProtectedRoute',
    errorElement: 'ErrorBoundary',
    children: [
      {
        path: '/settings',
        handle: {
          breadcrumb: 'app.nav.settings.header',
        },
        element: 'SettingsLayout',
        children: [
          {
            index: true,
            errorElement: 'ErrorBoundary',
            lazy: '../../routes/settings',
          },
          {
            path: 'profile',
            errorElement: 'ErrorBoundary',
            lazy: '../../routes/profile/profile-detail',
            handle: {
              breadcrumb: 'profile.domain',
            },
            children: [
              {
                path: 'edit',
                lazy: '../../routes/profile/profile-edit',
              },
            ],
          },
          {
            path: 'regions',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'regions.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/regions/region-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/regions/region-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/regions/region-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/regions/region-edit',
                  },
                  {
                    path: 'countries/add',
                    lazy: '../../routes/regions/region-add-countries',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/regions/region-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: 'store',
            errorElement: 'ErrorBoundary',
            lazy: '../../routes/store/store-detail',
            handle: {
              breadcrumb: 'store.domain',
            },
            children: [
              {
                path: 'edit',
                lazy: '../../routes/store/store-edit',
              },
              {
                path: 'currencies',
                lazy: '../../routes/store/store-add-currencies',
              },
              {
                path: 'metadata/edit',
                lazy: '../../routes/store/store-metadata',
              },
            ],
          },
          {
            path: 'users',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'users.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/users/user-list',
                children: [
                  {
                    path: 'invite',
                    lazy: '../../routes/users/user-invite',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/users/user-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/users/user-edit',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/users/user-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: 'sales-channels',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'salesChannels.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/sales-channels/sales-channel-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/sales-channels/sales-channel-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/sales-channels/sales-channel-detail',
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/sales-channels/sales-channel-edit',
                  },
                  {
                    path: 'add-products',
                    lazy: '../../routes/sales-channels/sales-channel-add-products',
                  },
                  {
                    path: 'metadata/edit',
                    lazy: '../../routes/sales-channels/sales-channel-metadata',
                  },
                ],
              },
            ],
          },
          {
            path: 'locations',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'locations.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/locations/location-list',
              },
              {
                path: 'create',
                lazy: '../../routes/locations/location-create',
              },
              {
                path: 'shipping-profiles',
                element: 'Outlet',
                handle: {
                  breadcrumb: 'shippingProfile.domain',
                },
                children: [
                  {
                    path: '',
                    lazy: '../../routes/shipping-profiles/shipping-profiles-list',
                    children: [
                      {
                        path: 'create',
                        lazy: '../../routes/shipping-profiles/shipping-profile-create',
                      },
                    ],
                  },
                  {
                    path: ':shipping_profile_id',
                    lazy: '../../routes/shipping-profiles/shipping-profile-detail',
                    handle: {
                      breadcrumb: 'AdminShippingProfileResponse',
                    },
                    children: [
                      {
                        path: 'metadata/edit',
                        lazy: '../../routes/shipping-profiles/shipping-profile-metadata',
                      },
                    ],
                  },
                ],
              },
              {
                path: ':location_id',
                lazy: '../../routes/locations/location-detail',
                handle: {
                  breadcrumb: 'AdminStockLocationResponse',
                },
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/locations/location-edit',
                  },
                  {
                    path: 'sales-channels',
                    lazy: '../../routes/locations/location-sales-channels',
                  },
                  {
                    path: 'fulfillment-providers',
                    lazy: '../../routes/locations/location-fulfillment-providers',
                  },
                  {
                    path: 'fulfillment-set/:fset_id',
                    children: [
                      {
                        path: 'service-zones/create',
                        lazy: '../../routes/locations/location-service-zone-create',
                      },
                      {
                        path: 'service-zone/:zone_id',
                        children: [
                          {
                            path: 'edit',
                            lazy: '../../routes/locations/location-service-zone-edit',
                          },
                          {
                            path: 'areas',
                            lazy: '../../routes/locations/location-service-zone-manage-areas',
                          },
                          {
                            path: 'shipping-option',
                            children: [
                              {
                                path: 'create',
                                lazy: '../../routes/locations/location-service-zone-shipping-option-create',
                              },
                              {
                                path: ':so_id',
                                children: [
                                  {
                                    path: 'edit',
                                    lazy: '../../routes/locations/location-service-zone-shipping-option-edit',
                                  },
                                  {
                                    path: 'pricing',
                                    lazy: '../../routes/locations/location-service-zone-shipping-option-pricing',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: 'product-tags',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'productTags.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/product-tags/product-tag-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/product-tags/product-tag-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/product-tags/product-tag-detail',
                handle: {
                  breadcrumb: 'AdminProductTagResponse',
                },
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/product-tags/product-tag-edit',
                  },
                ],
              },
            ],
          },
          {
            path: 'workflows',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'workflowExecutions.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/workflow-executions/workflow-execution-list',
              },
              {
                path: ':id',
                lazy: '../../routes/workflow-executions/workflow-execution-detail',
                handle: {
                  breadcrumb: 'AdminWorkflowExecutionResponse',
                },
              },
            ],
          },
          {
            path: 'product-types',
            errorElement: 'ErrorBoundary',
            element: 'Outlet',
            handle: {
              breadcrumb: 'productTypes.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/product-types/product-type-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/product-types/product-type-create',
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/product-types/product-type-detail',
                handle: {
                  breadcrumb: 'AdminProductTypeResponse',
                },
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/product-types/product-type-edit',
                  },
                ],
              },
            ],
          },
          {
            path: 'publishable-api-keys',
            element: 'Outlet',
            handle: {
              breadcrumb: 'apiKeyManagement.domain.publishable',
            },
            children: [
              {
                path: '',
                element: 'Outlet',
                children: [
                  {
                    path: '',
                    lazy: '../../routes/api-key-management/api-key-management-list',
                    children: [
                      {
                        path: 'create',
                        lazy: '../../routes/api-key-management/api-key-management-create',
                      },
                    ],
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/api-key-management/api-key-management-detail',
                handle: {
                  breadcrumb: 'AdminApiKeyResponse',
                },
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/api-key-management/api-key-management-edit',
                  },
                  {
                    path: 'sales-channels',
                    lazy: '../../routes/api-key-management/api-key-management-sales-channels',
                  },
                ],
              },
            ],
          },
          {
            path: 'secret-api-keys',
            element: 'Outlet',
            handle: {
              breadcrumb: 'apiKeyManagement.domain.secret',
            },
            children: [
              {
                path: '',
                element: 'Outlet',
                children: [
                  {
                    path: '',
                    lazy: '../../routes/api-key-management/api-key-management-list',
                    children: [
                      {
                        path: 'create',
                        lazy: '../../routes/api-key-management/api-key-management-create',
                      },
                    ],
                  },
                ],
              },
              {
                path: ':id',
                lazy: '../../routes/api-key-management/api-key-management-detail',
                handle: {
                  breadcrumb: 'AdminApiKeyResponse',
                },
                children: [
                  {
                    path: 'edit',
                    lazy: '../../routes/api-key-management/api-key-management-edit',
                  },
                ],
              },
            ],
          },
          {
            path: 'tax-regions',
            element: 'Outlet',
            handle: {
              breadcrumb: 'taxRegions.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/tax-regions/tax-region-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/tax-regions/tax-region-create',
                  },
                ],
              },
              {
                path: ':id',
                Component: 'Outlet',
                loader: 'taxRegionLoader',
                handle: {
                  breadcrumb: 'AdminTaxRegionResponse',
                },
                children: [
                  {
                    path: '',
                    lazy: '../../routes/tax-regions/tax-region-detail',
                    children: [
                      {
                        path: 'provinces/create',
                        lazy: '../../routes/tax-regions/tax-region-province-create',
                      },
                      {
                        path: 'overrides/create',
                        lazy: '../../routes/tax-regions/tax-region-tax-override-create',
                      },
                      {
                        path: 'overrides/:tax_rate_id/edit',
                        lazy: '../../routes/tax-regions/tax-region-tax-override-edit',
                      },
                      {
                        path: 'tax-rates/create',
                        lazy: '../../routes/tax-regions/tax-region-tax-rate-create',
                      },
                      {
                        path: 'tax-rates/:tax_rate_id/edit',
                        lazy: '../../routes/tax-regions/tax-region-tax-rate-edit',
                      },
                    ],
                  },
                  {
                    path: 'provinces/:province_id',
                    lazy: '../../routes/tax-regions/tax-region-province-detail',
                    handle: {
                      breadcrumb: 'AdminTaxRegionResponse',
                    },
                    children: [
                      {
                        path: 'tax-rates/create',
                        lazy: '../../routes/tax-regions/tax-region-tax-rate-create',
                      },
                      {
                        path: 'tax-rates/:tax_rate_id/edit',
                        lazy: '../../routes/tax-regions/tax-region-tax-rate-edit',
                      },
                      {
                        path: 'overrides/create',
                        lazy: '../../routes/tax-regions/tax-region-tax-override-create',
                      },
                      {
                        path: 'overrides/:tax_rate_id/edit',
                        lazy: '../../routes/tax-regions/tax-region-tax-override-edit',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: 'return-reasons',
            element: 'Outlet',
            handle: {
              breadcrumb: 'returnReasons.domain',
            },
            children: [
              {
                path: '',
                lazy: '../../routes/return-reasons/return-reason-list',
                children: [
                  {
                    path: 'create',
                    lazy: '../../routes/return-reasons/return-reason-create',
                  },
                  {
                    path: ':id',
                    children: [
                      {
                        path: 'edit',
                        lazy: '../../routes/return-reasons/return-reason-edit',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    element: 'PublicLayout',
    children: [
      {
        errorElement: 'ErrorBoundary',
        children: [
          {
            path: '/login',
            lazy: '../../routes/login',
          },
          {
            path: '/reset-password',
            lazy: '../../routes/reset-password',
          },
          {
            path: '/invite',
            lazy: '../../routes/invite',
          },
          {
            path: '*',
            lazy: '../../routes/no-match',
          },
        ],
      },
    ],
  },
];
