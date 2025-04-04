import { RiCheckLine } from '@remixicon/react';
import React, { type FC } from 'react';
import type { WorkflowVersionFilterOptions } from '../../../types';

type FilterItemProps = {
  item: {
    key: WorkflowVersionFilterOptions;
    name: string;
  };
  isSelected?: boolean;
  onClick: (value: WorkflowVersionFilterOptions) => void;
};

const FilterItem: FC<FilterItemProps> = ({ item, isSelected = false, onClick }) => {
  return (
    <div
      className="hover:bg-state-base-hover flex cursor-pointer items-center justify-between gap-x-1 rounded-lg px-2 py-1.5"
      onClick={() => {
        onClick(item.key);
      }}
    >
      <div className="system-md-regular text-text-primary flex-1">{item.name}</div>
      {isSelected && <RiCheckLine className="text-text-accent h-4 w-4 shrink-0" />}
    </div>
  );
};

export default React.memo(FilterItem);
