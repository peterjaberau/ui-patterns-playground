// workflowMachine?.ts
import { assign, setup } from 'xstate';

export type WorkflowToParentEvent = { type: 'SELECTION_UPDATED'; selection: any; origin: string };

export const workflowMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    setWorkflowRunningData: assign({
      workflowRunningData: (_, e) => e?.value,
    }),
    setNotInitialWorkflow: assign({
      notInitialWorkflow: (_, e) => e?.value,
    }),
    setClipboardElements: assign({
      clipboardElements: (_, e) => e?.value,
    }),
    setSelection: assign({
      selection: ({ context, event }, e) => {
        context.self?.sendToParent?.({
          type: 'SELECTION_UPDATED',
          selection: e?.value,
          origin: context.self.id,
        });
        return e?.value;
      },
    }),
    setBundleNodeSize: assign({
      bundleNodeSize: (_, e) => e?.value,
    }),
    setControlMode: assign({
      controlMode: (_, e) => {
        localStorage?.setItem('workflow-operation-mode', e?.value);
        return e?.value;
      },
    }),
    setMousePosition: assign({
      mousePosition: (_, e) => e?.value,
    }),
    setShowConfirm: assign({
      showConfirm: (_, e) => e?.value,
    }),
    setControlPromptEditorRerenderKey: assign({
      controlPromptEditorRerenderKey: (_, e) => e?.value,
    }),
    setShowImportDSLModal: assign({
      showImportDSLModal: (_, e) => e?.value,
    }),
    setShowTips: assign({
      showTips: (_, e) => e?.value,
    }),
  },
}).createMachine({
  id: 'workflow',
  context: {
    appId: '',
    workflowRunningData: undefined,
    notInitialWorkflow: false,
    clipboardElements: [],
    selection: null,
    bundleNodeSize: null,
    controlMode: 'hand', // default fallback
    mousePosition: { pageX: 0, pageY: 0, elementX: 0, elementY: 0 },
    showConfirm: undefined,
    controlPromptEditorRerenderKey: 0,
    showImportDSLModal: false,
    showTips: '',
  },
  on: {
    SET_WORKFLOW_RUNNING_DATA: { actions: 'setWorkflowRunningData' },
    SET_NOT_INITIAL_WORKFLOW: { actions: 'setNotInitialWorkflow' },
    SET_CLIPBOARD_ELEMENTS: { actions: 'setClipboardElements' },
    SET_SELECTION: { actions: 'setSelection' },
    SET_BUNDLE_NODE_SIZE: { actions: 'setBundleNodeSize' },
    SET_CONTROL_MODE: { actions: 'setControlMode' },
    SET_MOUSE_POSITION: { actions: 'setMousePosition' },
    SET_SHOW_CONFIRM: { actions: 'setShowConfirm' },
    SET_CONTROL_PROMPT_EDITOR_RERENDER_KEY: { actions: 'setControlPromptEditorRerenderKey' },
    SET_SHOW_IMPORT_DSL_MODAL: { actions: 'setShowImportDSLModal' },
    SET_SHOW_TIPS: { actions: 'setShowTips' },
  },
});
