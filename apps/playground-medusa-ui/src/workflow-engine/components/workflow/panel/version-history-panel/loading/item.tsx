import React, { type FC } from 'react';
import cn from '@/utils/classnames';

type ItemProps = {
  titleWidth: string;
  releaseNotesWidth: string;
  isFirst: boolean;
  isLast: boolean;
};

const Item: FC<ItemProps> = ({ titleWidth, releaseNotesWidth, isFirst, isLast }) => {
  return (
    <div className="relative flex gap-x-1 p-2">
      {!isLast && <div className="bg-divider-subtle absolute left-4 top-6 h-[calc(100%-0.75rem)] w-0.5" />}
      <div className="flex h-5 w-[18px] shrink-0 items-center justify-center">
        <div className="border-text-quaternary h-2 w-2 rounded-lg border-[2px]" />
      </div>
      <div className="flex grow flex-col gap-y-0.5">
        <div className="flex h-3.5 items-center">
          <div className={cn('bg-text-quaternary h-2 w-full rounded-sm opacity-20', titleWidth)} />
        </div>
        {!isFirst && (
          <div className="flex h-3 items-center">
            <div className={cn('bg-text-quaternary h-1.5 w-full rounded-sm opacity-20', releaseNotesWidth)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Item);
