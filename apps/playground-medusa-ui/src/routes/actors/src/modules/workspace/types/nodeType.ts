import { ActorRefFrom, AnyStateMachine } from 'xstate';

export type XYCoords = {
  x: number;
  y: number;
};

export type NodeOptions = {
  id: string;
  initialCoords: XYCoords;
};

export interface NodeContext {
  coords: XYCoords;
  incomingNodes: Array<string>;
  outgoingNodes: Array<string>;
}

export type Nodes = {
  tasks: Array<{
    ref: ActorRefFrom<AnyStateMachine>;
  }>;
  ai: Array<{
    ref: ActorRefFrom<AnyStateMachine>;
  }>;
};
