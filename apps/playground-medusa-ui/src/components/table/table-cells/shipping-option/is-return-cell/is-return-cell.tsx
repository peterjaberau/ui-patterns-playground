import { useTranslation } from '@/i18n/translations/en';

type IsReturnCellProps = {
  isReturn?: boolean;
};

export const IsReturnCell = ({ isReturn }: IsReturnCellProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center overflow-hidden">
      <span className="truncate">{isReturn ? t('regions.return') : t('regions.outbound')}</span>
    </div>
  );
};

export const IsReturnHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center overflow-hidden">
      <span className="truncate">{t('fields.type')}</span>
    </div>
  );
};
