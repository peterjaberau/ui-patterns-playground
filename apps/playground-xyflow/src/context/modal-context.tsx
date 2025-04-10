"use client";

import type { Dispatch, SetStateAction } from "react";
import { useCallback, useState } from "react";
import { createContext, useContext, useContextSelector } from "use-context-selector";
import { useRouter, useSearchParams } from "next/navigation";
import type {
  ConfigurationMethodEnum,
  CustomConfigurationModelFixedFields,
  ModelLoadBalancingConfigEntry,
  ModelProvider,
} from "@/types/account/model-provider/declarations";

import type { ModerationConfig, PromptVariable } from "@/models/debug";
import type { ApiBasedExtension, ExternalDataTool } from "@/models/common";
import type { CreateExternalAPIReq } from "@/types/components/datasets/external-api/declarations";
import type { InputVar } from "@/types/components/workflow/types";
import type { UpdatePluginPayload } from "@/types/components/plugins/types";
import { removeSpecificQueryParam } from "@/utils";
import { noop } from "lodash-es";

export type ModalState<T> = {
  payload: T;
  onCancelCallback?: () => void;
  onSaveCallback?: (newPayload: T) => void;
  onRemoveCallback?: (newPayload: T) => void;
  onEditCallback?: (newPayload: T) => void;
  onValidateBeforeSaveCallback?: (newPayload: T) => boolean;
  isEditMode?: boolean;
  datasetBindings?: { id: string; name: string }[];
};

export type ModelModalType = {
  currentProvider: ModelProvider;
  currentConfigurationMethod: ConfigurationMethodEnum;
  currentCustomConfigurationModelFixedFields?: CustomConfigurationModelFixedFields;
};
export type LoadBalancingEntryModalType = ModelModalType & {
  entry?: ModelLoadBalancingConfigEntry;
  index?: number;
};

export type ModalContextState = {
  setShowAccountSettingModal: Dispatch<SetStateAction<ModalState<string> | null>>;
  setShowApiBasedExtensionModal: Dispatch<SetStateAction<ModalState<ApiBasedExtension> | null>>;
  setShowModerationSettingModal: Dispatch<SetStateAction<ModalState<ModerationConfig> | null>>;
  setShowExternalDataToolModal: Dispatch<SetStateAction<ModalState<ExternalDataTool> | null>>;
  setShowPricingModal: () => void;
  setShowAnnotationFullModal: () => void;
  setShowModelModal: Dispatch<SetStateAction<ModalState<ModelModalType> | null>>;
  setShowExternalKnowledgeAPIModal: Dispatch<SetStateAction<ModalState<CreateExternalAPIReq> | null>>;
  setShowModelLoadBalancingModal: any;
  setShowModelLoadBalancingEntryModal: Dispatch<SetStateAction<ModalState<LoadBalancingEntryModalType> | null>>;
  setShowOpeningModal: any;
  setShowUpdatePluginModal: Dispatch<SetStateAction<ModalState<UpdatePluginPayload> | null>>;
};
const ModalContext = createContext<ModalContextState>({
  setShowAccountSettingModal: noop,
  setShowApiBasedExtensionModal: noop,
  setShowModerationSettingModal: noop,
  setShowExternalDataToolModal: noop,
  setShowPricingModal: noop,
  setShowAnnotationFullModal: noop,
  setShowModelModal: noop,
  setShowExternalKnowledgeAPIModal: noop,
  setShowModelLoadBalancingModal: noop,
  setShowModelLoadBalancingEntryModal: noop,
  setShowOpeningModal: noop,
  setShowUpdatePluginModal: noop,
});

export const useModalContext = () => useContext(ModalContext);

// Adding a dangling comma to avoid the generic parsing issue in tsx, see:
// https://github.com/microsoft/TypeScript/issues/15713
export const useModalContextSelector = <T,>(selector: (state: ModalContextState) => T): T =>
  useContextSelector(ModalContext, selector);

type ModalContextProviderProps = {
  children: React.ReactNode;
};
export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [showAccountSettingModal, setShowAccountSettingModal] = useState<ModalState<string> | null>(null);
  const [showApiBasedExtensionModal, setShowApiBasedExtensionModal] = useState<ModalState<ApiBasedExtension> | null>(
    null
  );
  const [showModerationSettingModal, setShowModerationSettingModal] = useState<ModalState<ModerationConfig> | null>(
    null
  );
  const [showExternalDataToolModal, setShowExternalDataToolModal] = useState<ModalState<ExternalDataTool> | null>(null);
  const [showModelModal, setShowModelModal] = useState<ModalState<ModelModalType> | null>(null);
  const [showExternalKnowledgeAPIModal, setShowExternalKnowledgeAPIModal] =
    useState<ModalState<CreateExternalAPIReq> | null>(null);
  const [showModelLoadBalancingModal, setShowModelLoadBalancingModal] = useState<any | null>(null);
  const [showModelLoadBalancingEntryModal, setShowModelLoadBalancingEntryModal] =
    useState<ModalState<LoadBalancingEntryModalType> | null>(null);
  const [showOpeningModal, setShowOpeningModal] = useState<any | null>(null);
  const [showUpdatePluginModal, setShowUpdatePluginModal] = useState<ModalState<UpdatePluginPayload> | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPricingModal, setShowPricingModal] = useState(searchParams.get("show-pricing") === "1");
  const [showAnnotationFullModal, setShowAnnotationFullModal] = useState(false);
  const handleCancelAccountSettingModal = () => {
    removeSpecificQueryParam("action");
    setShowAccountSettingModal(null);
    if (showAccountSettingModal?.onCancelCallback) showAccountSettingModal?.onCancelCallback();
  };

  const handleCancelModerationSettingModal = () => {
    setShowModerationSettingModal(null);
    if (showModerationSettingModal?.onCancelCallback) showModerationSettingModal.onCancelCallback();
  };

  const handleCancelExternalDataToolModal = () => {
    setShowExternalDataToolModal(null);
    if (showExternalDataToolModal?.onCancelCallback) showExternalDataToolModal.onCancelCallback();
  };

  const handleCancelModelModal = useCallback(() => {
    setShowModelModal(null);
    if (showModelModal?.onCancelCallback) showModelModal.onCancelCallback();
  }, [showModelModal]);

  const handleSaveModelModal = useCallback(() => {
    if (showModelModal?.onSaveCallback) showModelModal.onSaveCallback(showModelModal.payload);
    setShowModelModal(null);
  }, [showModelModal]);

  const handleCancelExternalApiModal = useCallback(() => {
    setShowExternalKnowledgeAPIModal(null);
    if (showExternalKnowledgeAPIModal?.onCancelCallback) showExternalKnowledgeAPIModal.onCancelCallback();
  }, [showExternalKnowledgeAPIModal]);

  const handleSaveExternalApiModal = useCallback(
    async (updatedFormValue: CreateExternalAPIReq) => {
      if (showExternalKnowledgeAPIModal?.onSaveCallback) showExternalKnowledgeAPIModal.onSaveCallback(updatedFormValue);
      setShowExternalKnowledgeAPIModal(null);
    },
    [showExternalKnowledgeAPIModal]
  );

  const handleEditExternalApiModal = useCallback(
    async (updatedFormValue: CreateExternalAPIReq) => {
      if (showExternalKnowledgeAPIModal?.onEditCallback) showExternalKnowledgeAPIModal.onEditCallback(updatedFormValue);
      setShowExternalKnowledgeAPIModal(null);
    },
    [showExternalKnowledgeAPIModal]
  );

  const handleCancelModelLoadBalancingEntryModal = useCallback(() => {
    showModelLoadBalancingEntryModal?.onCancelCallback?.();
    setShowModelLoadBalancingEntryModal(null);
  }, [showModelLoadBalancingEntryModal]);

  const handleCancelOpeningModal = useCallback(() => {
    setShowOpeningModal(null);
    if (showOpeningModal?.onCancelCallback) showOpeningModal.onCancelCallback();
  }, [showOpeningModal]);

  const handleSaveModelLoadBalancingEntryModal = useCallback(
    (entry: ModelLoadBalancingConfigEntry) => {
      showModelLoadBalancingEntryModal?.onSaveCallback?.({
        ...showModelLoadBalancingEntryModal.payload,
        entry,
      });
      setShowModelLoadBalancingEntryModal(null);
    },
    [showModelLoadBalancingEntryModal]
  );

  const handleRemoveModelLoadBalancingEntry = useCallback(() => {
    showModelLoadBalancingEntryModal?.onRemoveCallback?.(showModelLoadBalancingEntryModal.payload);
    setShowModelLoadBalancingEntryModal(null);
  }, [showModelLoadBalancingEntryModal]);

  const handleSaveApiBasedExtension = (newApiBasedExtension: ApiBasedExtension) => {
    if (showApiBasedExtensionModal?.onSaveCallback) showApiBasedExtensionModal.onSaveCallback(newApiBasedExtension);
    setShowApiBasedExtensionModal(null);
  };

  const handleSaveModeration = (newModerationConfig: ModerationConfig) => {
    if (showModerationSettingModal?.onSaveCallback) showModerationSettingModal.onSaveCallback(newModerationConfig);
    setShowModerationSettingModal(null);
  };

  const handleSaveExternalDataTool = (newExternalDataTool: ExternalDataTool) => {
    if (showExternalDataToolModal?.onSaveCallback) showExternalDataToolModal.onSaveCallback(newExternalDataTool);
    setShowExternalDataToolModal(null);
  };

  const handleValidateBeforeSaveExternalDataTool = (newExternalDataTool: ExternalDataTool) => {
    if (showExternalDataToolModal?.onValidateBeforeSaveCallback)
      return showExternalDataToolModal?.onValidateBeforeSaveCallback(newExternalDataTool);
    return true;
  };

  const handleSaveOpeningModal = (newOpening: any) => {};

  return (
    <ModalContext.Provider
      value={{
        setShowAccountSettingModal,
        setShowApiBasedExtensionModal,
        setShowModerationSettingModal,
        setShowExternalDataToolModal,
        setShowPricingModal: () => setShowPricingModal(true),
        setShowAnnotationFullModal: () => setShowAnnotationFullModal(true),
        setShowModelModal,
        setShowExternalKnowledgeAPIModal,
        setShowModelLoadBalancingModal,
        setShowModelLoadBalancingEntryModal,
        setShowOpeningModal,
        setShowUpdatePluginModal,
      }}
    >
      <>{children}</>
    </ModalContext.Provider>
  );
};

export default ModalContext;
