'use client';

import React from 'react';
import { WorkflowStepUi } from '../../../../types';
import { WorkflowDiagramStepNode } from '../../Common/Node';
import { WorkflowDiagramLine } from '../../Common/Line';

export type WorkflowDiagramListDepthProps = {
  cluster: WorkflowStepUi[];
  next: WorkflowStepUi[];
};

export const WorkflowDiagramListDepth = ({ cluster }: WorkflowDiagramListDepthProps) => {
  return (
    <div className="workflow-node-group flex w-fit items-start">
      <WorkflowDiagramLine step={cluster} />
      <div className="gap-y-docs_0.5 flex flex-col justify-center">
        {cluster.map((step, index) => (
          <WorkflowDiagramStepNode key={`${step.name}-${index}`} step={step} />
        ))}
      </div>
    </div>
  );
};
