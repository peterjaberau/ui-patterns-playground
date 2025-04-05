import { memo, useCallback } from 'react';
import { RiAddLine } from '@remixicon/react';

import { useAvailableBlocks, useNodesInteractions, useNodesReadOnly } from '../../hooks';
import type { LoopNodeType } from './types';
import cn from '@utils/classnames';
import BlockSelector from '@workflow/block-selector';

import type { OnSelectBlock } from '@workflow/types';
import { BlockEnum } from '@workflow/types';

type AddBlockProps = {
  loopNodeId: string;
  loopNodeData: LoopNodeType;
};
const AddBlock = ({ loopNodeData }: AddBlockProps) => {
  const { nodesReadOnly } = useNodesReadOnly();
  const { handleNodeAdd } = useNodesInteractions();
  const { availableNextBlocks } = useAvailableBlocks(BlockEnum.Start, false, true);

  const handleSelect = useCallback<OnSelectBlock>(
    (type, toolDefaultValue) => {
      handleNodeAdd(
        {
          nodeType: type,
          toolDefaultValue,
        },
        {
          prevNodeId: loopNodeData.start_node_id,
          prevNodeSourceHandle: 'source',
        },
      );
    },
    [handleNodeAdd, loopNodeData.start_node_id],
  );

  const renderTriggerElement = useCallback(
    (open: boolean) => {
      return (
        <div
          className={cn(
            'shadow-xs relative inline-flex h-8 cursor-pointer items-center rounded-lg border-[0.5px] border-gray-50 bg-white px-3 text-[13px] font-medium text-gray-700 hover:bg-gray-200',
            `${nodesReadOnly && '!cursor-not-allowed opacity-50'}`,
            open && '!bg-gray-50',
          )}
        >
          <RiAddLine className="mr-1 h-4 w-4" />
          {t('workflow.common.addBlock')}
        </div>
      );
    },
    [nodesReadOnly, t],
  );

  return (
    <div className="absolute left-14 top-7 z-10 flex h-8 items-center">
      <div className="group/insert relative h-0.5 w-16 bg-gray-300">
        <div className="bg-primary-500 absolute right-0 top-1/2 h-2 w-0.5 -translate-y-1/2"></div>
      </div>
      <BlockSelector
        disabled={nodesReadOnly}
        onSelect={handleSelect}
        trigger={renderTriggerElement}
        triggerInnerClassName="inline-flex"
        popupClassName="!min-w-[256px]"
        availableBlocksTypes={availableNextBlocks}
      />
    </div>
  );
};

export default memo(AddBlock);
