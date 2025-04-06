import type { Viewport } from 'reactflow';
import type { ConversationVariable, Edge, EnvironmentVariable, Node } from './index';
import type { TransferMethodEnum } from '../helpers/constants/app.constants';
import type { ErrorHandleTypeEnum, BlockEnum } from '../helpers/constants/workflow.constants';

export type AgentLogItemType = {
  node_execution_id: string;
  id: string;
  node_id: string;
  parent_id?: string;
  label: string;
  data: object; // debug data
  error?: string;
  status: string;
  metadata?: {
    elapsed_time?: number;
    provider?: string;
    icon?: string;
  };
};

export type AgentLogItemWithChildrenType = AgentLogItemType & {
  hasCircle?: boolean;
  children: AgentLogItemWithChildrenType[];
};

export type NodeTracingType = {
  id: string;
  index: number;
  predecessor_node_id: string;
  node_id: string;
  iteration_id?: string;
  loop_id?: string;
  node_type: BlockEnum;
  title: string;
  inputs: any;
  process_data: any;
  outputs?: any;
  status: string;
  parallel_run_id?: string;
  error?: string;
  elapsed_time: number;
  execution_metadata?: {
    total_tokens: number;
    total_price: number;
    currency: string;
    iteration_id?: string;
    iteration_index?: number;
    loop_id?: string;
    loop_index?: number;
    parallel_id?: string;
    parallel_start_node_id?: string;
    parent_parallel_id?: string;
    parent_parallel_start_node_id?: string;
    parallel_mode_run_id?: string;
    iteration_duration_map?: IterationDurationMapType;
    loop_duration_map?: LoopDurationMapType;
    error_strategy?: ErrorHandleTypeEnum;
    agent_log?: AgentLogItemType[];
    tool_info?: {
      agent_strategy?: string;
      icon?: string;
    };
    loop_variable_map?: Record<string, any>;
  };
  metadata: {
    iterator_length: number;
    iterator_index: number;
    loop_length: number;
    loop_index: number;
  };
  created_at: number;
  created_by: {
    id: string;
    name: string;
    email: string;
  };
  iterDurationMap?: IterationDurationMapType;
  loopDurationMap?: LoopDurationMapType;
  finished_at: number;
  extras?: any;
  expand?: boolean; // for UI
  details?: NodeTracingType[][]; // iteration or loop detail
  retryDetail?: NodeTracingType[]; // retry detail
  retry_index?: number;
  parallelDetail?: {
    // parallel detail. if is in parallel, this field will be set
    isParallelStartNode?: boolean;
    parallelTitle?: string;
    branchTitle?: string;
    children?: NodeTracingType[];
  };
  parallel_id?: string;
  parallel_start_node_id?: string;
  parent_parallel_id?: string;
  parent_parallel_start_node_id?: string;
  agentLog?: AgentLogItemWithChildrenType[]; // agent log
};

export type FetchWorkflowDraftResponse = {
  id: string;
  graph: {
    nodes: Node[];
    edges: Edge[];
    viewport?: Viewport;
  };
  features?: any;
  created_at: number;
  created_by: {
    id: string;
    name: string;
    email: string;
  };
  hash: string;
  updated_at: number;
  updated_by: {
    id: string;
    name: string;
    email: string;
  };
  tool_published: boolean;
  environment_variables?: EnvironmentVariable[];
  conversation_variables?: ConversationVariable[];
  version: string;
  marked_name: string;
  marked_comment: string;
};

export type VersionHistoryType = FetchWorkflowDraftResponse;

export type FetchWorkflowDraftPageParamsType = {
  appId: string;
  initialPage: number;
  limit: number;
  userId?: string;
  namedOnly?: boolean;
};

export type FetchWorkflowDraftPageResponseType = {
  items: VersionHistoryType[];
  has_more: boolean;
  page: number;
};

export type NodeTracingTypeListResponseType = {
  data: NodeTracingType[];
};

export type WorkflowStartedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: {
    id: string;
    workflow_id: string;
    sequence_number: number;
    created_at: number;
  };
};

export type WorkflowFinishedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: {
    id: string;
    workflow_id: string;
    status: string;
    outputs: any;
    error: string;
    elapsed_time: number;
    total_tokens: number;
    total_steps: number;
    created_at: number;
    created_by: {
      id: string;
      name: string;
      email: string;
    };
    finished_at: number;
    files?: FileResponseType[];
  };
};

export type NodeStartedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type FileResponseType = {
  related_id: string;
  extension: string;
  filename: string;
  size: number;
  mime_type: string;
  transfer_method: TransferMethodEnum;
  type: string;
  url: string;
};

export type NodeFinishedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type IterationStartedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type IterationNextResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type IterationFinishedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type LoopStartedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type LoopNextResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type LoopFinishedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type ParallelBranchStartedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type ParallelBranchFinishedResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: NodeTracingType;
};

export type TextChunkResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: {
    text: string;
  };
};

export type TextReplaceResponseType = {
  task_id: string;
  workflow_run_id: string;
  event: string;
  data: {
    text: string;
  };
};

export type AgentLogResponseType = {
  task_id: string;
  event: string;
  data: AgentLogItemWithChildrenType;
};

export type WorkflowRunHistoryType = {
  id: string;
  sequence_number: number;
  version: string;
  conversation_id?: string;
  message_id?: string;
  graph: {
    nodes: Node[];
    edges: Edge[];
    viewport?: Viewport;
  };
  inputs: Record<string, string>;
  status: string;
  outputs: Record<string, any>;
  error?: string;
  elapsed_time: number;
  total_tokens: number;
  total_steps: number;
  created_at: number;
  finished_at: number;
  created_by_account: {
    id: string;
    name: string;
    email: string;
  };
};
export type WorkflowRunHistoryResponseType = {
  data: WorkflowRunHistoryType[];
};

export type ChatRunHistoryResponseType = {
  data: WorkflowRunHistoryType[];
};

export type NodesDefaultConfigsResponseType = {
  type: string;
  config: any;
}[];

export type ConversationVariableResponseType = {
  data: (ConversationVariable & { updated_at: number; created_at: number })[];
  has_more: boolean;
  limit: number;
  total: number;
  page: number;
};

export type IterationDurationMapType = Record<string, number>;
export type LoopDurationMapType = Record<string, number>;
export type LoopVariableMapType = Record<string, any>;

export type WorkflowConfigResponseType = {
  parallel_depth_limit: number;
};

export type PublishWorkflowParamsType = {
  title: string;
  releaseNotes: string;
};

export type UpdateWorkflowParamsType = {
  workflowId: string;
  title: string;
  releaseNotes: string;
};
