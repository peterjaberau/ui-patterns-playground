import { HttpTypes } from '@medusajs/types';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';
import { useTranslation } from '@/i18n/translations/en';
import { TextCell, TextHeader } from '../../../components/table/table-cells/common/text-cell';
import { formatProvider } from '../../../lib/format-provider';

const columnHelper = createColumnHelper<HttpTypes.AdminFulfillmentProvider | any>();

export const useFulfillmentProviderTableColumns = () => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      columnHelper.accessor('id', {
        header: () => <TextHeader text={'Provider'} />,
        cell: ({ getValue }) => <TextCell text={formatProvider(getValue())} />,
      }),
    ],
    [t],
  );
};
