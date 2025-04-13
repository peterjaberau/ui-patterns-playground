import { assign, enqueueActions, raise, sendTo, setup, spawnChild } from 'xstate';
import { TASK_TYPE } from './types/nodeTaskType';
import { createTaskNodeMachine } from './taskNodeMachine';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
import { workspaceMachineOptions as defaultWorkspaceMachineOptions } from './workspaceMachineOptions';
import { createAiNodeMachine } from './aiNodeMachine';

const getNextUniqueTaskId = (tasks: Array<any>) => {
  const tasksCustomIdsWithDefaultFormat = tasks
    .map((task) => task.ref.state.context.customId)
    .filter((customId) => customId.startsWith('task_'));

  let id = 0;

  while (tasksCustomIdsWithDefaultFormat.includes(`task_${id.toString()}`)) {
    id++;
  }

  return id.toString();
};

const validateAddress = (input: string) => ethers.isAddress(input);

const validateJobTypeSpecifics = (jobTypeSpecifics: any, event: any) => {
  const { jobType, prop, value } = event;

  let validatedJobTypeSpecifics = { ...jobTypeSpecifics };

  switch (jobType) {
    case 'cron':
      break;
    case 'directrequest':
      validatedJobTypeSpecifics.directrequest.contractAddress.valid = validateAddress(
        validatedJobTypeSpecifics.directrequest.contractAddress.value,
      );
      validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.valid =
        validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.value !== '' &&
        validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.value >= 0;
      validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.valid =
        validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.value !== '' &&
        validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.value >= 1;
  }

  return validatedJobTypeSpecifics;
};

const getProvider = (network = '') => {
  const networkToUse = 'homestead';

  return ethers.getDefaultProvider(networkToUse, {
    alchemy: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  });
};

export const workspaceMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  ...defaultWorkspaceMachineOptions,
}).createMachine({
  id: 'workspace',
  initial: 'idle',
  context: {
    reactFlowInstance: null,
    type: 'cron',
    name: '',
    externalJobId: '',
    gasLimit: '',
    maxTaskDuration: '',
    forwardingAllowed: false,
    edges: [],
    totalNodesAdded: 0,
    totalEdgesAdded: 0,
    nodes: {
      tasks: [],
      ai: [],
    },
    jobTypeSpecific: {
      cron: {
        schedule: {
          value: '0 0 18 * * *',
          valid: true,
        },
      },
      directrequest: {
        contractAddress: {
          value: '',
          valid: false,
        },
        minContractPaymentLinkJuels: {
          value: '',
          valid: true,
        },
        minIncomingConfirmations: {
          value: '',
          valid: true,
        },
      },
      fluxmonitor: {},
      keeper: {},
      offchainreporting: {},
      webhook: {},
    },
    jobTypeVariables: {
      directrequest: {
        logTopics: {
          value: '',
          values: [],
          valid: true,
          type: 'string',
        },
        logData: {
          value: '',
          valid: true,
          type: 'bytes',
          fromType: 'hex',
        },
      },
      cron: {},
      fluxmonitor: {},
      keeper: {},
      offchainreporting: {},
      webhook: {},
    },
    isConnecting: false,
    connectionParams: { nodeId: null, handleId: null, handleType: null },
    taskRunResults: [],
    toml: [],
    parsedTaskOrder: [],
    parsingError: '',
    currentTaskIndex: 0,
    jobLevelVars64: undefined,
    provider: getProvider(),
    openModals: [],
  },
  on: {
    SET_REACT_FLOW_INSTANCE: {
      actions: assign({
        reactFlowInstance: ({ _, event }: any) => event.value,
      }),
    },
    ADD_TASK_NODE: {
      // @ts-ignore
      actions: enqueueActions(({ context, enqueue, event }: any) => {
        const { fromHandleId, fromNodeId, newNodeType } = event.edgeDetails;

        const fromNodeCustomId =
          context.nodes.tasks.find(({ task }: any) => task.ref.id === fromNodeId)?.ref.state.context.customId || '';

        const isFirstNode = !fromHandleId || !newNodeType;
        const isForwardConnection = newNodeType === 'target';

        const newNodeId = `task_${event.options.id ?? context.totalNodesAdded}`;
        const newNodePresentationId = `task_${event.options.id ?? getNextUniqueTaskId(context.nodes.tasks)}`;

        const fromId = isForwardConnection ? fromNodeId : newNodeId;
        const toId = isForwardConnection ? newNodeId : fromNodeId;

        const fromPresentationId = isForwardConnection ? fromNodeCustomId : newNodePresentationId;
        const toPresentationId = isForwardConnection ? newNodePresentationId : fromNodeCustomId;

        enqueue.assign({
          totalNodesAdded: context.totalNodesAdded + 1,
          totalEdgesAdded: context.totalEdgesAdded + 1,
          nodes: {
            ...context.nodes,
            tasks: [
              ...context.nodes.tasks,
              {
                // add a new taskNodeMachine actor with a unique name
                ref: spawnChild(
                  createTaskNodeMachine({
                    coords: event.options.initialCoords,
                    taskType: event.options.taskType,
                    customId: newNodePresentationId,
                    ...(!isFirstNode &&
                      (isForwardConnection
                        ? { incomingNodes: [fromNodeCustomId] }
                        : { outgoingNodes: [fromNodeCustomId] })),
                  }),
                  newNodeId as any,
                ),
              },
            ],
          },
          edges:
            fromNodeId && fromHandleId
              ? [
                  ...context.edges,
                  {
                    id: `edge_${context.totalEdgesAdded}`,
                    source: fromId,
                    sourceCustomId: fromPresentationId,
                    target: toId,
                    targetCustomId: toPresentationId,
                  },
                ]
              : context.edges,
        });

        enqueue.sendTo(fromNodeId, {
          type: isForwardConnection ? 'ADD_OUTGOING_NODE' : 'ADD_INCOMING_NODE',
          nodeId: newNodePresentationId as any,
        } as any);

        enqueue('regenerateToml');
      }),
    },
    ADD_AI_PROMPT_NODE: {
      // @ts-ignore
      actions: actions.pure(({ context, event }: any) => {
        const { fromHandleId, fromNodeId, newNodeType } = event.edgeDetails;

        // from will be a task (or other) node
        const fromNodeCustomId =
          context.nodes.tasks.find(({ taskNode }: any) => taskNode.ref.id === fromNodeId)?.ref.state.context.customId ||
          '';

        const isFirstNode = !fromHandleId || !newNodeType;
        const isForwardConnection = newNodeType === 'target';

        const newNodeId = `ai_${event.options.id ?? context.totalNodesAdded}`;

        const fromId = isForwardConnection ? fromNodeId : newNodeId;
        const toId = isForwardConnection ? newNodeId : fromNodeId;

        const fromPresentationId = isForwardConnection ? fromNodeCustomId : newNodeId;
        const toPresentationId = isForwardConnection ? newNodeId : fromNodeCustomId;

        return [
          assign({
            totalNodesAdded: context.totalNodesAdded + 1,
            totalEdgesAdded: context.totalEdgesAdded + 1,
            nodes: {
              ...context.nodes,
              ai: [
                ...context.nodes.ai,
                {
                  // add a new aiNodeMachine actor with a unique name
                  ref: spawnChild(
                    createAiNodeMachine({
                      id: newNodeId,
                      coords: event.options.initialCoords,
                      ...(!isFirstNode &&
                        (isForwardConnection
                          ? { incomingNodes: [fromNodeCustomId] }
                          : { outgoingNodes: [fromNodeCustomId] })),
                    }),
                    newNodeId as any,
                  ),
                },
              ],
            },
            edges:
              fromNodeId && fromHandleId
                ? [
                    ...context.edges,
                    {
                      id: `edge_${context.totalEdgesAdded}`,
                      source: fromId,
                      sourceCustomId: fromPresentationId,
                      target: toId,
                      targetCustomId: toPresentationId,
                    },
                  ]
                : context.edges,
          }),
          sendTo(fromNodeId, {
            type: isForwardConnection ? 'ADD_OUTGOING_NODE' : 'ADD_INCOMING_NODE',
            nodeId: newNodeId,
          } as any),
          'regenerateToml',
        ];
      }),
    },
    DELETE_NODE: {
      actions: [
        assign({
          nodes: ({ context, event }: any) => ({
            ...context.nodes,
            tasks: [...context.nodes.tasks.filter(({ node }: any) => node.ref.id !== event.nodeId)],
            ai: [...context.nodes.ai.filter(({ node }: any) => node.ref.id !== event.nodeId)],
          }),
          edges: ({ context, event }: any) =>
            context.edges.filter(({ edge }: any) => edge.source !== event.nodeId && edge.target !== event.nodeId),
        }),
        'regenerateToml',
      ],
    },
    REPLACE_TASK_NODE: {
      actions: [
        assign({
          nodes: ({ context, event }: any) => {
            return {
              ...context.nodes,
              tasks: [
                ...context.nodes.tasks.filter(({ task }: any) => task.ref.id !== event.nodeId),
                {
                  // add a new taskNodeMachine actor with a unique name
                  ref: spawnChild(
                    createTaskNodeMachine({
                      coords: event.existing.coords,
                      taskType: event.newType,
                      customId: event.existing.customId,
                      incomingNodes: event.existing.incomingNodes,
                      outgoingNodes: event.existing.outgoingNodes,
                    }),
                    event.nodeId,
                  ),
                },
              ],
            };
          },
        }),
        'regenerateToml',
      ],
    },
    UPDATE_EDGES_WITH_NODE_ID: {
      actions: [
        assign({
          edges: ({ context, event }: any) =>
            context.edges.map(({ edge }: any) => ({
              ...edge,
              sourceCustomId: edge.sourceCustomId === event.prevNodeId ? event.nodeId : edge.sourceCustomId,
              targetCustomId: edge.targetCustomId === event.prevNodeId ? event.nodeId : edge.targetCustomId,
            })),
        }),
        'regenerateToml',
      ],
    },
    SET_JOB_TYPE: {
      actions: [
        assign({
          type: ({ context, event }: any) => event.value,
        }),
        'regenerateToml',
      ],
    },
    SET_NAME: {
      actions: [
        assign({
          name: ({ context, event }: any) => {
            return event.value;
          },
        }),
        'regenerateToml',
      ],
    },
    SET_EXTERNAL_JOB_ID: {
      actions: [
        assign({
          externalJobId: ({ context, event }: any) => event.value,
        }),
        'regenerateToml',
      ],
    },
    SET_GAS_LIMIT: {
      actions: [
        assign({
          gasLimit: ({ context, event }: any) => event.value,
        }),
        'regenerateToml',
      ],
    },
    SET_MAX_TASK_DURATION: {
      actions: [
        assign({
          maxTaskDuration: ({ context, event }: any) => event.value,
        }),
        'regenerateToml',
      ],
    },
    SET_FORWARDING_ALLOWED: {
      actions: [
        assign({
          forwardingAllowed: ({ context, event }: any) => event.value === 'true',
        }),
        'regenerateToml',
      ],
    },
    SET_JOB_TYPE_SPECIFIC_PROPS: {
      actions: [
        assign({
          jobTypeSpecific: ({ context, event }: any) => {
            let current = { ...context.jobTypeSpecific };

            if (event.value !== undefined) current[event.jobType][event.prop].value = event.value;

            if (event.valid !== undefined) current[event.jobType][event.prop].valid = event.valid;

            return current;
          },
        }),
        'validateJobTypeSpecificProps',
        'regenerateToml',
      ],
    },
    SET_JOB_TYPE_SPECIFIC_VARIABLES: {
      actions: [
        assign({
          jobTypeVariables: ({ context, event }: any) => {
            let current = context.jobTypeVariables;

            if (event.value !== undefined) context.jobTypeVariables[event.jobType][event.variable].value = event.value;

            if (event.values !== undefined)
              context.jobTypeVariables[event.jobType][event.variable].values = event.values;

            // if (event.valid !== undefined)
            //   current[event.jobType][event.variable].valid = event.valid;

            return current;
          },
        }),
        // "validateJobTypeSpecificProps",
        // "regenerateToml"
      ],
    },
    STORE_TASK_RUN_RESULT: {
      actions: assign(({ context, event }: any) => {
        console.log(event);
        return {
          taskRunResults: [...context.taskRunResults, { id: event.nodeId, result: event.value }],
        };
      }),
    },
    ADD_NEW_EDGE: {
      actions: [
        assign(({ context, event }: any) => {
          const toAdd = {
            id: `edge_${context.totalEdgesAdded}`,
            ...event.newEdge,
          };

          return {
            edges: [...context.edges, toAdd],
            totalEdgesAdded: context.totalEdgesAdded + 1,
          };
        }),
        'regenerateToml',
      ],
    },
    REGENERATE_TOML: {
      actions: 'regenerateToml',
    },
    PERSIST_STATE: {
      actions: [
        ({ context }: any) => {
          // Extract any context props we don't want to persist
          const {
            reactFlowInstance,
            nodes,
            isConnecting,
            connectionParams,
            taskRunResults,
            parsedTaskOrder,
            parsingError,
            currentTaskIndex,
            jobLevelVars64,
            provider,
            openModals,
            ...toPersist
          }: any = context;

          // Instead of saving the full context as-is, we'll expand the context of each spawned machine
          const parsedContext = {
            ...toPersist,
            nodes: {
              tasks: context.nodes.tasks.map(({ entry }: any) => {
                const { runResult, ...nodeContextToPersist } = entry.ref.getSnapshot()?.context || {};

                return {
                  ...entry,
                  context: nodeContextToPersist,
                };
              }),
              ai: context.nodes.ai.map(({ entry }: any) => {
                const { ...nodeContextToPersist } = entry.ref.getSnapshot()?.context || {};

                return {
                  ...entry,
                  context: nodeContextToPersist,
                };
              }),
            },
          };

          try {
            localStorage.setItem('persisted-state', JSON.stringify(parsedContext));
          } catch (e) {
            // unable to save to localStorage
          }
        },
      ],
    },
    RESTORE_STATE: {
      actions: assign(({ context, event }: any) => {
        return {
          ...context,
          ...event.savedContext,
          nodes: {
            ...context.nodes,
            tasks: event.savedContext.nodes.tasks.map(({ entry }: any) => ({
              ...entry,
              // @ts-ignore
              ref: spawn(createTaskNodeMachine(entry.context || {}), entry.ref.id),
            })),
            ai: event.savedContext.nodes.ai.map(({ entry }: any) => ({
              ...entry,
              // @ts-ignore
              ref: spawn(createAiNodeMachine(entry.context || {}), entry.ref.id),
            })),
          },
        };
      }),
    },
    OPEN_MODAL: {
      actions: assign(({ context, event }: any) => {
        const { name } = event;
        return {
          openModals: context.openModals.includes(name) ? context.openModals : [...context.openModals, name],
        };
      }),
    },
    CLOSE_MODAL: {
      actions: assign(({ context, event }: any) => {
        const { name } = event.data;
        return {
          openModals: context.openModals.filter(({ entry }: any) => entry !== name),
        };
      }),
    },
    // SET_NETWORK: {
    //   actions: [
    //     assign(({context, event}: any) => {
    //       return {
    //         network: event.value
    //       }
    //     })
    //   ]
    // }
  },
  states: {
    idle: {
      initial: 'defaultMode',
      states: {
        defaultMode: {
          on: {
            TOGGLE_AI_WAND: {
              target: 'aiWandMode',
            },
            CONNECTION_SUCCESS: {
              actions: ['handleConnectionSuccessTaskNodeAddition', 'regenerateToml'],
            },
          },
        },
        aiWandMode: {
          on: {
            TOGGLE_AI_WAND: {
              target: 'defaultMode',
            },
            CONNECTION_SUCCESS: {
              actions: ['handleConnectionSuccessAiPromptNodeAddition'],
            },
          },
        },
      },
      on: {
        TOGGLE_TEST_MODE: {
          target: 'testModeLoading',
        },
        SAVE_JOB_SPEC_VERSION: {
          target: 'savingJobSpecVersion',
        },
        IMPORT_SPEC: {
          target: 'importing',
        },
        CONNECTION_START: {
          actions: assign({
            isConnecting: ({ _context, _event }: any) => true,
            connectionParams: ({ _context, event }: any) => event.params,
          }),
        },
        CONNECTION_END: {
          actions: [
            assign({
              isConnecting: (_context, _event) => false,
            }),
          ],
        },
        HANDLE_AI_PROMPT_COMPLETION: {
          actions: ['handleAiPromptCompletion'],
        },
      },
    },
    importing: {
      invoke: {
        src: 'importJobSpec',
        onDone: {
          target: 'idle',
          actions: [
            assign(({ context, event }: any) => {
              const newPartialContext: Partial<WorkspaceContext> = event.data.constructedMachineContext;

              let newContext = {
                ...context,
                ...newPartialContext,
              };

              if ('nodes' in newPartialContext && newPartialContext.nodes) {
                newContext = {
                  ...newContext,
                  nodes: {
                    ...newContext.nodes,
                    tasks: newPartialContext.nodes.tasks.map((entry: any) => ({
                      ...entry,
                      // @ts-ignore
                      ref: spawnChild(createTaskNodeMachine(entry.ref.state.context || {}), entry.ref.id),
                    })),
                  },
                };
              }

              return newContext;
            }),
            raise({ type: 'CLOSE_MODAL', data: { name: 'import' } } as any),
            'createImportToast',
            'regenerateToml',
          ],
        },
        onError: {
          target: 'idle',
          actions: ['createImportToast'],
        },
      },
    },
    savingJobSpecVersion: {
      invoke: {
        src: 'saveJobSpecVersion',
        onDone: {
          target: 'idle',
          actions: [({ context, event }: any) => toast.success('Job Spec saved successful')],
        },
        onError: {
          target: 'idle',
          actions: [({ context, event }: any) => toast.error(event.data.message)],
        },
      },
    },
    testModeLoading: {
      initial: 'parsingDag',
      states: {
        parsingDag: {
          invoke: {
            src: 'parseSpec',
            id: 'parseSpec',
            onDone: {
              target: 'inspectingParseResult',
              actions: assign(({ _, event }: any) => {
                return {
                  parsedTaskOrder: event.data.tasks || [],
                  parsingError: event.data.error || '',
                };
              }),
            },
            onError: {
              target: '#workspace.idle',
            },
          },
        },
        inspectingParseResult: {
          always: [{ target: '#workspace.idle', guard: 'hasParsingError' }, { target: 'processingJobLevelVariables' }],
        },
        processingJobLevelVariables: {
          invoke: {
            src: 'processJobLevelVariables',
            id: 'processJobLevelVariables',
            onDone: {
              target: '#workspace.testMode',
              actions: [
                assign(({ _, event }: any) => ({
                  jobLevelVars64: event.data.vars64,
                })),
              ],
            },
            onError: { target: '#workspace.idle' },
          },
        },
      },
    },
    testMode: {
      initial: 'revalidating',
      states: {
        revalidating: {
          entry: ['setCurrentTaskPendingRun', 'resetNextTask'],
          always: [{ target: 'idle' }],
        },
        idle: {
          on: {
            TRY_RUN_CURRENT_TASK: { target: 'processingCurrentTask' },
          },
        },
        processingCurrentTask: {
          entry: ['processCurrentTask'],
          always: [{ target: 'idle' }],
        },
        error: {},
        sideEffectPrompt: {
          on: {
            TRY_RUN_CURRENT_SIDE_EFFECT: { target: 'processingCurrentSideEffect' },
            SKIP_CURRENT_SIDE_EFFECT: { target: 'skippingCurrentSideEffect' },
          },
        },
        processingCurrentSideEffect: {
          entry: ['executeCurrentSideEffect'],
          always: [{ target: 'idle' }],
        },
        skippingCurrentSideEffect: {
          entry: ['skipCurrentSideEffect'],
          always: [{ target: 'idle' }],
        },
      },
      on: {
        TOGGLE_TEST_MODE: {
          target: 'idle',
          // @ts-ignore
          actions: actions.pure((context: WorkspaceContext, event) => {
            return [
              ...context.nodes.tasks.map((task) => sendTo(task.ref.id, { type: 'RESET' }) as any),
              assign({
                parsedTaskOrder: [],
                parsingError: '',
                currentTaskIndex: 0,
                taskRunResults: [],
                jobLevelVars64: undefined,
              }),
            ];
          }),
        },
        SIMULATOR_PREV_TASK: {
          target: '.revalidating',
          // @ts-ignore
          actions: actions.pure((context: WorkspaceContext, event) => {
            if (context.currentTaskIndex === 0) return;

            const newIndex = context.currentTaskIndex - 1;

            const newTaskCustomId = context.parsedTaskOrder[newIndex].id;

            return [
              assign({
                currentTaskIndex: newIndex,
                taskRunResults: context.taskRunResults.filter((trr) => trr.id !== newTaskCustomId),
              }),
            ];
          }),
        },
        // TRY_RUN_CURRENT_TASK: {
        //   // @ts-ignore
        //   actions: actions.pure((context: WorkspaceContext, event) => {

        //     if (context.currentTaskIndex >= context.parsedTaskOrder.length) return

        //     // Try to execute the current task and then proceed if successful
        //     const currentTask = context.parsedTaskOrder[context.currentTaskIndex]
        //     const currentTaskCustomId = currentTask.id

        //     const currentTaskId = getTaskNodeByCustomId(context, currentTaskCustomId)?.ref.id

        //     const input64s = currentTask.inputs
        //       .filter(input => input.propagateResult === true)
        //       .map(input => context.taskRunResults.find(trr => trr.id === input.id)?.result.val64)

        //     const vars64 = context.taskRunResults.length > 0 ? context.taskRunResults[context.taskRunResults.length - 1].result.vars64 : ""

        //     return [
        //       send({ type: "TRY_RUN_TASK", input64s, vars64 }, { to: currentTaskId })
        //     ]
        //   })
        // },
        SIMULATOR_NEXT_TASK: {
          target: '.revalidating',
          actions: assign(({ context, event }: any) => {
            const newIndex = context.currentTaskIndex + 1;
            return {
              currentTaskIndex:
                newIndex <= context.parsedTaskOrder.length ? context.currentTaskIndex + 1 : context.currentTaskIndex,
            };
          }),
        },
        SIMULATOR_PROMPT_SIDE_EFFECT: {
          target: '.sideEffectPrompt',
        },
      },
    },
    error: {},
  },
});

const getTaskNodeByCustomId = (context: any, nodeId: string) =>
  context.nodes.tasks.find((taskNode: any) => taskNode.ref.state.context.customId === nodeId);

const wrapVariable = (input: string) => `$(${input})`;

const adjustNewSourceNodeHeightByTypeDefault = (
  initialCoords: { x: number; y: number },
  taskType: TASK_TYPE,
  isForwardConnection: boolean = true,
) => {
  const taskNodeDefaultHeight = 144;

  return {
    x: initialCoords.x,
    y: isForwardConnection ? initialCoords.y : initialCoords.y - taskNodeDefaultHeight,
  };
};
