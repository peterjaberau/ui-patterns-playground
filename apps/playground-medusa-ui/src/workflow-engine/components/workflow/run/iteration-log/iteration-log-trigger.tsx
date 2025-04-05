import { RiArrowRightSLine } from '@remixicon/react';
import Button from '@base/button';
import type { IterationDurationMap, NodeTracing } from '@workflow-app/types/workflow';
import { Iteration } from '@base/icons/src/vender/workflow';

type IterationLogTriggerProps = {
  nodeInfo: NodeTracing;
  onShowIterationResultList: (
    iterationResultList: NodeTracing[][],
    iterationResultDurationMap: IterationDurationMap,
  ) => void;
};
const IterationLogTrigger = ({ nodeInfo, onShowIterationResultList }: IterationLogTriggerProps) => {
  const getErrorCount = (details: NodeTracing[][] | undefined) => {
    if (!details || details.length === 0) return 0;

    return details.reduce((acc, iteration) => {
      if (iteration.some((item) => item.status === 'failed')) acc++;
      return acc;
    }, 0);
  };
  const getCount = (iteration_curr_length: number | undefined, iteration_length: number) => {
    if ((iteration_curr_length && iteration_curr_length < iteration_length) || !iteration_length)
      return iteration_curr_length;

    return iteration_length;
  };
  const handleOnShowIterationDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onShowIterationResultList(
      nodeInfo.details || [],
      nodeInfo?.iterDurationMap || nodeInfo.execution_metadata?.iteration_duration_map || {},
    );
  };
  return (
    <Button
      className="bg-components-button-tertiary-bg-hover hover:bg-components-button-tertiary-bg-hover flex w-full cursor-pointer items-center gap-2 self-stretch rounded-lg border-none px-3 py-2"
      onClick={handleOnShowIterationDetail}
    >
      <Iteration className="text-components-button-tertiary-text h-4 w-4 shrink-0" />
      <div className="system-sm-medium text-components-button-tertiary-text flex-1 text-left">
        {`Iteration count: ${getCount(nodeInfo.details?.length, nodeInfo.metadata?.iterator_length)}`}
        {getErrorCount(nodeInfo.details) > 0 && <>{`Iteration Errors: ${getErrorCount(nodeInfo.details)}`}</>}
      </div>
      <RiArrowRightSLine className="text-components-button-tertiary-text h-4 w-4 shrink-0" />
    </Button>
  );
};

export default IterationLogTrigger;
