import { Filter } from '../../../components/table/data-table';
// import { useCustomerGroups } from '../../api/customer-groups';
import { useCustomerGroups } from '../_mock_';

const excludeableFields = ['groups'] as const;

export const useCustomerTableFilters = (exclude?: (typeof excludeableFields)[number][]) => {
  const isGroupsExcluded = exclude?.includes('groups');

  const { customer_groups } = useCustomerGroups(
    {
      limit: 1000,
    },
    {
      enabled: !isGroupsExcluded,
    },
  );

  let filters: Filter[] = [];

  if (customer_groups && !isGroupsExcluded) {
    const customerGroupFilter: Filter = {
      key: 'groups',
      label: 'Customer groups',
      type: 'select',
      multiple: true,
      options: customer_groups.map((s: any) => ({
        label: s.name,
        value: s.id,
      })),
    };

    filters = [...filters, customerGroupFilter];
  }

  const hasAccountFilter: Filter = {
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
  };

  const dateFilters: Filter[] = [
    { label: 'Created', key: 'created_at' },
    { label: 'Updated', key: 'updated_at' },
  ].map((f) => ({
    key: f.key,
    label: f.label,
    type: 'date',
  }));

  filters = [...filters, hasAccountFilter, ...dateFilters];

  return filters;
};
