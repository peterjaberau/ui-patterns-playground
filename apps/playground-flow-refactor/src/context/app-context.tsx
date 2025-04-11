"use client";

import { createRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import { createContext, useContext, useContextSelector } from "use-context-selector";
import type { FC, ReactNode } from "react";
import { fetchAppList } from "@/service/.mock-api/apps";
import Loading from "@/app/components/base/loading";
import {
  fetchCurrentWorkspace,
  fetchLanggeniusVersion,
  fetchUserProfile,
  getSystemFeatures,
} from "@/service/.mock-api/common";
import type { App } from "@/types/app";
import type { ICurrentWorkspace, LangGeniusVersionResponse, UserProfileResponse } from "@/models/common";
// import MaintenanceNotice from "@/app/components/header/maintenance-notice";
import type { SystemFeatures } from "@/types/feature";
import { defaultSystemFeatures } from "@/types/feature";

export type AppContextValue = {
  apps: App[] | any;
  systemFeatures: SystemFeatures | any;
  mutateApps: VoidFunction;
  userProfile: UserProfileResponse | any;
  mutateUserProfile: VoidFunction;
  currentWorkspace: ICurrentWorkspace | any;
  isCurrentWorkspaceManager: boolean;
  isCurrentWorkspaceOwner: boolean;
  isCurrentWorkspaceEditor: boolean;
  isCurrentWorkspaceDatasetOperator: boolean;
  mutateCurrentWorkspace: VoidFunction;
  pageContainerRef: React.RefObject<HTMLDivElement>;
  langeniusVersionInfo: LangGeniusVersionResponse | any;
  useSelector: typeof useSelector;
  isLoadingCurrentWorkspace: boolean;
};

const initialLangeniusVersionInfo = {
  current_env: "",
  current_version: "",
  latest_version: "",
  release_date: "",
  release_notes: "",
  version: "",
  can_auto_update: false,
};

const initialWorkspaceInfo: ICurrentWorkspace = {
  id: "",
  name: "",
  plan: "",
  status: "",
  created_at: 0,
  role: "normal",
  providers: [],
};

const AppContext = createContext<AppContextValue>({
  systemFeatures: defaultSystemFeatures,
  apps: [],
  mutateApps: () => {},
  userProfile: {
    id: "",
    name: "",
    email: "",
    avatar: "",
    avatar_url: "",
    is_password_set: false,
  },
  currentWorkspace: initialWorkspaceInfo,
  isCurrentWorkspaceManager: false,
  isCurrentWorkspaceOwner: false,
  isCurrentWorkspaceEditor: false,
  isCurrentWorkspaceDatasetOperator: false,
  mutateUserProfile: () => {},
  mutateCurrentWorkspace: () => {},
  pageContainerRef: createRef(),
  langeniusVersionInfo: initialLangeniusVersionInfo,
  useSelector,
  isLoadingCurrentWorkspace: false,
});

export function useSelector<T>(selector: (value: AppContextValue) => T): T {
  return useContextSelector(AppContext, selector);
}

export type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const pageContainerRef = useRef<HTMLDivElement>(null);
  getSystemFeatures;
  const { data: appList, mutate: mutateApps } = useSWR(
    { url: "/apps", params: { page: 1, limit: 30, name: "" } },
    fetchAppList
  );
  const { data: userProfileResponse, mutate: mutateUserProfile }: any = useSWR(
    { url: "/account/profile", params: {} },
    fetchUserProfile
  );
  const {
    data: currentWorkspaceResponse,
    mutate: mutateCurrentWorkspace,
    isLoading: isLoadingCurrentWorkspace,
  }: any = useSWR({ url: "/workspaces/current", params: {} }, fetchCurrentWorkspace);

  const { data: systemFeatures } = useSWR({ url: "/console/system-features" }, getSystemFeatures, {
    fallbackData: defaultSystemFeatures,
  } as any);

  const [userProfile, setUserProfile]: any = useState<UserProfileResponse>();
  const [langeniusVersionInfo, setLangeniusVersionInfo] =
    useState<LangGeniusVersionResponse>(initialLangeniusVersionInfo);
  const [currentWorkspace, setCurrentWorkspace] = useState<ICurrentWorkspace>(initialWorkspaceInfo);
  const isCurrentWorkspaceManager = useMemo(
    () => ["owner", "admin"].includes(currentWorkspace.role),
    [currentWorkspace.role]
  );
  const isCurrentWorkspaceOwner = useMemo(() => currentWorkspace.role === "owner", [currentWorkspace.role]);
  const isCurrentWorkspaceEditor = useMemo(
    () => ["owner", "admin", "editor"].includes(currentWorkspace.role),
    [currentWorkspace.role]
  );
  const isCurrentWorkspaceDatasetOperator = useMemo(
    () => currentWorkspace.role === "dataset_operator",
    [currentWorkspace.role]
  );
  const updateUserProfileAndVersion: any = useCallback(async () => {
    console.log("userProfileResponse", userProfileResponse);

    if (userProfileResponse && !userProfileResponse.bodyUsed) {
      // const result = await userProfileResponse.json();
      const result = await userProfileResponse;
      setUserProfile(result);
      const current_version: any = "1.1.3";
      // const current_env =
      //   process.env.NODE_ENV === "development" ? "DEVELOPMENT" : userProfileResponse.headers.get("x-env");
      const current_env = "DEVELOPMENT";
      const versionData = await fetchLanggeniusVersion({ url: "/version", params: {} });
      setLangeniusVersionInfo({ ...versionData, current_version, latest_version: versionData.version, current_env });
      //
      // console.log("versionData", versionData);
      //
      // setLangeniusVersionInfo({ ...versionData, current_version, latest_version: versionData.version, current_env });
    }
  }, [userProfileResponse]);

  useEffect(() => {
    updateUserProfileAndVersion();
  }, [updateUserProfileAndVersion, userProfileResponse]);

  useEffect(() => {
    if (currentWorkspaceResponse) setCurrentWorkspace(currentWorkspaceResponse);
  }, [currentWorkspaceResponse]);

  if (!appList || !userProfile) return <Loading type="app" />;

  return (
    <AppContext.Provider
      value={{
        apps: appList.data,
        systemFeatures: { ...defaultSystemFeatures, ...systemFeatures },
        mutateApps,
        userProfile,
        mutateUserProfile,
        pageContainerRef,
        langeniusVersionInfo,
        useSelector,
        currentWorkspace,
        isCurrentWorkspaceManager,
        isCurrentWorkspaceOwner,
        isCurrentWorkspaceEditor,
        isCurrentWorkspaceDatasetOperator,
        mutateCurrentWorkspace,
        isLoadingCurrentWorkspace,
      }}
    >
      <div className="flex h-full flex-col overflow-y-auto">
        {/* {globalThis.document?.body?.getAttribute("data-public-maintenance-notice") && <MaintenanceNotice />} */}
        <div
          ref={pageContainerRef}
          className="relative flex grow flex-col overflow-y-auto overflow-x-hidden bg-background-body"
        >
          {children}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
