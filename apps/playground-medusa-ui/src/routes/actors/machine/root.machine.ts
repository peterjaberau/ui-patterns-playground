import { getRandomString, rootPartialInput } from './helpers';
import { pickerMachine } from './picker.machine';
import { ActorRefFrom, assertEvent, assign, enqueueActions, fromPromise, sendParent, setup, stopChild } from 'xstate';
import { create } from 'mutative';
import set from 'set-value';

export const rootMachine = setup({
  types: {
    events: {} as {
      type: 'act-ins.spawn' | 'rp.spawn' | 'rp.open' | 'rp.kill' | 'rp.items.selected' | 'rpSpawnForm.edit';
      [k: string]: any;
    },
    context: {} as {
      spawnForm: {
        uiSettings: any;
        resourceType: any;
        resourceSelectionType: any;
      };
      pickers: Map<
        string,
        {
          actorRef: ActorRefFrom<typeof pickerMachine>;
          latestSelectedItems: Map<string, any>;
        }
      >;

      actorInstances: Map<
        string,
        {
          actorRef: ActorRefFrom<typeof pickerMachine>;
          latestSelectedItems: Map<string, any>;
        }
      >;
    },
  } as any,
  actions: {
    openPicker: enqueueActions(({ context, enqueue, event }: any) => {
      assertEvent(event, 'rp.open');
      const rp = context.pickers.get(event.payload.id);
      if (!rp) return;

      enqueue.sendTo(rp.actorRef, {
        type: 'open',
        payload: {
          selectedItems: rp.latestSelectedItems,
        } as any,
      } as any);
    }),
    rpInsertLastSelectedItemsIds: assign(({ event, context }) => {
      assertEvent(event, 'rp.items.selected');
      const id = event.payload.senderId;
      return create(context, (draft: any) => {
        const resourcePicker = draft.pickers.get(id);
        if (!resourcePicker) return;
        resourcePicker.latestSelectedItems = event.payload.selectedItems;
      });
    }),
    logContext: ({ context }) => {
      console.log({ context });
    },
    killPicker: assign(({ event, context }) => {
      assertEvent(event, 'rp.kill');
      const actorId = event.payload.id;
      stopChild(actorId);
      return create(context, (draft: any) => {
        draft.pickers.delete(actorId);
      });
    }),
    createPicker: assign(({ context, event, spawn }: any) => {
      assertEvent(event, 'rp.spawn');
      const systemId = getRandomString();
      const { spawnForm } = context;
      const actorRef = spawn(pickerMachine, {
        input: {
          resourceSettings: {
            ...(rootPartialInput as any)[spawnForm.resourceType]?.resourceSettings,
            selectionType: spawnForm.resourceSelectionType,
          } as any,
          uiSettings: spawnForm.uiSettings,
        } satisfies any,

        id: systemId,
      });

      return create(context, (draft: any) => {
        draft.pickers.set(actorRef.id, {
          actorRef: actorRef,
          latestSelectedItems: new Map(),
        });
      });
    }),
    editRpSpawnerForm: assign(({ context, event }) => {
      assertEvent(event, 'rpSpawnForm.edit');

      console.log(event);
      return create(context, (draft) => {
        set(draft.spawnForm, event.payload.key, event.payload.value);
      });
    }),

    createActorInstance: assign(({ context, event, spawn }: any) => {
      assertEvent(event, 'act-ins.spawn');
      const systemId = getRandomString();
      const { spawnForm } = context;
      const actorRef = spawn(pickerMachine, {
        input: {
          resourceType: event.payload.resourceType,
          resourceSettings: {},
        } as any,
        id: systemId,
      });

      return create(context, (draft: any) => {
        draft.actorInstances.set(actorRef.id, {
          actorRef: actorRef,
          latestSelectedItems: new Map(),
        });
      });
    }),
  },
}).createMachine({
  id: 'root',
  initial: 'idle',
  context: {
    actorInstances: new Map(),
    pickers: new Map(),
    spawnForm: {
      uiSettings: {
        modalSize: 'large',
        resourceUiMode: 'resource-item',
      },
      resourceSelectionType: 'multiple',
      resourceType: 'libraryStaticProduct',
    },
  },
  states: {
    idle: {
      on: {
        'rpSpawnForm.edit': {
          actions: ['editRpSpawnerForm', 'logContext'],
        },
        'rp.items.selected': {
          actions: ['rpInsertLastSelectedItemsIds'],
        },
        'rp.open': {
          actions: ['openPicker'],
        },
        'rp.kill': {
          actions: ['killPicker'],
        },
        'rp.spawn': {
          actions: ['createPicker'],
        },
        'act-ins.spawn': {
          actions: ['createActorInstance'],
        },
      },
    },
  },
});
