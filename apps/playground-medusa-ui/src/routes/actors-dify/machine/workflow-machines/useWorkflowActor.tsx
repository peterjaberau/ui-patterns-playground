// useWorkflowActor.ts
import { useEffect, useRef, useSyncExternalStore, useMemo } from 'react';
import { createWorkflowActor } from './workflowActor';
import { WorkflowEvents, WorkflowContext } from './workflowMachine';
import { ActorRefFrom } from 'xstate';

export const useWorkflowActor = () => {
  const actorRef = useRef<ActorRefFrom<typeof createWorkflowActor>>();

  if (!actorRef.current) {
    const actor = createWorkflowActor();
    actor.start();
    actorRef.current = actor;
  }

  const actor = actorRef.current;

  // subscribe to state changes
  const state = useSyncExternalStore(
    actor.subscribe,
    () => actor.getSnapshot(),
    () => actor.getSnapshot(),
  );

  useEffect(() => {
    return () => actor.stop();
  }, [actor]);

  return {
    state: state.context as WorkflowContext,
    send: actor.send as (event: WorkflowEvents) => void,
    actor,
  };
};
