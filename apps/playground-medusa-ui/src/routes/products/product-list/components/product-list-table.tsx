'use client';
import { defaultProducts } from '@/store/defaults';
import {
  Badge,
  Button,
  createDataTableColumnHelper,
  createDataTableFilterHelper,
  DataTable,
  DataTableFilteringState,
  DataTablePaginationState,
  DataTableSortingState,
  Heading,
  useDataTable,
} from '@medusajs/ui';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Container } from '@medusajs/ui';

const columnHelper = createDataTableColumnHelper<any>();

const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    // Enables sorting for the column.
    enableSorting: true,
    // If omitted, the header will be used instead if it's a string,
    // otherwise the accessor key (id) will be used.
    sortLabel: 'Title',
    // If omitted the default value will be "A-Z"
    sortAscLabel: 'A-Z',
    // If omitted the default value will be "Z-A"
    sortDescLabel: 'Z-A',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue();
      return (
        <Badge color={status === 'published' ? 'green' : 'grey'} size="xsmall">
          {status === 'published' ? 'Published' : 'Draft'}
        </Badge>
      );
    },
  }),
];

const filterHelper = createDataTableFilterHelper<any>();

const filters = [
  filterHelper.accessor('status', {
    type: 'select',
    label: 'Status',
    options: [
      {
        label: 'Published',
        value: 'published',
      },
      {
        label: 'Draft',
        value: 'draft',
      },
    ],
  }),
];

const limit = 15;

export const ProductListTable = () => {
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  });
  const [search, setSearch] = useState<string>('');
  const [filtering, setFiltering] = useState<DataTableFilteringState>({});
  const [sorting, setSorting] = useState<DataTableSortingState | null>(null);

  const offset = useMemo(() => {
    return pagination.pageIndex * limit;
  }, [pagination]);
  const statusFilters = useMemo(() => {
    return (filtering.status || []) as any;
  }, [filtering]);

  const { data, isLoading } = useQuery({
    queryFn: () => Promise.resolve({ products: defaultProducts, count: defaultProducts.length }),
    queryKey: ['products'],
  });

  const table = useDataTable({
    columns,
    data: data?.products || [],
    getRowId: (row) => row.id,
    rowCount: data?.count || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    search: {
      state: search,
      onSearchChange: setSearch,
    },
    filtering: {
      state: filtering,
      onFilteringChange: setFiltering,
    },
    filters,
    sorting: {
      // Pass the pagination state and updater to the table instance
      state: sorting,
      onSortingChange: setSorting,
    },
  });

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Products</Heading>
        <div className="flex items-center justify-center gap-x-2">
          <Button size="small" variant="secondary" asChild>
            <Link href="/products/id-1">Export</Link>
          </Button>
          <Button size="small" variant="secondary" asChild>
            <Link href="/products/id-2">Import</Link>
          </Button>
          <Button size="small" variant="secondary" asChild>
            <Link href="/products/drawer">Create</Link>
          </Button>
        </div>
      </div>
      <DataTable instance={table}>
        <DataTable.Toolbar className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <div className="flex gap-2">
            <DataTable.FilterMenu tooltip="Filter" />
            <DataTable.SortingMenu tooltip="Sort" />
            <DataTable.Search placeholder="Search..." />
          </div>
        </DataTable.Toolbar>
        <DataTable.Table />
        <DataTable.Pagination />
      </DataTable>
    </Container>
  );
};
