import { handleInvokeError } from './helpers';
import { create } from 'mutative';
import { assertEvent, assign, fromPromise, sendParent, setup } from 'xstate';

export const pickerMachine = setup({
  types: {
    input: {} as any,
    context: {} as {
      component: {
        resourceType: string;
        props: any;
        children: any;
      };
      filters: any;
      selectedItems: Map<string, any>;
      currentQuery: any;
      currentResources: any[];
      currentPageInfo: any;
      [k: string]: any;
    },
    events: {} as {
      type:
        | 'library.query.editQuery'
        | 'rp.query.filters.edit'
        | 'library.query.filters.clearAll'
        | 'open'
        | 'close'
        | 'library.item.select'
        | 'library.item.unselect'
        | 'library.items.loadMore'
        | 'library.done';
      payload: any;
    },
  },

  actors: {
    getLibraryItem: fromPromise(async ({ input }: any) => {
      return input.handler(input.query);
    }),

    getFilters: fromPromise(async ({ input }: any) => {
      return input.handler(input.resourceType);
    }),
  },
  actions: {
    logEvent: (({ event, context }: any) => {
      console.log('event:', {
        event,
        context,
      });
    }) as any,

    injectSelectedItems: assign(({ event, context }: any) =>
      create(context, (draft) => {
        assertEvent(event, 'open');
        draft.selectedItems = event.payload?.selectedItems ?? new Map();
      }),
    ),
    clearQueryEndCursor: assign(({ context }: any) =>
      create(context, (draft) => {
        draft.currentQuery.endCursor = null;
      }),
    ),
    editSearch: assign(({ context, event }: any) => {
      assertEvent(event, 'library.query.editQuery');
      return create(context, (draft) => {
        draft.currentQuery.query = event.payload.query;
      });
    }),
    clearSelected: assign(({ context }: any) =>
      create(context, (draft) => {
        draft.selectedItems.clear();
      }),
    ),
    clearFilters: assign(({ event, context }: any) => {
      assertEvent(event, 'library.query.filters.clearAll');
      return create(context, (draft) => {
        if (draft.currentQuery.queryType === 'library') {
          for (const filterToken in draft.currentQuery.filters) {
            draft.currentQuery.filters[filterToken] = [];
          }
        }
      });
    }),
    editFilter: assign(({ event, context }: any) => {
      assertEvent(event, 'rp.query.filters.edit');
      return create(context, (draft) => {
        if (draft.currentQuery.queryType === 'library')
          draft.currentQuery.filters[event.payload.filterId] = event.payload.value;
      });
    }),
    sendSelectedItemsToParent: sendParent(({ context, self }: any) => {
      return {
        type: 'rp.items.selected',
        payload: {
          selectedItems: context.selectedItems,
          senderId: self.id,
          resourceSettings: context.resourceSettings,
        },
      };
    }),
  },
}).createMachine({
  id: 'resourcePicker',
  initial: 'Closed',
  context: ({ input }: any) => ({
    ...input,
    component: {
      resourceType: input.resourceType,
      props: input.resourceSettings,
      children: undefined,
    },
    filters: undefined,
    selectedItems: new Map(),
    currentResources: [],
    currentPageInfo: {
      endCursor: null,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: '0',
    },
  }),
  states: {
    Closed: {
      entry: ['logEvent'],
      on: {
        open: {
          actions: ['injectSelectedItems'],
          target: 'Open',
        },
      },
    },
    Open: {
      on: {
        close: {
          target: 'Closed',
        },
      },

      initial: 'Check',
      states: {
        Check: {
          always: [
            {
              target: 'LoadFilters',
              guard: ({ context }) => {
                return !context.filters && context.resourceSettings.resourceNamespace === 'library';
              },
            },
            {
              target: 'Edit',
              guard: ({ context }) => {
                return context.currentResources.length > 0;
              },
            },
            {
              target: 'Loading',
            },
          ],
        },
        LoadFilters: {
          invoke: {
            src: 'getFilters',
            input: ({ context }) => {
              if (context.resourceSettings.resourceNamespace !== 'library') {
                throw new Error('filters not implemented for shopify resources');
              }
              return {
                handler: context.resourceSettings.filtersHandler,
                resourceType: context.resourceSettings.resourceType,
              };
            },
            onError: {
              actions: handleInvokeError,
              target: 'Edit',
            },
            onDone: {
              actions: assign(({ event, context }) =>
                create(context, (draft) => {
                  draft.filters = event.output.filters;
                }),
              ),
              target: 'Check',
            },
          },
        },
        Loading: {
          invoke: {
            input: ({ context }) => {
              console.log('invoke loading context:', context);

              if (context.resourceSettings.resourceNamespace !== 'library') {
                return;
              }

              return {
                handler: context.resourceSettings.queryHandler,
                query: context.currentQuery,
              };
            },
            src: 'getLibraryItem',
            onDone: {
              actions: assign(({ event, context }) =>
                create(context, (draft) => {
                  draft.currentResources = event.output.libraryItems;
                  draft.currentPageInfo = event.output.pageInfo;
                  draft.currentQuery.endCursor = event.output.pageInfo.endCursor ?? null;
                }),
              ),
              target: 'Edit',
            },
            onError: {
              actions: handleInvokeError,
              target: 'Edit',
            },
          },
        },
        Edit: {
          initial: 'Selecting',
          on: {
            'library.items.loadMore': {
              target: 'LoadMore',
            },
            'library.query.editQuery': {
              actions: ['editSearch', 'clearQueryEndCursor'],
              target: '#resourcePicker.Open.Edit.Searching',
            },
          },
          states: {
            Selecting: {
              on: {
                'rp.query.filters.edit': {
                  actions: ['editFilter', 'clearQueryEndCursor'],
                  target: '#resourcePicker.Open.Loading',
                },
                'library.query.filters.clearAll': {
                  actions: ['clearFilters', 'clearQueryEndCursor'],
                  target: '#resourcePicker.Open.Loading',
                },
                'library.item.select': {
                  actions: assign(({ event, context }) => {
                    const itemId = event.payload.itemId;
                    const item = context.currentResources.find((item) => item.id === itemId);

                    if (!item) {
                      throw new Error(`item ${itemId} not found in currentResources`);
                    }

                    return create(context, (draft) => {
                      if (context.resourceSettings.selectionType === 'single') {
                        draft.selectedItems.clear();
                      }
                      draft.selectedItems.set(event.payload.itemId, item);
                    });
                  }),
                  target: 'AnalyzeSelection',
                },
                'library.item.unselect': {
                  actions: assign(({ event, context }) =>
                    create(context, (draft) => {
                      draft.selectedItems.delete(event.payload.itemId);
                    }),
                  ),
                },
                'library.done': {
                  target: '#resourcePicker.Done',
                },
              },
            },
            Searching: {
              on: {
                'library.query.editQuery': {
                  actions: ['clearQueryEndCursor', 'editSearch'],
                  target: 'Searching',
                  reenter: true,
                },
              },
              after: {
                5e2: {
                  target: '#resourcePicker.Open.Loading',
                },
              },
            },
            AnalyzeSelection: {
              always: [
                {
                  guard: ({ context }) => {
                    return (
                      // context.selectedItemIds.length === 1 &&
                      context.resourceSettings.selectionType === 'single'
                    );
                  },

                  target: '#resourcePicker.Done',
                },
                {
                  target: 'Selecting',
                },
              ],
            },
          },
        },
        LoadMore: {
          initial: 'Retrieve',
          states: {
            Retrieve: {
              invoke: {
                input: ({ context }) => ({
                  handler: context.resourceSettings.queryHandler,
                  query: context.currentQuery,
                }),
                src: 'getLibraryItem',
                onDone: {
                  actions: assign(({ event, context }) =>
                    create(context, (draft) => {
                      draft.currentResources.push(...event.output.libraryItems);
                      draft.currentPageInfo = event.output.pageInfo;
                      draft.currentQuery.endCursor = event.output.pageInfo.endCursor ?? null;
                    }),
                  ),
                  target: 'Retrieved',
                },
              },
            },
            Retrieved: {
              after: {
                2e2: {
                  target: '#resourcePicker.Open.Edit',
                },
              },
            },
          },
        },
      },
    },
    Done: {
      always: [
        {
          actions: ['sendSelectedItemsToParent', 'clearSelected'],
          target: '#resourcePicker.Closed',
        },
      ],
    },
  },
});
