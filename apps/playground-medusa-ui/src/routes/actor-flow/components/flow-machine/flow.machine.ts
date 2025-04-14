import { getRandomString } from './utils';
import { nodeMachine } from './node.machine';
import { getFlowDetails } from '../flow/config';
import { ActorRefFrom, assertEvent, assign, enqueueActions, setup, stopChild } from 'xstate';
import { create } from 'mutative';
import set from 'set-value';

export const flowMachine = setup({
  types: {
    events: {} as {
      type: 'flow.load' | 'nodeInstance.spawn' | 'nodeInstance.kill' | 'nodeInstance.select' | 'nodeInstance.editNew';
      [k: string]: any;
    } as any,
    context: {} as {
      flow: {
        name: string | any;
        domain: string | any;
        initialValues: { nodes: any[]; edges: any[] };
        settings: { title: string; type: string; icon: any; settingSchema: any; [k: string]: any };
        props: {
          nodeSelector: { showSearch: boolean } | any;
          [k: string]: any;
        };
      };
      spawnNode: {
        type: string;
        data: any;
        position: { x: number; y: number } | any;
        ports: { id: string; type: string; group: string }[] | any;
      };
      nodeInstances: Map<
        string,
        {
          actorNodeRef: ActorRefFrom<typeof nodeMachine>;
          latestSelectedNodes: Map<string, any>;
        }
      >;
    },
  } as any,
  actions: {
    flowLoad: assign(({ context, event }) => {
      assertEvent(event, 'flow.load');
      const { name } = event.payload;
      const flowDetails = getFlowDetails({ name });
      console.log('---flowDetails----', flowDetails);

      return create(context, (draft) => {
        draft.flow = flowDetails;
      });
    }),

    nodeInstanceCreate: assign(({ context, event, spawn }: any) => {
      assertEvent(event, 'nodeInstance.spawn');
      const systemId = getRandomString();
      const { spawnNode } = context;
      const actorNodeRef = spawn(nodeMachine, {
        input: {
          ...(event.payload as any),
          // type: spawnNode.type,
          // data: spawnNode.data,
          // position: spawnNode.position,
          // ports: spawnNode.ports,
        } satisfies any,
        id: systemId,
      });

      return create(context, (draft: any) => {
        draft.nodeInstances.set(actorNodeRef.id, {
          actorNodeRef: actorNodeRef,
          latestSelectedNodes: new Map(),
        });
      });
    }),

    nodeInstanceKill: assign(({ event, context }) => {
      assertEvent(event, 'nodeInstance.kill');
      const actorNodeId = event.payload.id;
      stopChild(actorNodeId);
      return create(context, (draft: any) => {
        draft.nodeInstances.delete(actorNodeId);
      });
    }),

    nodeInstanceSelect: enqueueActions(({ context, enqueue, event }: any) => {
      assertEvent(event, 'nodeInstance.select');
      const nodeInstance = context.nodeInstances.get(event.payload.id);
      if (!nodeInstance) return;

      enqueue.sendTo(nodeInstance.actorNodeRef, {
        type: 'select',
        payload: {
          selectedItems: nodeInstance.latestSelectedItems,
        } as any,
      } as any);
    }),

    nodeInstanceEditNew: assign(({ context, event }) => {
      assertEvent(event, 'nodeInstance.editNew');

      return create(context, (draft) => {
        set(draft.spawnNode, event.payload.key, event.payload.value);
      });
    }),

    logContext: ({ context }) => {
      console.log({ context });
    },
  },
}).createMachine({
  id: 'flowMachine',
  initial: 'idle',
  context: {
    flow: {
      initialValues: {
        nodes: [],
        edges: [],
      },
      props: {},
      settings: {
        settingSchema: [],
      },
    },
    nodeInstances: new Map(),
    spawnNode: {
      type: 'Start',
      data: {},
      // position: { x: 10, y: 270 },
      ports: [{ id: 'right', type: 'output', group: 'right' }],
    },
  },
  states: {
    idle: {
      on: {
        'flow.load': {
          actions: ['flowLoad'],
        },
        'nodeInstance.editNew': {
          actions: ['nodeInstanceEditNew', 'logContext'],
        },
        'nodeInstance.select': {
          actions: ['nodeInstanceSelect'],
        },
        'nodeInstance.kill': {
          actions: ['nodeInstanceKill'],
        },
        'nodeInstance.spawn': {
          actions: ['nodeInstanceCreate'],
        },
      },
    },
  },
});
