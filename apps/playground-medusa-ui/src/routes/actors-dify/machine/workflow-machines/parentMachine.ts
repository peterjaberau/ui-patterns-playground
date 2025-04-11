// parentMachine.ts
import { setup, assign, spawn } from 'xstate';
import { createWorkflowActor } from './workflowActor';
import { WorkflowEvents } from './workflowMachine';
import { ActorRefFrom } from 'xstate';

type WorkflowId = string;

interface ParentContext {
  workflows: Record<WorkflowId, ActorRefFrom<ReturnType<typeof createWorkflowActor>>>;
}

type ParentEvents =
  | { type: 'SPAWN_WORKFLOW'; id: WorkflowId }
  | { type: 'SEND_TO_WORKFLOW'; id: WorkflowId; event: WorkflowEvents }
  | { type: 'REMOVE_WORKFLOW'; id: WorkflowId }
  | { type: 'SELECTION_UPDATED'; selection: any; origin: WorkflowId };

export const parentMachine = setup({
  types: {
    context: {} as ParentContext,
    events: {} as ParentEvents,
  },
  actions: {
    spawnWorkflow: assign({
      workflows: ({ context, event }) => {
        const id = (event as any).id as WorkflowId;
        if (context.workflows[id]) return context.workflows; // avoid double-spawn

        return {
          ...context.workflows,
          [id]: spawn(createWorkflowActor(), { id }),
        };
      },
    }),
    sendToWorkflow: ({ context, event }) => {
      const ref = context.workflows[event.id];
      if (ref) ref.send(event.event);
    },
    removeWorkflow: assign({
      workflows: ({ context, event }) => {
        const id = (event as any).id;
        const ref = context.workflows[id];
        if (ref) ref.stop();
        const { [id]: _, ...rest } = context.workflows;
        return rest;
      },
    }),
    syncSelection: ({ context, event }) => {
      const { selection, origin } = event as any;
      Object.entries(context.workflows).forEach(([id, ref]) => {
        if (id !== origin) {
          ref.send({ type: 'SET_SELECTION', value: selection });
        }
      });
    },
  },
}).createMachine({
  id: 'parent',
  context: {
    workflows: {},
  },
  on: {
    SPAWN_WORKFLOW: { actions: 'spawnWorkflow' },
    SEND_TO_WORKFLOW: { actions: 'sendToWorkflow' },
    REMOVE_WORKFLOW: { actions: 'removeWorkflow' },
    SELECTION_UPDATED: { actions: 'syncSelection' },
  },
});
