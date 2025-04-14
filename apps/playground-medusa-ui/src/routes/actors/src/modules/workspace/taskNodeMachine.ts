import { ethers } from 'ethers';
import { createMachine, assign, sendParent, enqueueActions, setup, fromPromise } from 'xstate';
import { TaskNodeContext } from './types/nodeTaskType';

const defaultContext: any = {
  customId: undefined,
  coords: { x: 0, y: 0 },
  taskType: 'SUM',
  incomingNodes: [],
  outgoingNodes: [],
  taskSpecific: {},
  mock: {
    mockResponseData: undefined,
    enabled: true,
  },
  isValid: false,
  runResult: undefined,
};

const validateAddress: any = (input: string) => ethers.isAddress(input);

const validateTask = (context: TaskNodeContext) => {
  let result = true;

  switch (context.taskType) {
    case 'HTTP': {
      result = context.taskSpecific.url && (context.taskSpecific.url.raw?.length ?? 0) > 0;
      break;
    }
    case 'BRIDGE': {
      result = context.taskSpecific.name && (context.taskSpecific.name.raw?.length ?? 0) > 0;
      break;
    }
    case 'JSONPARSE': {
      result =
        context.taskSpecific.data &&
        (context.taskSpecific.data.raw?.length ?? 0) > 0 &&
        context.taskSpecific.path &&
        (context.taskSpecific.path.raw?.length ?? 0) > 0;
      break;
    }
    case 'CBORPARSE': {
      result = context.taskSpecific.data && (context.taskSpecific.data.raw?.length ?? 0) > 0;
      break;
    }
    case 'ETHTX': {
      result =
        context.taskSpecific.to &&
        (context.taskSpecific.to.raw?.length ?? 0) > 0 &&
        validateAddress(context.taskSpecific.to.raw) &&
        context.taskSpecific.data &&
        (context.taskSpecific.data.raw?.length ?? 0) > 0;
      break;
    }
    case 'ETHCALL': {
      result =
        context.taskSpecific.contract &&
        (context.taskSpecific.contract.raw?.length ?? 0) > 0 &&
        validateAddress(context.taskSpecific.contract.raw) &&
        context.taskSpecific.data &&
        (context.taskSpecific.data.raw?.length ?? 0) > 0;
      break;
    }
    case 'SUM': {
      // TODO: Think how to validate tasks where 'propagateResult' may be false on inputs when parsing pipeline
      result = true; //context.incomingNodes.length > 0 || (context.taskSpecific.values && context.taskSpecific.values.length > 0)
      break;
    }
    case 'MULTIPLY': {
      result =
        context.taskSpecific.input &&
        (context.taskSpecific.input.raw?.length ?? 0) > 0 &&
        context.taskSpecific.times &&
        (context.taskSpecific.times.raw?.length ?? 0) > 0;
      break;
    }
    case 'DIVIDE': {
      result =
        context.taskSpecific.input &&
        (context.taskSpecific.input.raw?.length ?? 0) > 0 &&
        context.taskSpecific.divisor &&
        (context.taskSpecific.divisor.raw?.length ?? 0) > 0 &&
        context.taskSpecific.precision &&
        (context.taskSpecific.precision.raw?.length ?? 0) > 0;
      break;
    }
    case 'ANY': {
      result = context.incomingNodes.length > 0;
      break;
    }
    case 'MODE': {
      result = context.incomingNodes.length > 0;
      break;
    }
    case 'MEAN': {
      result =
        context.incomingNodes.length > 0 &&
        context.taskSpecific.precision &&
        (context.taskSpecific.precision.raw?.length ?? 0) > 0;
      break;
    }
    case 'MEDIAN': {
      result = context.incomingNodes.length > 0;
      break;
    }
  }

  return result;
};

export const taskNodeMachine = setup({
  types: {
    input: {} as any,
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    revalidateTask: assign({
      isValid: ({ context, event }: any) => validateTask(context),
    }),
  },
  actors: {
    runTask: fromPromise(async ({ context, event, input }: any) => {
      console.log(context);
      console.log(event);
      return fetch('/api/task', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: context.customId,
          name: context.taskType.toLowerCase(),
          inputs64: 'input64s' in event ? [...event.input64s] : [],
          vars64: 'vars64' in event ? event.vars64 : '',
          options: Object.fromEntries(Object.entries(context.taskSpecific).map(([k, v]: any) => [k, v.raw])),
          ...(context.mock.enabled && { mockResponse: context.mock.mockResponseData }),
        }),
      }).then((res) =>
        res.json().then((json) => {
          return res.ok
            ? json
            : {
                error: json.error.message,
              };
        }),
      );
    }),
    executeSideEffect: fromPromise(async ({ context, event, input }: any) => {
      const { To: to, Data: base64Data } = JSON.parse(context.runResult.sideEffectData);

      if (!('provider' in event)) {
        return Promise.reject("No 'provider' prop on the event inside 'executeSideEffect'");
      }

      const hexEncodedData = '0x' + Buffer.from(base64Data, 'base64').toString('hex');

      const result = event.provider.call({
        to: to,
        data: hexEncodedData,
      });

      return result;
    }),
  },
  guards: {
    hasNoIncomingNodes: ({ context, event }: any) => {
      return context.incomingNodes.length === 0;
    },
    resultHasError: ({ context, event }: any) => {
      return context.runResult.error && context.runResult.error.length > 0;
    },
    resultHasPendingSideEffectData: ({ context, event }: any) => {
      return context.runResult.sideEffectData.length > 0 && context.mock.enabled !== true;
    },
  },
}).createMachine({
  id: 'taskNode',
  initial: 'idle',
  context: ({ input }: any): any => ({
    ...defaultContext,
    ...input,
  }),
  states: {
    idle: {
      entry: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue('revalidateTask');
      }),
    },
    pendingRun: {
      on: {
        TRY_RUN_TASK: {
          target: 'running',
        },
      },
    },
    running: {
      invoke: {
        id: 'runTask',
        src: 'runTask',
        onDone: {
          target: 'inspectingResult',
          actions: enqueueActions(({ context, enqueue, event }: any) => {
            enqueue.assign(({ _, event }: any) => ({
              runResult: event.data,
            }));
            enqueue.sendParent(({ context, event }: any) => ({
              value: event.data,
              nodeId: context.customId,
              type: 'STORE_TASK_RUN_RESULT',
            }));
          }),
        },
        onError: { target: 'error' },
      },
    },
    inspectingResult: {
      always: [
        { target: 'pendingSideEffect', guard: 'resultHasPendingSideEffectData' },
        { target: 'error', guard: 'resultHasError' },
        { target: 'success' },
      ],
    },
    success: {
      entry: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.sendParent(() => ({
          type: 'SIMULATOR_NEXT_TASK',
        }));
      }),
    },
    error: {
      entry: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.sendParent(() => ({
          type: 'SIMULATOR_NEXT_TASK',
        }));
      }),
    },
    pendingSideEffect: {
      entry: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.sendParent(() => ({
          type: 'SIMULATOR_PROMPT_SIDE_EFFECT',
        }));
      }),
      on: {
        TRY_RUN_SIDE_EFFECT: {
          target: 'executingSideEffect',
        },
        SKIP_SIDE_EFFECT: {
          target: 'skippingSideEffect',
        },
      },
    },
    executingSideEffect: {
      invoke: {
        src: 'executeSideEffect',
        id: 'executeSideEffect',
        onDone: {
          target: '#taskNode.pendingRun',
          // @ts-ignore
          actions: enqueueActions(({ context, enqueue, event }: any) => {
            enqueue.assign({
              // @ts-ignore
              mock: ({ context, event }: any) => ({
                // @ts-ignore
                mockResponseDataInput: event.data,
                // @ts-ignore
                mockResponseData: event.data,
                enabled: true,
              }),
            });

            enqueue.sendParent(() => ({
              type: 'TRY_RUN_CURRENT_TASK',
            }));
          }),
        },
        onError: { target: 'error' },
      },
    },
    skippingSideEffect: {
      entry: enqueueActions(({ enqueue, check }: any) => {
        enqueue.assign(({ context, event }: any) => {
          return {
            ...context.mock,
            enabled: true,
          };
        });

        enqueue.sendTo('parentActor', {
          type: 'SKIP_CURRENT_SIDE_EFFECT',
        });
      }),

      always: [{ target: '#taskNode.pendingRun' }],
    },
  },
  on: {
    ADD_INCOMING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          incomingNodes: ({ context, event }: any) => [...context.incomingNodes, event.nodeId],
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
        enqueue('revalidateTask');
      }),
    },
    ADD_OUTGOING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          outgoingNodes: ({ context, event }: any) => [...context.outgoingNodes, event.nodeId],
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
      }),
    },
    REMOVE_INCOMING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          incomingNodes: ({ context, event }: any) =>
            context.incomingNodes.filter((incomingNode: string) => incomingNode !== event.nodeId),
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
        enqueue('revalidateTask');
      }),
    },
    REMOVE_OUTGOING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          outgoingNodes: ({ context, event }: any) =>
            context.outgoingNodes.filter((outgoingNode: string) => outgoingNode !== event.nodeId),
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
      }),
    },
    UPDATE_INCOMING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        assign({
          incomingNodes: ({ context, event }: any) =>
            context.incomingNodes.map((incomingNode: any) =>
              incomingNode === event.prevNodeId ? event.nodeId : incomingNode,
            ),
        }),
          enqueue.sendParent('REGENERATE_TOML' as any);
        enqueue('revalidateTask');
      }),
    },
    UPDATE_OUTGOING_NODE: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          outgoingNodes: ({ context, event }: any) =>
            context.outgoingNodes.map((outgoingNode: any) =>
              outgoingNode === event.prevNodeId ? event.nodeId : outgoingNode,
            ),
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
        enqueue('revalidateTask');
      }),
    },
    SET_CUSTOM_ID: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          customId: ({ context, event }: any) => event.value,
        });
        enqueue.sendParent('REGENERATE_TOML' as any)('revalidateTask');
      }),
    },
    SET_TASK_SPECIFIC_PROPS: {
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        enqueue.assign({
          taskSpecific: ({ context, event }: any) => {
            return {
              ...context.taskSpecific,
              ...event.value,
            };
          },
        });
        enqueue.sendParent('REGENERATE_TOML' as any);
        enqueue('revalidateTask');
      }),
    },
    SET_MOCK_RESPONSE: {
      actions: assign({
        mock: ({ context, event }: any) => ({
          ...context.mock,
          ...event.value,
        }),
      }),
    },
    UPDATE_COORDS: {
      actions: [
        assign({
          coords: ({ _, event }: any) => event.value,
        }),
      ],
    },
    RESET: {
      target: '#taskNode.idle',
      actions: assign(({ _, event }: any) => ({
        runResult: undefined,
      })),
    },
    SET_PENDING_RUN: {
      target: '#taskNode.pendingRun',
      actions: assign(({ _, event }: any) => ({
        runResult: undefined,
      })),
    },
  },
});
