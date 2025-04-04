import Button from '@base/button';
import { RiHistoryLine } from '@remixicon/react';
import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

type EmptyProps = {
  onResetFilter: () => void;
};

const Empty: FC<EmptyProps> = ({ onResetFilter }) => {
  const { t } = useTranslation();

  return (
    <div className="flex h-5/6 w-full flex-col justify-center gap-y-2">
      <div className="flex justify-center">
        <RiHistoryLine className="text-text-empty-state-icon h-10 w-10" />
      </div>
      <div className="system-xs-regular text-text-tertiary flex justify-center">
        {t('workflow.versionHistory.filter.empty')}
      </div>
      <div className="flex justify-center">
        <Button size="small" onClick={onResetFilter}>
          {t('workflow.versionHistory.filter.reset')}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Empty);
