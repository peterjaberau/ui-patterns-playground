import { ActorRefFrom, assertEvent, assign, enqueueActions, fromPromise, sendParent, setup, stopChild } from 'xstate';
import { create } from 'mutative';
import set from 'set-value';

export const workflowMachine = setup({
  types: {
    events: {} as any,
    context: {} as any,
  } as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  id: 'workflow',
  initial: 'idle',
  context: {
    nodes: [],
    edges: [],
    viewport: {},
  },
});
