'use client';

import { Skeleton } from '@codefast/ui';
import { XyflowGeneral } from './components';
import { useFlowById } from './loader';

export const XyFlow = () => {
  const { flow, isLoading, isError, error } = useFlowById('id-default');

  if (isLoading || !flow) {
    return (
      <div className="grid grow gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (isError) {
    throw error;
  }

  return (
    <div className="flex w-full flex-col gap-y-3">
      <div className="flex w-full grid-cols-4 flex-col items-start gap-x-4 gap-y-3">
        <div className="col-span-3 flex w-full min-w-0 flex-col gap-y-3">
          <XyflowGeneral flow={flow} />
        </div>
        <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3"></div>
      </div>
    </div>
  );
};
