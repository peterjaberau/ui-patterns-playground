'use client';

import { Skeleton } from '@codefast/ui';
import WorkflowComponent from './workflow';

import { useFlowById } from './loader';
// import WorkflowProvider from './-provider';

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
          <div className="flex h-[800px] justify-center p-4">
            <WorkflowComponent />
          </div>

          {/* <div className="flex h-[800px] justify-center p-4"> */}
          {/*   <WorkflowProvider /> */}
          {/* </div> */}

          {/* <div className="flex h-[800px] justify-center p-4"> */}
          {/*   <WorkflowProvider /> */}
          {/* </div> */}
        </div>
        <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3"></div>
      </div>
    </div>
  );
};
