import { createMachine, assign, sendParent, setup, fromPromise } from 'xstate';
import { AiNodeContext, AiNodeEvent } from './types/nodeAiType';

const defaultContext: AiNodeContext = {
  id: 'aiPrompt-0',
  coords: { x: 0, y: 0 },
  incomingNodes: [],
  outgoingNodes: [],
  prompt: '',
  promptResult: undefined,
};

export const createAiNodeMachine = (initialContext: Partial<AiNodeContext>) => {
  const fullInitialContext = {
    ...defaultContext,
    ...initialContext,
  };

  return setup({
    types: {
      context: {} as any,
      events: {} as any,
    } as any,
    actions: {},
    actors: {
      submitAiPrompt: fromPromise(async ({ context, event, input }: any) => {
        if (!('toml' in event)) {
          throw new Error(`'toml' prop required on event triggering submitAiPrompt fn`);
        }

        const currentToml = event.toml.reduce((prev: any, curr: any) => prev + `\n${curr.value}`, ``);

        return fetch('/api/generate', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: context.prompt,
            toml: currentToml,
            aiNodeId: context.id,
          }),
        }).then((res) =>
          res.json().then((json) => {
            console.log(json);
            return res.ok
              ? json
              : {
                  error: json.error.message,
                };
          }),
        );
      }),
    },
    guards: {
      resultHasError: ({ context, event }) => {
        return context.promptResult.error;
      },
    },
  }).createMachine({
    id: 'aiPrompt',
    context: {
      ...fullInitialContext,
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          PROCESS_PROMPT: {
            target: 'running',
          },
          SET_PROMPT: {
            actions: assign({
              prompt: ({ context, event }: any) => event.value,
            }),
          },
        },
      },

      running: {
        invoke: {
          src: 'submitAiPrompt',
          id: 'submitAiPrompt',
          onDone: {
            target: 'inspectingResult',
            actions: [
              assign(({ _, event }: any) => ({
                promptResult: event.data,
              })),
            ],
          },
          onError: { target: 'error' },
        },
      },
      inspectingResult: {
        always: [{ target: 'error', guard: 'resultHasError' }, { target: 'success' }],
      },
      success: {
        entry: [
          'TODO:successToast' as any,
          sendParent(({ context, event }: any) => ({
            value: context.promptResult.choices[0].message.content,
            parentNodes: context.incomingNodes,
            childNodes: context.outgoingNodes,
            aiNodeId: context.id,
            type: 'HANDLE_AI_PROMPT_COMPLETION',
          })),
        ],
      },
      error: {
        entry: ['TODO:errorToast' as any],
      },
    },
    on: {
      ADD_INCOMING_NODE: {
        actions: [
          assign({
            incomingNodes: ({ context, event }) => [...context.incomingNodes, event.nodeId],
          }),
        ],
      },
      ADD_OUTGOING_NODE: {
        actions: [
          assign({
            outgoingNodes: ({ context, event }) => [...context.outgoingNodes, event.nodeId],
          }),
        ],
      },
      REMOVE_INCOMING_NODE: {
        actions: [
          assign({
            incomingNodes: ({ context, event }) =>
              context.incomingNodes.filter((incomingNode: string) => incomingNode !== event.nodeId),
          }),
        ],
      },
      REMOVE_OUTGOING_NODE: {
        actions: [
          assign({
            outgoingNodes: ({ context, event }) =>
              context.outgoingNodes.filter((outgoingNode: string) => outgoingNode !== event.nodeId),
          }),
        ],
      },
      UPDATE_INCOMING_NODE: {
        actions: [
          assign({
            incomingNodes: ({ context, event }: any) =>
              context.incomingNodes.map((incomingNode: any) =>
                incomingNode === event.prevNodeId ? event.nodeId : incomingNode,
              ),
          }),
        ],
      },
      UPDATE_OUTGOING_NODE: {
        actions: [
          assign({
            outgoingNodes: ({ context, event }: any) =>
              context.outgoingNodes.map((outgoingNode: any) =>
                outgoingNode === event.prevNodeId ? event.nodeId : outgoingNode,
              ),
          }),
        ],
      },
      UPDATE_COORDS: {
        actions: [
          assign({
            coords: ({ _, event }: any) => event.value,
          }),
        ],
      },
    },
  });
};
