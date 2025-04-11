// workflowActor.ts
import { createActor } from 'xstate';
import { workflowMachine } from './workflowMachine';

export const createWorkflowActor = (selfId?: string) => {
  const controlMode = localStorage.getItem('workflow-operation-mode') === 'pointer' ? 'pointer' : 'hand';
  const actor = createActor(
    workflowMachine.provide({
      context: {
        controlMode,
        self: {
          id: selfId,
          sendToParent: () => {}, // this gets overwritten by spawn
        },
      },
    }),
  );
  return actor;
};

/*
 ✅ If you need alternate logic (e.g., readonly version), just define a new machine, and createWorkflowActor can accept it:
 export const createWorkflowActor = (machine = workflowMachine) => {
 const controlMode = localStorage.getItem('workflow-operation-mode') === 'pointer' ? 'pointer' : 'hand';
 return createActor(machine.provide({ context: { controlMode } }));
 };

 */
