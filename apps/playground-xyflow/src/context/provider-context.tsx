"use client";

import { createContext, useContext, useContextSelector } from "use-context-selector";
import useSWR from "swr";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { fetchModelList, fetchModelProviders, fetchSupportRetrievalMethods } from "@/service/.mock-api/common";
import {
  CurrentSystemQuotaTypeEnum,
  ModelStatusEnum,
  ModelTypeEnum,
} from "@/types/account/model-provider/declarations";
import type { Model, ModelProvider } from "@/types/account/model-provider/declarations";
import type { RETRIEVE_METHOD } from "@/types/app";
import Toast from "@/app/components/base/toast";
import { noop } from "lodash-es";

type ProviderContextState = {
  modelProviders: ModelProvider[];
  refreshModelProviders: () => void;
  textGenerationModelList: Model[];
  supportRetrievalMethods: RETRIEVE_METHOD[];
  isAPIKeySet: boolean;
  plan: {
    type: any;
    usage: any;
    total: any;
  };
  isFetchedPlan: boolean;
  enableBilling: boolean;
  onPlanInfoChanged: () => void;
  enableReplaceWebAppLogo: boolean;
  modelLoadBalancingEnabled: boolean;
  datasetOperatorEnabled: boolean;
  enableEducationPlan: boolean;
  isEducationWorkspace: boolean;
  isEducationAccount: boolean;
  [key: string]: any;
};
const ProviderContext = createContext<ProviderContextState>({
  modelProviders: [],
  refreshModelProviders: noop,
  textGenerationModelList: [],
  supportRetrievalMethods: [],
  isAPIKeySet: true,
  plan: {
    type: "sandbox",
    usage: {
      vectorSpace: 32,
      buildApps: 12,
      teamMembers: 1,
      annotatedResponse: 1,
      documentsUploadQuota: 50,
    },
    total: {
      vectorSpace: 200,
      buildApps: 50,
      teamMembers: 1,
      annotatedResponse: 10,
      documentsUploadQuota: 500,
    },
  },
  isFetchedPlan: false,
  enableBilling: false,
  onPlanInfoChanged: noop,
  enableReplaceWebAppLogo: false,
  modelLoadBalancingEnabled: false,
  datasetOperatorEnabled: false,
  enableEducationPlan: false,
  isEducationWorkspace: false,
  isEducationAccount: false,
});

export const useProviderContext = () => useContext(ProviderContext);

// Adding a dangling comma to avoid the generic parsing issue in tsx, see:
// https://github.com/microsoft/TypeScript/issues/15713
export const useProviderContextSelector = <T,>(selector: (state: ProviderContextState) => T): T =>
  useContextSelector(ProviderContext, selector);

type ProviderContextProviderProps = {
  children: React.ReactNode;
};
export const ProviderContextProvider = ({ children }: ProviderContextProviderProps) => {
  const { data: providersData, mutate: refreshModelProviders } = useSWR(
    "/workspaces/current/model-providers",
    fetchModelProviders
  );
  const fetchModelListUrlPrefix = "/workspaces/current/models/model-types/";
  const { data: textGenerationModelList } = useSWR(
    `${fetchModelListUrlPrefix}${ModelTypeEnum.textGeneration}`,
    fetchModelList
  );
  const { data: supportRetrievalMethods } = useSWR("/datasets/retrieval-setting", fetchSupportRetrievalMethods);

  const [isFetchedPlan, setIsFetchedPlan] = useState(false);
  const [enableBilling, setEnableBilling] = useState(true);
  const [enableReplaceWebAppLogo, setEnableReplaceWebAppLogo] = useState(false);
  const [modelLoadBalancingEnabled, setModelLoadBalancingEnabled] = useState(false);
  const [datasetOperatorEnabled, setDatasetOperatorEnabled] = useState(false);

  const [enableEducationPlan, setEnableEducationPlan] = useState(false);
  const [isEducationWorkspace, setIsEducationWorkspace] = useState(false);

  const { t } = useTranslation();

  return (
    <ProviderContext.Provider
      value={
        {
          modelProviders: providersData?.data || [],
          refreshModelProviders,
          textGenerationModelList: textGenerationModelList?.data || [],
          isAPIKeySet: !!textGenerationModelList?.data.some((model) => model.status === ModelStatusEnum.active),
          supportRetrievalMethods: supportRetrievalMethods?.retrieval_method || [],
          enableReplaceWebAppLogo,
          modelLoadBalancingEnabled,
          datasetOperatorEnabled,
        } as any
      }
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default ProviderContext;
