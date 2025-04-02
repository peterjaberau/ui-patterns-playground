import { assign, createMachine, fromPromise, sendParent, setup } from 'xstate';

export const actorInstanceLogic = setup({
  types: {
    input: {} as any,
    context: {} as any,
    events: {} as any,
  },
  actors: {
    deleteActorInstance: fromPromise(async () => {
      await new Promise((res) => setTimeout(res, 1_00));
    }),
  },
}).createMachine({
  id: 'actor-instance',
  context: ({ input }: any) => input,
  initial: 'Idle',
  states: {
    Idle: {
      on: {
        'editing.start': {
          target: 'Editing',
        },
        delete: {
          target: 'Deleting',
        },
      },
    },
    Editing: {
      on: {
        'editing.cancel': {
          target: 'Idle',
        },
        'editing.submit': {
          target: 'Idle',
          actions: assign({
            actorTitle: ({ event }) => event.actorTitle,
          }),
        },
      },
    },
    Deleting: {
      invoke: {
        src: 'deleteActorInstance',
        input: ({ context }: any) => ({
          actorInstanceId: context.actorInstanceId,
        }),

        onDone: {
          target: 'Done',
          actions: sendParent(({ context }: any) => ({
            type: 'actor-instance.delete.confirmed',
            actorInstanceId: context.actorInstanceId,
          })),
        },
      },
    },
    Done: {
      type: 'final',
    },
  },
});
