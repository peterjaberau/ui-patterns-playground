import { JOB_TYPES, Nodes, TaskInstructions, TomlLine } from '@/routes/actors/src/modules/workspace/workspaceMachine';
import { ActorRefFrom, AnyStateMachine } from 'xstate';
import { NodeOptions, XYCoords } from './nodeType';
import { TASK_TYPE, TaskNodeOptions } from './nodeTaskType
import { JOB_TYPE } from '../constants';
import {
  CustomEdge,
  NEW_NODE_TYPE,
  WorkspaceContext,
} from './workspaceMachine';
import { Edge, OnConnectStartParams, ReactFlowInstance } from 'reactflow';

export type CustomEdge = Edge & { sourceCustomId: string; targetCustomId: string };
export type NEW_NODE_TYPE = 'source' | 'target';

export type Edges = Array<CustomEdge>;

export type WorkspaceEvent =
  | {
      type: 'SET_REACT_FLOW_INSTANCE';
      value: ReactFlowInstance;
    }
  | {
      type: 'ADD_TASK_NODE';
      options: TaskNodeOptions;
      edgeDetails: {
        newNodeType: NEW_NODE_TYPE;
        fromHandleId: string;
        fromNodeId: string;
      };
    }
  | { type: 'DELETE_NODE'; nodeId: string }
  | {
      type: 'REPLACE_TASK_NODE';
      nodeId: string;
      newType: TASK_TYPE;
      existing: {
        coords: XYCoords;
        customId: string;
        incomingNodes: Array<string>;
        outgoingNodes: Array<string>;
      };
    }
  | { type: 'UPDATE_EDGES_WITH_NODE_ID'; nodeId: string; prevNodeId: string }
  | { type: 'SET_JOB_TYPE'; value: JOB_TYPE }
  | { type: 'SET_NAME'; value: string }
  | { type: 'SET_EXTERNAL_JOB_ID'; value: string }
  | { type: 'SET_GAS_LIMIT'; value: string }
  | { type: 'SET_MAX_TASK_DURATION'; value: string }
  | { type: 'SET_FORWARDING_ALLOWED'; value: string }
  | {
      type: 'SET_JOB_TYPE_SPECIFIC_PROPS';
      jobType: JOB_TYPE;
      prop: string;
      value?: string;
      valid?: boolean;
    }
  | {
      type: 'SET_JOB_TYPE_SPECIFIC_VARIABLES';
      jobType: JOB_TYPE;
      variable: string;
      value?: string;
      values?: Array<string>;
      valid?: boolean;
    }
  | { type: 'CONNECTION_START'; params: OnConnectStartParams }
  | { type: 'CONNECTION_END' }
  | { type: 'CONNECTION_SUCCESS'; initialCoords: XYCoords }
  | { type: 'TOGGLE_TEST_MODE' }
  | { type: 'STORE_TASK_RUN_RESULT'; nodeId: string; value: any }
  | { type: 'ADD_NEW_EDGE'; newEdge: Omit<CustomEdge, 'id'> }
  | { type: 'REGENERATE_TOML' }
  | { type: 'SIMULATOR_PREV_TASK' }
  | { type: 'TRY_RUN_CURRENT_TASK' }
  | { type: 'SIMULATOR_NEXT_TASK' }
  | { type: 'SIMULATOR_PROMPT_SIDE_EFFECT' }
  | { type: 'PERSIST_STATE' }
  | { type: 'RESTORE_STATE'; savedContext: WorkspaceContext }
  | { type: 'TRY_RUN_CURRENT_SIDE_EFFECT' }
  | { type: 'SKIP_CURRENT_SIDE_EFFECT' }
  | { type: 'SAVE_JOB_SPEC_VERSION' }
  | { type: 'OPEN_MODAL'; name: ModalName }
  | { type: 'CLOSE_MODAL'; data: { name: ModalName } }
  | { type: 'IMPORT_SPEC'; content: string }
  | { type: 'TOGGLE_AI_WAND' }
  | {
      type: 'ADD_AI_PROMPT_NODE';
      options: NodeOptions;
      edgeDetails: {
        newNodeType: NEW_NODE_TYPE;
        fromHandleId: string;
        fromNodeId: string;
      };
    }
  | {
      type: 'HANDLE_AI_PROMPT_COMPLETION';
      value: string;
      parentNodes: Array<string>;
      childNodes: Array<string>;
      aiNodeId: string;
    };


export interface WorkspaceContext {
  reactFlowInstance: ReactFlowInstance | null;
  type: JOB_TYPE;
  name: string;
  externalJobId: string;
  gasLimit: string;
  maxTaskDuration: string;
  forwardingAllowed: boolean;
  edges: Edges;
  nodes: Nodes;
  jobTypeSpecific: JobTypeFieldMap;
  jobTypeVariables: JobTypeVarFieldMap;
  totalNodesAdded: number;
  totalEdgesAdded: number;
  isConnecting: boolean;
  connectionParams: OnConnectStartParams;
  taskRunResults: TaskRunResult[];
  toml: Array<TomlLine>;
  parsedTaskOrder: Array<TaskInstructions>;
  parsingError: string;
  currentTaskIndex: number;
  jobLevelVars64?: string;
  provider: ReturnType<typeof getProvider>;
  // Would use a Set for openModals but changes aren't detected in consumers
  openModals: Array<ModalName>;
}

type ModalName = 'import';

type JobTypeFieldMap = { [key in JOB_TYPE]: { [key: string]: Field } };

type Field = {
  value: string;
  valid: boolean;
};

type JobTypeVarFieldMap = {
  [key in JOB_TYPE]: { [key: string]: JobLevelVarField };
};

type JobLevelVarField = {
  value?: string;
  values?: Array<string>;
  valid: boolean;
  type: DATA_TYPES;
  fromType?: 'hex' | 'string';
};

type TaskRunResult = {
  id: string;
  result: Result;
};

type Result = {
  value: string;
  error: string;
  val64: string;
  vars64: string;
  vars: { [key: string]: any };
};

export type Nodes = {
  tasks: Array<{
    ref: ActorRefFrom<AnyStateMachine>;
  }>;
  ai: Array<{
    ref: ActorRefFrom<AnyStateMachine>;
  }>;
};

export type TomlLine = {
  value: string;
  valid?: boolean;
  isObservationSrc?: boolean;
};

export type JOB_TYPE = (typeof JOB_TYPES)[number];

type DATA_TYPES = (typeof dataTypes)[number];
