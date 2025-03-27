export const WorkflowExecutionListTable = {
  HelloWorld01: {
    columns: [
      {
        header: 'Transaction ID',
        accessorKey: 'transaction_id',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
      {
        header: 'Progress',
        accessorKey: 'execution',
      },
    ],
    table: {
      _features: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      options: {
        filterFromLeafRows: false,
        maxLeafRowFilterDepth: 100,
        globalFilterFn: 'auto',
        groupedColumnMode: 'reorder',
        paginateExpandedRows: true,
        enableRowSelection: false,
        enableMultiRowSelection: true,
        enableSubRowSelection: true,
        columnResizeMode: 'onEnd',
        columnResizeDirection: 'ltr',
        state: {
          columnSizing: {},
          columnSizingInfo: {
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            isResizingColumn: false,
            columnSizingStart: [],
          },
          rowSelection: {},
          rowPinning: {
            top: [],
            bottom: [],
          },
          expanded: {},
          grouping: [],
          sorting: [],
          columnFilters: [],
          columnPinning: {
            left: [],
            right: [],
          },
          columnOrder: [],
          columnVisibility: {},
          pagination: {
            pageIndex: 0,
            pageSize: 20,
          },
        },
        renderFallbackValue: null,
        data: [
          {
            id: 'wf_exec_01JQBA71FPKM8TC1FDR5PXYQRR',
            workflow_id: 'hello-world',
            transaction_id: '01JQBA71FGRT2Q2FEENF6R3RHN',
            state: 'done',
            created_at: '2025-03-26T21:06:35.766Z',
            updated_at: '2025-03-26T21:06:35.776Z',
            deleted_at: null,
          },
        ],
        columns: [
          {
            header: 'Transaction ID',
            accessorKey: 'transaction_id',
          },
          {
            header: 'State',
            accessorKey: 'state',
          },
          {
            header: 'Progress',
            accessorKey: 'execution',
          },
        ],
        pageCount: 1,
        manualPagination: true,
      },
      initialState: {
        columnSizing: {},
        columnSizingInfo: {
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          isResizingColumn: false,
          columnSizingStart: [],
        },
        rowSelection: {},
        rowPinning: {
          top: [],
          bottom: [],
        },
        expanded: {},
        grouping: [],
        sorting: [],
        columnFilters: [],
        columnPinning: {
          left: [],
          right: [],
        },
        columnOrder: [],
        columnVisibility: {},
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
    },
  },
};

export const WorkflowExecutionDetail = {
  HelloWorld01: {
    workflow_execution: {
      id: 'wf_exec_01JQBA71FPKM8TC1FDR5PXYQRR',
      workflow_id: 'hello-world',
      transaction_id: '01JQBA71FGRT2Q2FEENF6R3RHN',
      context: {
        data: {
          invoke: {
            'step-1': {
              __type: 'Symbol(WorkflowWorkflowData)',
              output: {
                __type: 'Symbol(WorkflowStepResponse)',
                output: 'Hello from step one!',
                compensateInput: 'Hello from step one!',
              },
            },
            'step-2': {
              __type: 'Symbol(WorkflowWorkflowData)',
              output: {
                __type: 'Symbol(WorkflowStepResponse)',
                output: 'Hello YourName from step two!',
                compensateInput: 'Hello YourName from step two!',
              },
            },
          },
          payload: {
            name: 'YourName',
          },
          compensate: {},
        },
        errors: [],
      },
      execution: {
        state: 'done',
        steps: {
          _root: {
            id: '_root',
            next: ['_root.step-1'],
          },
          '_root.step-1': {
            id: '_root.step-1',
            next: ['_root.step-1.step-2'],
            uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
            depth: 1,
            invoke: {
              state: 'done',
              status: 'ok',
            },
            attempts: 1,
            failures: 0,
            startedAt: 1743062795772,
            compensate: {
              state: 'dormant',
              status: 'idle',
            },
            definition: {
              uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
              action: 'step-1',
              noCompensation: false,
            },
            stepFailed: false,
            lastAttempt: 1743062795772,
            saveResponse: true,
          },
          '_root.step-1.step-2': {
            id: '_root.step-1.step-2',
            next: [],
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            depth: 2,
            invoke: {
              state: 'done',
              status: 'ok',
            },
            attempts: 1,
            failures: 0,
            startedAt: 1743062795772,
            compensate: {
              state: 'dormant',
              status: 'idle',
            },
            definition: {
              uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
              action: 'step-2',
              noCompensation: false,
            },
            stepFailed: false,
            lastAttempt: 1743062795772,
            saveResponse: true,
          },
        },
        modelId: 'hello-world',
        options: {
          name: 'hello-world',
          store: true,
          retentionTime: 86400,
        },
        metadata: {
          sourcePath:
            '/Users/peterjaber/Desktop/Easyflow.io/Code/medusa-create-app/my-medusa-store/src/workflows/hello-world/index.ts',
          eventGroupId: '01JQBA71FGEDNAJRSMHB9REME1',
        },
        startedAt: 1743062795760,
        definition: {
          next: {
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            action: 'step-2',
            noCompensation: false,
          },
          uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
          action: 'step-1',
          noCompensation: false,
        },
        timedOutAt: null,
        hasAsyncSteps: false,
        transactionId: '01JQBA71FGRT2Q2FEENF6R3RHN',
        hasFailedSteps: false,
        hasSkippedSteps: false,
        hasWaitingSteps: false,
        hasRevertedSteps: false,
        hasSkippedOnFailureSteps: false,
      },
      state: 'done',
      created_at: '2025-03-26T21:06:35.766Z',
      updated_at: '2025-03-26T21:06:35.776Z',
      deleted_at: null,
    },
  },
};

export const WorkflowExecutionGeneralSection = {
  HelloWorld01: {
    execution: {
      id: 'wf_exec_01JQBA71FPKM8TC1FDR5PXYQRR',
      workflow_id: 'hello-world',
      transaction_id: '01JQBA71FGRT2Q2FEENF6R3RHN',
      context: {
        data: {
          invoke: {
            'step-1': {
              __type: 'Symbol(WorkflowWorkflowData)',
              output: {
                __type: 'Symbol(WorkflowStepResponse)',
                output: 'Hello from step one!',
                compensateInput: 'Hello from step one!',
              },
            },
            'step-2': {
              __type: 'Symbol(WorkflowWorkflowData)',
              output: {
                __type: 'Symbol(WorkflowStepResponse)',
                output: 'Hello YourName from step two!',
                compensateInput: 'Hello YourName from step two!',
              },
            },
          },
          payload: {
            name: 'YourName',
          },
          compensate: {},
        },
        errors: [],
      },
      execution: {
        state: 'done',
        steps: {
          _root: {
            id: '_root',
            next: ['_root.step-1'],
          },
          '_root.step-1': {
            id: '_root.step-1',
            next: ['_root.step-1.step-2'],
            uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
            depth: 1,
            invoke: {
              state: 'done',
              status: 'ok',
            },
            attempts: 1,
            failures: 0,
            startedAt: 1743062795772,
            compensate: {
              state: 'dormant',
              status: 'idle',
            },
            definition: {
              uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
              action: 'step-1',
              noCompensation: false,
            },
            stepFailed: false,
            lastAttempt: 1743062795772,
            saveResponse: true,
          },
          '_root.step-1.step-2': {
            id: '_root.step-1.step-2',
            next: [],
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            depth: 2,
            invoke: {
              state: 'done',
              status: 'ok',
            },
            attempts: 1,
            failures: 0,
            startedAt: 1743062795772,
            compensate: {
              state: 'dormant',
              status: 'idle',
            },
            definition: {
              uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
              action: 'step-2',
              noCompensation: false,
            },
            stepFailed: false,
            lastAttempt: 1743062795772,
            saveResponse: true,
          },
        },
        modelId: 'hello-world',
        options: {
          name: 'hello-world',
          store: true,
          retentionTime: 86400,
        },
        metadata: {
          sourcePath:
            '/Users/peterjaber/Desktop/Easyflow.io/Code/medusa-create-app/my-medusa-store/src/workflows/hello-world/index.ts',
          eventGroupId: '01JQBA71FGEDNAJRSMHB9REME1',
        },
        startedAt: 1743062795760,
        definition: {
          next: {
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            action: 'step-2',
            noCompensation: false,
          },
          uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
          action: 'step-1',
          noCompensation: false,
        },
        timedOutAt: null,
        hasAsyncSteps: false,
        transactionId: '01JQBA71FGRT2Q2FEENF6R3RHN',
        hasFailedSteps: false,
        hasSkippedSteps: false,
        hasWaitingSteps: false,
        hasRevertedSteps: false,
        hasSkippedOnFailureSteps: false,
      },
      state: 'done',
      created_at: '2025-03-26T21:06:35.766Z',
      updated_at: '2025-03-26T21:06:35.776Z',
      deleted_at: null,
    },
    cleanId: '01JQBA71FPKM8TC1FDR5PXYQRR',
    translatedState: 'Done',
    stateColor: 'green',
  },
};

export const WorkflowExecutionTimelineSection = {
  HelloWorld01: {
    id: 'wf_exec_01JQBA71FPKM8TC1FDR5PXYQRR',
    workflow_id: 'hello-world',
    transaction_id: '01JQBA71FGRT2Q2FEENF6R3RHN',
    context: {
      data: {
        invoke: {
          'step-1': {
            __type: 'Symbol(WorkflowWorkflowData)',
            output: {
              __type: 'Symbol(WorkflowStepResponse)',
              output: 'Hello from step one!',
              compensateInput: 'Hello from step one!',
            },
          },
          'step-2': {
            __type: 'Symbol(WorkflowWorkflowData)',
            output: {
              __type: 'Symbol(WorkflowStepResponse)',
              output: 'Hello YourName from step two!',
              compensateInput: 'Hello YourName from step two!',
            },
          },
        },
        payload: {
          name: 'YourName',
        },
        compensate: {},
      },
      errors: [],
    },
    execution: {
      state: 'done',
      steps: {
        _root: {
          id: '_root',
          next: ['_root.step-1'],
        },
        '_root.step-1': {
          id: '_root.step-1',
          next: ['_root.step-1.step-2'],
          uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
          depth: 1,
          invoke: {
            state: 'done',
            status: 'ok',
          },
          attempts: 1,
          failures: 0,
          startedAt: 1743062795772,
          compensate: {
            state: 'dormant',
            status: 'idle',
          },
          definition: {
            uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
            action: 'step-1',
            noCompensation: false,
          },
          stepFailed: false,
          lastAttempt: 1743062795772,
          saveResponse: true,
        },
        '_root.step-1.step-2': {
          id: '_root.step-1.step-2',
          next: [],
          uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
          depth: 2,
          invoke: {
            state: 'done',
            status: 'ok',
          },
          attempts: 1,
          failures: 0,
          startedAt: 1743062795772,
          compensate: {
            state: 'dormant',
            status: 'idle',
          },
          definition: {
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            action: 'step-2',
            noCompensation: false,
          },
          stepFailed: false,
          lastAttempt: 1743062795772,
          saveResponse: true,
        },
      },
      modelId: 'hello-world',
      options: {
        name: 'hello-world',
        store: true,
        retentionTime: 86400,
      },
      metadata: {
        sourcePath:
          '/Users/peterjaber/Desktop/Easyflow.io/Code/medusa-create-app/my-medusa-store/src/workflows/hello-world/index.ts',
        eventGroupId: '01JQBA71FGEDNAJRSMHB9REME1',
      },
      startedAt: 1743062795760,
      definition: {
        next: {
          uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
          action: 'step-2',
          noCompensation: false,
        },
        uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
        action: 'step-1',
        noCompensation: false,
      },
      timedOutAt: null,
      hasAsyncSteps: false,
      transactionId: '01JQBA71FGRT2Q2FEENF6R3RHN',
      hasFailedSteps: false,
      hasSkippedSteps: false,
      hasWaitingSteps: false,
      hasRevertedSteps: false,
      hasSkippedOnFailureSteps: false,
    },
    state: 'done',
    created_at: '2025-03-26T21:06:35.766Z',
    updated_at: '2025-03-26T21:06:35.776Z',
    deleted_at: null,
  },
};

export const WorkflowExecutionTimelineSection_Canvas = {
  HelloWorld01: {
    props: {
      execution: {
        id: 'wf_exec_01JQBA71FPKM8TC1FDR5PXYQRR',
        workflow_id: 'hello-world',
        transaction_id: '01JQBA71FGRT2Q2FEENF6R3RHN',
        context: {
          data: {
            invoke: {
              'step-1': {
                __type: 'Symbol(WorkflowWorkflowData)',
                output: {
                  __type: 'Symbol(WorkflowStepResponse)',
                  output: 'Hello from step one!',
                  compensateInput: 'Hello from step one!',
                },
              },
              'step-2': {
                __type: 'Symbol(WorkflowWorkflowData)',
                output: {
                  __type: 'Symbol(WorkflowStepResponse)',
                  output: 'Hello YourName from step two!',
                  compensateInput: 'Hello YourName from step two!',
                },
              },
            },
            payload: {
              name: 'YourName',
            },
            compensate: {},
          },
          errors: [],
        },
        execution: {
          state: 'done',
          steps: {
            _root: {
              id: '_root',
              next: ['_root.step-1'],
            },
            '_root.step-1': {
              id: '_root.step-1',
              next: ['_root.step-1.step-2'],
              uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
              depth: 1,
              invoke: {
                state: 'done',
                status: 'ok',
              },
              attempts: 1,
              failures: 0,
              startedAt: 1743062795772,
              compensate: {
                state: 'dormant',
                status: 'idle',
              },
              definition: {
                uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
                action: 'step-1',
                noCompensation: false,
              },
              stepFailed: false,
              lastAttempt: 1743062795772,
              saveResponse: true,
            },
            '_root.step-1.step-2': {
              id: '_root.step-1.step-2',
              next: [],
              uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
              depth: 2,
              invoke: {
                state: 'done',
                status: 'ok',
              },
              attempts: 1,
              failures: 0,
              startedAt: 1743062795772,
              compensate: {
                state: 'dormant',
                status: 'idle',
              },
              definition: {
                uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
                action: 'step-2',
                noCompensation: false,
              },
              stepFailed: false,
              lastAttempt: 1743062795772,
              saveResponse: true,
            },
          },
          modelId: 'hello-world',
          options: {
            name: 'hello-world',
            store: true,
            retentionTime: 86400,
          },
          metadata: {
            sourcePath:
              '/Users/peterjaber/Desktop/Easyflow.io/Code/medusa-create-app/my-medusa-store/src/workflows/hello-world/index.ts',
            eventGroupId: '01JQBA71FGEDNAJRSMHB9REME1',
          },
          startedAt: 1743062795760,
          definition: {
            next: {
              uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
              action: 'step-2',
              noCompensation: false,
            },
            uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
            action: 'step-1',
            noCompensation: false,
          },
          timedOutAt: null,
          hasAsyncSteps: false,
          transactionId: '01JQBA71FGRT2Q2FEENF6R3RHN',
          hasFailedSteps: false,
          hasSkippedSteps: false,
          hasWaitingSteps: false,
          hasRevertedSteps: false,
          hasSkippedOnFailureSteps: false,
        },
        state: 'done',
        created_at: '2025-03-26T21:06:35.766Z',
        updated_at: '2025-03-26T21:06:35.776Z',
        deleted_at: null,
      },
    },
    stateInitial: {
      defaultState: {
        x: -860,
        y: -1020,
        scale: 1,
      },
    },
    constants: {
      MAX_ZOOM: 1.5,
      ZOOM_STEP: 0.25,
    },
    state: {
      zoom: 1,
      isDragging: false,
      scale: {
        version: '11.15.0',
        canTrackVelocity: true,
        events: {
          change: {
            subscriptions: [null, null],
          },
          renderRequest: {
            subscriptions: [null],
          },
        },
        hasAnimated: false,
        current: 1,
        updatedAt: 1042.800000011921,
        prev: 1,
      },
      x: {
        version: '11.15.0',
        canTrackVelocity: true,
        events: {
          change: {
            subscriptions: [null],
          },
          renderRequest: {
            subscriptions: [null],
          },
        },
        hasAnimated: false,
        current: -860,
        updatedAt: 3000,
        prev: -860,
        prevFrameValue: -860,
        prevUpdatedAt: 2983.400000035763,
      },
      y: {
        version: '11.15.0',
        canTrackVelocity: true,
        events: {
          change: {
            subscriptions: [null],
          },
          renderRequest: {
            subscriptions: [null],
          },
        },
        hasAnimated: false,
        current: -1020,
        updatedAt: 3000,
        prev: -1020,
        prevFrameValue: -1020,
        prevUpdatedAt: 2983.400000035763,
      },
      canZoomIn: true,
      canZoomOut: true,
    },
  },
};

export const WorkflowExecutionTimelineSection_CanvasNodes = {
  HelloWorld01: {
    'step-1': {
      props: {
        step: {
          id: '_root.step-1',
          next: ['_root.step-1.step-2'],
          uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
          depth: 1,
          invoke: {
            state: 'done',
            status: 'ok',
          },
          attempts: 1,
          failures: 0,
          startedAt: 1743062795772,
          compensate: {
            state: 'dormant',
            status: 'idle',
          },
          definition: {
            uuid: '01JQBA6XKVVFT6CPYXGQDT05PD',
            action: 'step-1',
            noCompensation: false,
          },
          stepFailed: false,
          lastAttempt: 1743062795772,
          saveResponse: true,
        },
      },
      state: {
        stepId: 'step-1',
      },
    },
    'step-2': {
      props: {
        step: {
          id: '_root.step-1.step-2',
          next: [],
          uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
          depth: 2,
          invoke: {
            state: 'done',
            status: 'ok',
          },
          attempts: 1,
          failures: 0,
          startedAt: 1743062795772,
          compensate: {
            state: 'dormant',
            status: 'idle',
          },
          definition: {
            uuid: '01JQBA6XKV5TDDJJQS5Z0MKN22',
            action: 'step-2',
            noCompensation: false,
          },
          stepFailed: false,
          lastAttempt: 1743062795772,
          saveResponse: true,
        },
      },
      state: {
        stepId: 'step-2',
      },
    },
  },
};
