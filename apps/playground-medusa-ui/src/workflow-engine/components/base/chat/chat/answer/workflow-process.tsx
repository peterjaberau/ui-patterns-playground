import { useEffect, useState } from 'react';
import { RiArrowRightSLine, RiErrorWarningFill, RiLoader2Line } from '@remixicon/react';

import type { ChatItem, WorkflowProcess } from '../../types';
import TracingPanel from '@workflow/run/tracing-panel';
import cn from '@utils/classnames';
import { CheckCircle } from '@base/icons/src/vender/solid/general';
import { WorkflowRunningStatus } from '@workflow/types';

type WorkflowProcessProps = {
  data: WorkflowProcess;
  item?: ChatItem;
  expand?: boolean;
  hideInfo?: boolean;
  hideProcessDetail?: boolean;
  readonly?: boolean;
};
const WorkflowProcessItem = ({
  data,
  expand = false,
  hideInfo = false,
  hideProcessDetail = false,
  readonly = false,
}: WorkflowProcessProps) => {
  const [collapse, setCollapse] = useState(!expand);
  const running = data.status === WorkflowRunningStatus.Running;
  const succeeded = data.status === WorkflowRunningStatus.Succeeded;
  const failed = data.status === WorkflowRunningStatus.Failed || data.status === WorkflowRunningStatus.Stopped;

  useEffect(() => {
    setCollapse(!expand);
  }, [expand]);

  return (
    <div
      className={cn(
        '-mx-1 rounded-xl px-2.5',
        collapse
          ? 'border-components-panel-border border-l-[0.25px] py-[7px]'
          : 'border-components-panel-border-subtle border-[0.5px] px-1 pb-1 pt-[7px]',
        running && !collapse && 'bg-background-section-burn',
        succeeded && !collapse && 'bg-state-success-hover',
        failed && !collapse && 'bg-state-destructive-hover',
        collapse && 'bg-workflow-process-bg',
      )}
    >
      <div
        className={cn('flex cursor-pointer items-center', !collapse && 'px-1.5', readonly && 'cursor-default')}
        onClick={() => !readonly && setCollapse(!collapse)}
      >
        {running && <RiLoader2Line className="text-text-tertiary mr-1 h-3.5 w-3.5 shrink-0 animate-spin" />}
        {succeeded && <CheckCircle className="text-text-success mr-1 h-3.5 w-3.5 shrink-0" />}
        {failed && <RiErrorWarningFill className="text-text-destructive mr-1 h-3.5 w-3.5 shrink-0" />}
        <div className={cn('system-xs-medium text-text-secondary', !collapse && 'grow')}>{'Workflow Process'}</div>
        {!readonly && <RiArrowRightSLine className={cn('text-text-tertiary ml-1 h-4 w-4', !collapse && 'rotate-90')} />}
      </div>
      {!collapse && !readonly && (
        <div className="mt-1.5">
          {<TracingPanel list={data.tracing} hideNodeInfo={hideInfo} hideNodeProcessDetail={hideProcessDetail} />}
        </div>
      )}
    </div>
  );
};

export default WorkflowProcessItem;
