'use client';
import { SingleColumnPageSkeleton } from '@/components/common/skeleton';
import { SingleColumnPage } from '@/components/layout/pages';
import { workflowExecutionLoader } from './loader';
import { WorkflowExecutionGeneralSection } from './components/workflow-execution-general-section';
import { WorkflowExecutionHistorySection } from './components/workflow-execution-history-section';
import { WorkflowExecutionPayloadSection } from './components/workflow-execution-payload-section';
import { WorkflowExecutionTimelineSection } from './components/workflow-execution-timeline-section';
import { useState } from 'react';

export const ExecutionDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [workflow_execution, setWorkflowExecution] = useState(workflowExecutionLoader());

  if (isLoading || !workflow_execution) {
    return <SingleColumnPageSkeleton sections={4} showJSON />;
  }

  if (isError) {
    throw error;
  }

  return (
    <SingleColumnPage
      widgets={{
        after: [],
        before: [],
      }}
      data={workflow_execution}
      showJSON
    >
      <WorkflowExecutionGeneralSection execution={workflow_execution} />
      <WorkflowExecutionTimelineSection execution={workflow_execution} />
      <WorkflowExecutionPayloadSection execution={workflow_execution} />
      <WorkflowExecutionHistorySection execution={workflow_execution} />
    </SingleColumnPage>
  );
};
