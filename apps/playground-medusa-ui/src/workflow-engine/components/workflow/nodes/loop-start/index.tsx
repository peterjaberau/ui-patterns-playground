import { memo } from 'react';

import type { NodeProps } from 'reactflow';
import { RiHome5Fill } from '@remixicon/react';
import Tooltip from '@base/tooltip';
import { NodeSourceHandle } from '@workflow/nodes/_base/components/node-handle';

const LoopStartNode = ({ id, data }: NodeProps) => {
  return (
    <div className="nodrag border-workflow-block-border group mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border bg-white">
      <Tooltip popupContent={t('workflow.blocks.loop-start')} asChild={false}>
        <div className="border-components-panel-border-subtle bg-util-colors-blue-brand-blue-brand-500 flex h-6 w-6 items-center justify-center rounded-full border-[0.5px]">
          <RiHome5Fill className="text-text-primary-on-surface h-3 w-3" />
        </div>
      </Tooltip>
      <NodeSourceHandle
        id={id}
        data={data}
        handleClassName="!top-1/2 !-right-[9px] !-translate-y-1/2"
        handleId="source"
      />
    </div>
  );
};

export const LoopStartNodeDumb = () => {
  return (
    <div className="nodrag border-workflow-block-border relative left-[17px] top-[21px] z-[11] flex h-11 w-11 items-center justify-center rounded-2xl border bg-white">
      <Tooltip popupContent={t('workflow.blocks.loop-start')} asChild={false}>
        <div className="border-components-panel-border-subtle bg-util-colors-blue-brand-blue-brand-500 flex h-6 w-6 items-center justify-center rounded-full border-[0.5px]">
          <RiHome5Fill className="text-text-primary-on-surface h-3 w-3" />
        </div>
      </Tooltip>
    </div>
  );
};

export default memo(LoopStartNode);
