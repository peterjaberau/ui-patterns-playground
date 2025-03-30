'use client';

import React from 'react';
import { createNodeClusters, getNextCluster } from '../../../utils';
import { WorkflowDiagramCommonProps } from '../../';
import { WorkflowDiagramListDepth } from './Depth';
import { WorkflowDiagramLegend } from '../Common/Legend';

export const WorkflowDiagramList = ({ workflow, hideLegend = false }: WorkflowDiagramCommonProps) => {
  const clusters = createNodeClusters(workflow.steps);

  return (
    <div className="gap-docs_0.5 my-docs_1 workflow-list-diagram flex w-fit flex-col">
      {Object.entries(clusters).map(([depth, cluster]) => {
        const next = getNextCluster(clusters, Number(depth));

        return <WorkflowDiagramListDepth cluster={cluster} next={next} key={depth} />;
      })}
      <WorkflowDiagramLegend hideLegend={hideLegend} />
    </div>
  );
};
