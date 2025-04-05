'use client';

import type { FC } from 'react';
import { memo } from 'react';

import { RiArrowLeftLine } from '@remixicon/react';
import TracingPanel from '../tracing-panel';
import type { NodeTracing } from '@workflow-app/types/workflow';

type Props = {
  list: NodeTracing[];
  onBack: () => void;
};

const RetryResultPanel: FC<Props> = ({ list, onBack }) => {
  return (
    <div>
      <div
        className="system-sm-medium bg-components-panel-bg text-text-accent-secondary flex h-8 cursor-pointer items-center px-4"
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          onBack();
        }}
      >
        <RiArrowLeftLine className="mr-1 h-4 w-4" />
        {'Back'}
      </div>
      <TracingPanel
        list={list.map((item, index) => ({
          ...item,
          title: `Retry ${index + 1}`,
        }))}
        className="bg-background-section-burn"
      />
    </div>
  );
};
export default memo(RetryResultPanel);
