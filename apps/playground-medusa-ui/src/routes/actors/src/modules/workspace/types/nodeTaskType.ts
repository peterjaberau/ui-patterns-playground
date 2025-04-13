import { NodeContext, NodeOptions, XYCoords } from './nodeType';
import { tasks } from '../constants';

export type TaskNodeOptions = NodeOptions & {
  taskType: TASK_TYPE;
};

export type TaskNodeEvent =
  | { type: 'ADD_INCOMING_NODE'; nodeId: string }
  | { type: 'ADD_OUTGOING_NODE'; nodeId: string }
  | { type: 'UPDATE_INCOMING_NODE'; nodeId: string; prevNodeId: string }
  | { type: 'UPDATE_OUTGOING_NODE'; nodeId: string; prevNodeId: string }
  | { type: 'REMOVE_INCOMING_NODE'; nodeId: string }
  | { type: 'REMOVE_OUTGOING_NODE'; nodeId: string }
  | { type: 'SET_CUSTOM_ID'; value: string }
  | { type: 'SET_TASK_SPECIFIC_PROPS'; value: object }
  | { type: 'SET_MOCK_RESPONSE'; value: object }
  | { type: 'UPDATE_COORDS'; value: XYCoords }
  | { type: 'SET_PENDING_RUN' }
  | { type: 'TRY_RUN_TASK'; input64s: Array<string>; vars64: string }
  | { type: 'TRY_RUN_SIDE_EFFECT'; provider: any }
  | { type: 'SKIP_SIDE_EFFECT' }
  | { type: 'RESET' };

export type TASK_TYPE = (typeof tasks)[number];

type TaskMock = {
  mockResponseDataInput?: any;
  mockResponseData?: any;
  enabled: boolean;
};

export interface TaskNodeContext extends NodeContext {
  customId?: string;
  taskType: TASK_TYPE;
  taskSpecific: {
    [key: string]: {
      raw: string;
      rich: string;
    };
  };
  mock: TaskMock;
  isValid: boolean;
  runResult: any;
}

export type TaskInstructions = {
  id: string;
  inputs: Array<{
    id: string;
    propagateResult: boolean;
  }>;
};
