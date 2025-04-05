import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { RiAlertFill, RiCheckboxCircleFill, RiErrorWarningFill, RiLoader2Line } from '@remixicon/react';
import { NodeTargetHandle } from '@workflow/nodes/_base/components/node-handle';
import NodeControl from '@workflow/nodes/_base/components/node-control';
import cn from '@utils/classnames';
import BlockIcon from '@workflow/block-icon';
import type { NodeProps } from '@workflow/types';
import { NodeRunningStatus } from '@workflow/types';
import { useNodesReadOnly } from '@workflow/hooks';

type SimpleNodeProps = NodeProps;

const SimpleNode: FC<SimpleNodeProps> = ({ id, data }) => {
  const { nodesReadOnly } = useNodesReadOnly();

  const showSelectedBorder = data.selected || data._isBundled || data._isEntering;
  const { showRunningBorder, showSuccessBorder, showFailedBorder, showExceptionBorder } = useMemo(() => {
    return {
      showRunningBorder: data._runningStatus === NodeRunningStatus.Running && !showSelectedBorder,
      showSuccessBorder: data._runningStatus === NodeRunningStatus.Succeeded && !showSelectedBorder,
      showFailedBorder: data._runningStatus === NodeRunningStatus.Failed && !showSelectedBorder,
      showExceptionBorder: data._runningStatus === NodeRunningStatus.Exception && !showSelectedBorder,
    };
  }, [data._runningStatus, showSelectedBorder]);

  return (
    <div
      className={cn(
        'flex rounded-2xl border-[2px]',
        showSelectedBorder ? 'border-components-option-card-option-selected-border' : 'border-transparent',
        !showSelectedBorder && data._inParallelHovering && 'border-workflow-block-border-highlight',
        data._waitingRun && 'opacity-70',
      )}
      style={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <div
        className={cn(
          'shadow-xs group relative pb-1',
          'rounded-[15px] border border-transparent',
          'bg-workflow-block-bg w-[240px]',
          !data._runningStatus && 'hover:shadow-lg',
          showRunningBorder && '!border-state-accent-solid',
          showSuccessBorder && '!border-state-success-solid',
          showFailedBorder && '!border-state-destructive-solid',
          showExceptionBorder && '!border-state-warning-solid',
          data._isBundled && '!shadow-lg',
        )}
      >
        {data._inParallelHovering && (
          <div className="top system-2xs-medium-uppercase text-text-tertiary absolute -top-2.5 left-2 z-10">
            {'Parallel Run'}
          </div>
        )}
        {!data._isCandidate && (
          <NodeTargetHandle
            id={id}
            data={data}
            handleClassName="!top-4 !-left-[9px] !translate-y-0"
            handleId="target"
          />
        )}
        {!data._runningStatus && !nodesReadOnly && !data._isCandidate && <NodeControl id={id} data={data} />}
        <div className={cn('flex items-center rounded-t-2xl px-3 pb-2 pt-3')}>
          <BlockIcon className="mr-2 shrink-0" type={data.type} size="md" />
          <div
            title={data.title}
            className="system-sm-semibold-uppercase text-text-primary mr-1 flex grow items-center truncate"
          >
            <div>{data.title}</div>
          </div>
          {(data._runningStatus === NodeRunningStatus.Running ||
            data._singleRunningStatus === NodeRunningStatus.Running) && (
            <RiLoader2Line className="text-text-accent h-3.5 w-3.5 animate-spin" />
          )}
          {data._runningStatus === NodeRunningStatus.Succeeded && (
            <RiCheckboxCircleFill className="text-text-success h-3.5 w-3.5" />
          )}
          {data._runningStatus === NodeRunningStatus.Failed && (
            <RiErrorWarningFill className="text-text-destructive h-3.5 w-3.5" />
          )}
          {data._runningStatus === NodeRunningStatus.Exception && (
            <RiAlertFill className="text-text-warning-secondary h-3.5 w-3.5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(SimpleNode);
