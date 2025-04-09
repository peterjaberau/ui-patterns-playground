'use client';
import { rootMachine } from '@/machines/root.machine';
import { createActorContext } from '@xstate/react';

export const RootMachineContext = createActorContext(rootMachine, {
  inspect: (inpectionEvent: any) => {
    // console.log(inpectionEvent)
  },
});

export const RootMachineProvider = ({ children }: any) => {
  return <RootMachineContext.Provider>{children}</RootMachineContext.Provider>;
};

export const useRootMachine = () => {
  const actor = RootMachineContext.useActorRef();
  const state = RootMachineContext.useSelector((state: any) => state);

  return {
    actor: actor,
    state: state,
    send: actor.send,
    stateContext: state.context,
  };
};
