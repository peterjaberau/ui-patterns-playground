// useParentMachine.ts
import { useMachine } from '@xstate/react';
import { parentMachine } from './parentMachine';
import { WorkflowEvents, WorkflowContext } from './workflowMachine';

export const useParentMachine = () => {
  const [state, send] = useMachine(parentMachine);

  return {
    spawnWorkflow: (id: string) => send({ type: 'SPAWN_WORKFLOW', id }),
    removeWorkflow: (id: string) => send({ type: 'REMOVE_WORKFLOW', id }),
    sendToWorkflow: (id: string, event: WorkflowEvents) => send({ type: 'SEND_TO_WORKFLOW', id, event }),
    getWorkflowContext: (id: string) => state.context.workflows[id]?.getSnapshot().context,
    workflows: state.context.workflows,
  };
};
