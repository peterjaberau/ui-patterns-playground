import { NodeContext, XYCoords } from './nodeType';
import { TomlLine } from '@/routes/actors/src/modules/workspace/workspaceMachine';

export type AiNodeEvent =
  | { type: 'ADD_INCOMING_NODE'; nodeId: string }
  | { type: 'ADD_OUTGOING_NODE'; nodeId: string }
  | { type: 'UPDATE_INCOMING_NODE'; nodeId: string; prevNodeId: string }
  | { type: 'UPDATE_OUTGOING_NODE'; nodeId: string; prevNodeId: string }
  | { type: 'REMOVE_INCOMING_NODE'; nodeId: string }
  | { type: 'REMOVE_OUTGOING_NODE'; nodeId: string }
  | { type: 'UPDATE_COORDS'; value: XYCoords }
  | { type: 'SET_PROMPT'; value: string }
  | { type: 'PROCESS_PROMPT'; toml: Array<TomlLine> };

export interface AiNodeContext extends NodeContext {
  id: string;
  prompt: string;
  promptResult: any;
}
