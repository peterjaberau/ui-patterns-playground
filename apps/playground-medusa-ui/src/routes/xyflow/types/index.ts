import type { Edge as ReactFlowEdge, Node as ReactFlowNodeType, Viewport } from '@xyflow/react';
import type { ToolDefaultValueType } from './workflow.types';

import type { FileResponseType, NodeTracingType } from './app-workflow.type';
import type { CollectionType, ToolType } from './tools.type';

import type { ResolutionEnum, TransferMethodEnum } from '../helpers/constants/app.constants';
import {
  VarTypeEnum as VarKindType,
  ChatVarTypeEnum,
  ErrorHandleTypeEnum,
  BlockEnum,
  NodeRunningStatusEnum,
  InputVarTypeEnum,
  PromptRoleEnum,
  EditionTypeEnum,
  ValueTypeEnum,
  ChangeTypeEnum,
  SupportUploadFileTypesEnum,
} from '../helpers/constants/workflow.constants';

import type { DefaultValueFormType, WorkflowRetryConfigType, StructuredOutputType } from './tools.type';

export type BranchType = {
  id: string;
  name: string;
};

export type CommonNodeType<T = {}> = {
  _connectedSourceHandleIds?: string[];
  _connectedTargetHandleIds?: string[];
  _targetBranches?: BranchType[];
  _isSingleRun?: boolean;
  _runningStatus?: NodeRunningStatusEnum;
  _runningBranchId?: string;
  _singleRunningStatus?: NodeRunningStatusEnum;
  _isCandidate?: boolean;
  _isBundled?: boolean;
  _children?: { nodeId: string; nodeType: BlockEnum }[];
  _isEntering?: boolean;
  _showAddVariablePopup?: boolean;
  _holdAddVariablePopup?: boolean;
  _iterationLength?: number;
  _iterationIndex?: number;
  _inParallelHovering?: boolean;
  _waitingRun?: boolean;
  _retryIndex?: number;
  isInIteration?: boolean;
  iteration_id?: string;
  selected?: boolean;
  title: string;
  desc: string;
  type: BlockEnum;
  width?: number;
  height?: number;
  _loopLength?: number;
  _loopIndex?: number;
  isInLoop?: boolean;
  loop_id?: string;
  error_strategy?: ErrorHandleTypeEnum;
  retry_config?: WorkflowRetryConfigType;
  default_value?: DefaultValueFormType[];
} & T &
  Partial<Pick<ToolDefaultValueType, 'provider_id' | 'provider_type' | 'provider_name' | 'tool_name'>>;

export type CommonEdgeType = {
  _hovering?: boolean;
  _connectedNodeIsHovering?: boolean;
  _connectedNodeIsSelected?: boolean;
  _isBundled?: boolean;
  _sourceRunningStatus?: NodeRunningStatusEnum;
  _targetRunningStatus?: NodeRunningStatusEnum;
  _waitingRun?: boolean;
  isInIteration?: boolean;
  iteration_id?: string;
  isInLoop?: boolean;
  loop_id?: string;
  sourceType: BlockEnum;
  targetType: BlockEnum;
};

export type NodeType<T = {}> = ReactFlowNodeType<CommonNodeType<T>>;
export type SelectedNodeType = Pick<NodeType, 'id' | 'data'>;
export type NodeProps<T = unknown> = { id: string; data: CommonNodeType<T> };
export type NodePanelProps<T> = {
  id: string;
  data: CommonNodeType<T>;
};
export type EdgeType = ReactFlowEdge<CommonEdgeType>;

export type WorkflowDataUpdaterType = {
  nodes: Node[];
  edges: EdgeType[];
  viewport: Viewport;
};

export type ValueSelectorType = string[]; // [nodeId, key | obj key path]

export type VariableType = {
  variable: string;
  label?:
    | string
    | {
        nodeType: BlockEnum;
        nodeName: string;
        variable: string;
      };
  value_selector: ValueSelectorType;
  variable_type?: VarKindType;
  value?: string;
  options?: string[];
  required?: boolean;
  isParagraph?: boolean;
};

export type EnvironmentVariableType = {
  id: string;
  name: string;
  value: any;
  value_type: 'string' | 'number' | 'secret';
};

export type ConversationVariableType = {
  id: string;
  name: string;
  value_type: ChatVarTypeEnum;
  value: any;
  description: string;
};

export type GlobalVariableType = {
  name: string;
  value_type: 'string' | 'number';
  description: string;
};

export type VariableWithValueType = {
  key: string;
  value: string;
};

export type InputVarType = {
  type: InputVarTypeEnum;
  label:
    | string
    | {
        nodeType: BlockEnum;
        nodeName: string;
        variable: string;
        isChatVar?: boolean;
      };
  variable: string;
  max_length?: number;
  default?: string;
  required: boolean;
  hint?: string;
  options?: string[];
  value_selector?: ValueSelectorType;
} & Partial<UploadFileSettingType>;

export type ModelConfigType = {
  provider: string;
  name: string;
  mode: string;
  completion_params: Record<string, any>;
};

export type PromptItemType = {
  id?: string;
  role?: PromptRoleEnum;
  text: string;
  edition_type?: EditionTypeEnum;
  jinja2_text?: string;
};

export enum MemoryRoleType {
  user = 'user',
  assistant = 'assistant',
}

export type RolePrefixType = {
  user: string;
  assistant: string;
};

export type MemoryType = {
  role_prefix?: RolePrefixType;
  window: {
    enabled: boolean;
    size: number | string | null;
  };
  query_prompt_template: string;
};

export type VarType = {
  variable: string;
  type: VarKindType;
  children?: VarType[] | StructuredOutputType; // if type is obj, has the children struct
  isParagraph?: boolean;
  isSelect?: boolean;
  options?: string[];
  required?: boolean;
  des?: string;
  isException?: boolean;
  isLoopVariable?: boolean;
  nodeId?: string;
};

export type NodeOutPutVarType = {
  nodeId: string;
  title: string;
  vars: VarType[];
  isStartNode?: boolean;
  isLoop?: boolean;
};

export type BlockType = {
  classification?: string;
  type: BlockEnum;
  title: string;
  description?: string;
};

export type NodeDefaultType<T> = {
  defaultValue: Partial<T>;
  getAvailablePrevNodes: (isChatMode: boolean) => BlockEnum[];
  getAvailableNextNodes: (isChatMode: boolean) => BlockEnum[];
  checkValid: (payload: T, t: any, moreDataForCheckValid?: any) => { isValid: boolean; errorMessage?: string };
};

export type OnSelectBlockType = (type: BlockEnum, toolDefaultValue?: ToolDefaultValueType) => void;

export type OnNodeAddType = (
  newNodePayload: {
    nodeType: BlockEnum;
    sourceHandle?: string;
    targetHandle?: string;
    toolDefaultValue?: ToolDefaultValueType;
  },
  oldNodesPayload: {
    prevNodeId?: string;
    prevNodeSourceHandle?: string;
    nextNodeId?: string;
    nextNodeTargetHandle?: string;
  },
) => void;

export type CheckValidResType = {
  isValid: boolean;
  errorMessage?: string;
};

export type RunFileType = {
  type: string;
  transfer_method: TransferMethodEnum[];
  url?: string;
  upload_file_id?: string;
  related_id?: string;
};

export type WorkflowRunningDataType = {
  task_id?: string;
  message_id?: string;
  conversation_id?: string;
  result: {
    sequence_number?: number;
    workflow_id?: string;
    inputs?: string;
    process_data?: string;
    outputs?: string;
    status: string;
    error?: string;
    elapsed_time?: number;
    total_tokens?: number;
    created_at?: number;
    created_by?: string;
    finished_at?: number;
    steps?: number;
    showSteps?: boolean;
    total_steps?: number;
    files?: FileResponseType[];
    exceptions_count?: number;
  };
  tracing?: NodeTracingType[];
};

export type HistoryWorkflowDataType = {
  id: string;
  sequence_number: number;
  status: string;
  conversation_id?: string;
};

export type MoreInfoType = {
  type: ChangeTypeEnum;
  payload?: {
    beforeKey: string;
    afterKey?: string;
  };
};

export type ToolWithProviderType = CollectionType & {
  tools: ToolType[];
};

export type UploadFileSettingType = {
  allowed_file_upload_methods: TransferMethodEnum[];
  allowed_file_types: SupportUploadFileTypesEnum[];
  allowed_file_extensions?: string[];
  max_length: number;
  number_limits?: number;
};

export type VisionSettingType = {
  variable_selector: ValueSelectorType;
  detail: ResolutionEnum;
};
