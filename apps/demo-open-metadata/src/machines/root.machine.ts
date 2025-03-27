import { setup, raise, spawnChild, sendTo, assign, fromPromise, fromCallback } from 'xstate';
import { Ok } from 'ts-results';

export const rootMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  },
  actions: {
    actionFn: assign(({ context, event }) => {
      console.log('actionFn', { context: context, event: event });
    }),
  },
  actors: {
    actorPromiseFn: fromPromise(async ({ input }: any) => {
      await new Promise((resolve: any) => setTimeout(resolve, 1_00));
      return new Ok([]);
    }),
  },
  guards: {
    isGuardFn: ({ context }: any) => {
      return !context.canvases || context.canvases.length === 0;
    },
  },
}).createMachine({
  id: 'root-machine',
  initial: 'idle',
  context: {} as any,
  states: {
    idle: {
      on: {
        'action.event': {
          actions: 'actionFn',
        },
        'actor.event': {
          target: 'invokingActor',
        },
        'guard.event': {
          target: 'handlingActionState',
          guard: 'isGuardFn',
        },
      },
    },
    invokingActor: {
      invoke: {
        src: 'actorPromiseFn',
        id: 'actorPromiseFn',
        onDone: {
          target: 'idle',
          actions: 'actionFn',
        },
        onError: {
          target: 'idle',
          actions: 'actionFn',
        },
      },
    },
    handlingActionState: {
      on: {
        'action.event': {
          actions: 'actionFn',
        },
      },
    },
  },
});
