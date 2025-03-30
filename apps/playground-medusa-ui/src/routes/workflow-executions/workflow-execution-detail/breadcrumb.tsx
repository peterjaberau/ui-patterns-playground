import { HttpTypes } from '@medusajs/types';
// import { UIMatch } from "react-router-dom"
import { useParams } from 'next/navigation';

import { useWorkflowExecution } from './_mock_';

type WorkflowExecutionDetailBreadcrumbProps = {
  data: HttpTypes.AdminWorkflowExecutionResponse | any;
};

export const WorkflowExecutionDetailBreadcrumb = (props: WorkflowExecutionDetailBreadcrumbProps) => {
  // const { id } = props.params || {}

  const params = useParams();
  const id = params?.id as string | undefined;

  const { workflow_execution } = useWorkflowExecution(id!, {
    initialData: props.data,
    enabled: Boolean(id),
  });

  if (!workflow_execution) {
    return null;
  }

  const cleanId = workflow_execution.id.replace('wf_exec_', '');

  return <span>{cleanId}</span>;
};
