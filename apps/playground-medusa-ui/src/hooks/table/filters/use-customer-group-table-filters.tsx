import { Filter } from '../../../components/table/data-table';

export const useCustomerGroupTableFilters = () => {
  let filters: Filter[] = [];

  const dateFilters: Filter[] = [
    { label: 'Created', key: 'created_at' },
    { label: 'Updated', key: 'updated_at' },
  ].map((f) => ({
    key: f.key,
    label: f.label,
    type: 'date',
  }));

  filters = [...filters, ...dateFilters];

  return filters;
};
