import React from 'react';
import { WorkflowDiagramArrow } from '../Arrow';
import { WorkflowStepUi } from '../../../../types';

export type WorkflowDiagramLineProps = {
  step: WorkflowStepUi[];
};

export const WorkflowDiagramLine = ({ step }: WorkflowDiagramLineProps) => {
  if (!step) {
    return <></>;
  }

  return (
    <div className="-mr-[7px] ml-0 w-[60px] pr-[7px]">
      <div className="flex min-h-[24px] w-full items-start">
        <div className="h-docs_1.5 flex w-[10px] items-center justify-center">
          <div className="bg-medusa-button-neutral shadow-borders-base size-[10px] shrink-0 rounded-full" />
        </div>
        <div className="pt-[6px]">
          <WorkflowDiagramArrow depth={step.length} />
        </div>
      </div>
    </div>
  );
};
