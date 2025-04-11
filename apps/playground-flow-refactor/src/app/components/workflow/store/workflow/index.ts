import { debounce } from "lodash-es";
import { useContext } from "react";
import { useStore as useZustandStore } from "zustand";
import { createStore } from "zustand/vanilla";
import { WorkflowContext } from "@/app/components/workflow/context";

export const createFormSlice: any = (set: any) => ({
  inputs: {},
  setInputs: (inputs: any) => set(() => ({ inputs })),
  files: [],
  setFiles: (files: any) => set(() => ({ files })),
});

export const createNodeSlice: any = (set: any): any => ({
  showSingleRunPanel: false,
  setShowSingleRunPanel: (showSingleRunPanel: any) => set(() => ({ showSingleRunPanel })),
  nodesDefaultConfigs: {},
  setNodesDefaultConfigs: (nodesDefaultConfigs: any) => set(() => ({ nodesDefaultConfigs })),
  nodeAnimation: false,
  setNodeAnimation: (nodeAnimation: any) => set(() => ({ nodeAnimation })),
  candidateNode: undefined,
  setCandidateNode: (candidateNode: any) => set(() => ({ candidateNode })),
  nodeMenu: undefined,
  setNodeMenu: (nodeMenu: any) => set(() => ({ nodeMenu })),
  showAssignVariablePopup: undefined,
  setShowAssignVariablePopup: (showAssignVariablePopup: any) => set(() => ({ showAssignVariablePopup })),
  hoveringAssignVariableGroupId: undefined,
  setHoveringAssignVariableGroupId: (hoveringAssignVariableGroupId: any) =>
    set(() => ({ hoveringAssignVariableGroupId })),
  connectingNodePayload: undefined,
  setConnectingNodePayload: (connectingNodePayload: any) => set(() => ({ connectingNodePayload })),
  enteringNodePayload: undefined,
  setEnteringNodePayload: (enteringNodePayload: any) => set(() => ({ enteringNodePayload })),
  iterTimes: 1,
  setIterTimes: (iterTimes: any) => set(() => ({ iterTimes })),
  loopTimes: 1,
  setLoopTimes: (loopTimes: any) => set(() => ({ loopTimes })),
  iterParallelLogMap: new Map<string, Map<string, any[]>>(),
  setIterParallelLogMap: (iterParallelLogMap: any) => set(() => ({ iterParallelLogMap })),
});

export const createWorkflowStore = () => {
  return createStore<any>((...args) => ({
    ...createChatVariableSlice(...args),
    ...createEnvVariableSlice(...args),
    ...createFormSlice(...args),
    ...createHelpLineSlice(...args),
    ...createHistorySlice(...args),
    ...createNodeSlice(...args),
    ...createPanelSlice(...args),
    ...createToolSlice(...args),
    ...createVersionSlice(...args),
    ...createWorkflowDraftSlice(...args),
    ...createWorkflowSlice(...args),
  }));
};

export const createChatVariableSlice: any = (set: any): any => {
  const hideAllPanel = {
    showDebugAndPreviewPanel: false,
    showEnvPanel: false,
    showChatVariablePanel: false,
    showGlobalVariablePanel: false,
  };

  return {
    showChatVariablePanel: false,
    setShowChatVariablePanel: (showChatVariablePanel: any) => set(() => ({ showChatVariablePanel })),
    showGlobalVariablePanel: false,
    setShowGlobalVariablePanel: (showGlobalVariablePanel: any) =>
      set(() => {
        if (showGlobalVariablePanel) return { ...hideAllPanel, showGlobalVariablePanel: true };
        else return { showGlobalVariablePanel: false };
      }),
    conversationVariables: [],
    setConversationVariables: (conversationVariables: any) => set(() => ({ conversationVariables })),
  };
};

export const createEnvVariableSlice: any = (set: any): any => ({
  showEnvPanel: false,
  setShowEnvPanel: (showEnvPanel: any) => set(() => ({ showEnvPanel })),
  environmentVariables: [],
  setEnvironmentVariables: (environmentVariables: any) => set(() => ({ environmentVariables })),
  envSecrets: {},
  setEnvSecrets: (envSecrets: any) => set(() => ({ envSecrets })),
});

export const createHelpLineSlice: any = (set: any) => ({
  helpLineHorizontal: undefined,
  setHelpLineHorizontal: (helpLineHorizontal: any) => set(() => ({ helpLineHorizontal })),
  helpLineVertical: undefined,
  setHelpLineVertical: (helpLineVertical: any) => set(() => ({ helpLineVertical })),
});

export const createHistorySlice: any = (set: any): any => ({
  historyWorkflowData: undefined,
  setHistoryWorkflowData: (historyWorkflowData: any) => set(() => ({ historyWorkflowData })),
  showRunHistory: false,
  setShowRunHistory: (showRunHistory: any) => set(() => ({ showRunHistory })),
  versionHistory: [],
  setVersionHistory: (versionHistory: any) => set(() => ({ versionHistory })),
});

export const createPanelSlice: any = (set: any): any => ({
  panelWidth: localStorage.getItem("workflow-node-panel-width")
    ? Number.parseFloat(localStorage.getItem("workflow-node-panel-width")!)
    : 420,
  showFeaturesPanel: false,
  setShowFeaturesPanel: (showFeaturesPanel: any) => set(() => ({ showFeaturesPanel })),
  showWorkflowVersionHistoryPanel: false,
  setShowWorkflowVersionHistoryPanel: (showWorkflowVersionHistoryPanel: any) =>
    set(() => ({ showWorkflowVersionHistoryPanel })),
  showInputsPanel: false,
  setShowInputsPanel: (showInputsPanel: any) => set(() => ({ showInputsPanel })),
  showDebugAndPreviewPanel: false,
  setShowDebugAndPreviewPanel: (showDebugAndPreviewPanel: any) => set(() => ({ showDebugAndPreviewPanel })),
  panelMenu: undefined,
  setPanelMenu: (panelMenu: any) => set(() => ({ panelMenu })),
});

export const createToolSlice: any = (set: any): any => ({
  buildInTools: [],
  setBuildInTools: (buildInTools: any) => set(() => ({ buildInTools })),
  customTools: [],
  setCustomTools: (customTools: any) => set(() => ({ customTools })),
  workflowTools: [],
  setWorkflowTools: (workflowTools: any) => set(() => ({ workflowTools })),
  toolPublished: false,
  setToolPublished: (toolPublished: any) => set(() => ({ toolPublished })),
});

export const createVersionSlice: any = (set: any) => ({
  draftUpdatedAt: 0,
  setDraftUpdatedAt: (draftUpdatedAt: any) =>
    set(() => ({ draftUpdatedAt: draftUpdatedAt ? draftUpdatedAt * 1000 : 0 })),
  publishedAt: 0,
  setPublishedAt: (publishedAt: any) => set(() => ({ publishedAt: publishedAt ? publishedAt * 1000 : 0 })),
  currentVersion: null,
  setCurrentVersion: (currentVersion: any) => set(() => ({ currentVersion })),
  isRestoring: false,
  setIsRestoring: (isRestoring: any) => set(() => ({ isRestoring })),
});

export const createWorkflowDraftSlice: any = (set: any): any => ({
  backupDraft: undefined,
  setBackupDraft: (backupDraft: any) => set(() => ({ backupDraft })),
  debouncedSyncWorkflowDraft: debounce((syncWorkflowDraft) => {
    syncWorkflowDraft();
  }, 5000),
  syncWorkflowDraftHash: "",
  setSyncWorkflowDraftHash: (syncWorkflowDraftHash: any) => set(() => ({ syncWorkflowDraftHash })),
  isSyncingWorkflowDraft: false,
  setIsSyncingWorkflowDraft: (isSyncingWorkflowDraft: any) => set(() => ({ isSyncingWorkflowDraft })),
});

export const createWorkflowSlice: any = (set: any): any => ({
  appId: "",
  workflowRunningData: undefined,
  setWorkflowRunningData: (workflowRunningData: any) => set(() => ({ workflowRunningData })),
  notInitialWorkflow: false,
  setNotInitialWorkflow: (notInitialWorkflow: any) => set(() => ({ notInitialWorkflow })),
  clipboardElements: [],
  setClipboardElements: (clipboardElements: any) => set(() => ({ clipboardElements })),
  selection: null,
  setSelection: (selection: any) => set(() => ({ selection })),
  bundleNodeSize: null,
  setBundleNodeSize: (bundleNodeSize: any) => set(() => ({ bundleNodeSize })),
  controlMode: localStorage.getItem("workflow-operation-mode") === "pointer" ? "pointer" : "hand",
  setControlMode: (controlMode: any) => {
    set(() => ({ controlMode }));
    localStorage.setItem("workflow-operation-mode", controlMode);
  },
  mousePosition: { pageX: 0, pageY: 0, elementX: 0, elementY: 0 },
  setMousePosition: (mousePosition: any) => set(() => ({ mousePosition })),
  showConfirm: undefined,
  setShowConfirm: (showConfirm: any) => set(() => ({ showConfirm })),
  controlPromptEditorRerenderKey: 0,
  setControlPromptEditorRerenderKey: (controlPromptEditorRerenderKey: any) =>
    set(() => ({ controlPromptEditorRerenderKey })),
  showImportDSLModal: false,
  setShowImportDSLModal: (showImportDSLModal: any) => set(() => ({ showImportDSLModal })),
  showTips: "",
  setShowTips: (showTips: any) => set(() => ({ showTips })),
});

// workflow store

export function useStore(selector: any) {
  const store = useContext(WorkflowContext);
  if (!store) throw new Error("Missing WorkflowContext.Provider in the tree");

  return useZustandStore(store, selector);
}

export const useWorkflowStore = () => {
  return useContext(WorkflowContext)!;
};
