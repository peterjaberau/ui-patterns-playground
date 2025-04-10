"use client";

import { useContext, useContextSelector } from "use-context-selector";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiMoreFill } from "@remixicon/react";
import type { App } from "@/types/app";
import Confirm from "@/app/components/base/confirm";
import Toast, { ToastContext } from "@/app/components/base/toast";
// import { copyApp, deleteApp, exportAppConfig, updateAppInfo } from '@/service/apps'
// import DuplicateAppModal from '@/app/components/app/duplicate-modal'
// import type { DuplicateAppModalProps } from '@/app/components/app/duplicate-modal'
import AppIcon from "@/app/components/base/app-icon";
import AppsContext, { useAppContext } from "@/context/app-context";
import type { HtmlContentProps } from "@/app/components/base/popover";
import CustomPopover from "@/app/components/base/popover";
import Divider from "@/app/components/base/divider";
import { getRedirection } from "@/utils/app-redirection";
import { useProviderContext } from "@/context/provider-context";
import { NEED_REFRESH_APP_LIST_KEY } from "@/config";
import type { Tag } from "@/app/components/base/tag-management/constant";
import TagSelector from "@/app/components/base/tag-management/selector";
import type { EnvironmentVariable } from "@/types/components/workflow/types";
import { fetchWorkflowDraft } from "@/service/.mock-api/workflow";
import { fetchInstalledAppList } from "@/service/.mock-api/explore";
import cn from "@/utils/classnames";

export type AppCardProps = {
  app: App;
  onRefresh?: () => void;
};

const AppCard = ({ app, onRefresh }: AppCardProps) => {
  const { t } = useTranslation();
  const { notify } = useContext(ToastContext);
  const { isCurrentWorkspaceEditor } = useAppContext();
  const { onPlanInfoChanged } = useProviderContext();
  const { push } = useRouter();

  const mutateApps = useContextSelector(AppsContext, (state) => state.mutateApps);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [showSwitchModal, setShowSwitchModal] = useState<boolean>(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [secretEnvList, setSecretEnvList] = useState<EnvironmentVariable[]>([]);

  const onSwitch = () => {
    if (onRefresh) onRefresh();
    mutateApps();
    setShowSwitchModal(false);
  };

  const Operations = (props: HtmlContentProps) => {
    const onMouseLeave = async () => {
      props.onClose?.();
    };
    const onClickSettings = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      props.onClick?.();
      e.preventDefault();
      setShowEditModal(true);
    };

    const onClickSwitch = async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      props.onClick?.();
      e.preventDefault();
      setShowSwitchModal(true);
    };

    return (
      <div className="relative w-full py-1" onMouseLeave={onMouseLeave}>
        <button
          className="mx-1 flex h-8 w-[calc(100%_-_8px)] cursor-pointer items-center gap-2 rounded-lg px-3 py-[6px] hover:bg-state-base-hover"
          onClick={onClickSettings}
        >
          <span className="system-sm-regular text-text-secondary">Edit App</span>
        </button>
        <Divider className="!my-1" />
        <button className="mx-1 flex h-8 w-[calc(100%_-_8px)] cursor-pointer items-center gap-2 rounded-lg px-3 py-[6px] hover:bg-state-base-hover">
          <span className="system-sm-regular text-text-secondary">Duplicate</span>
        </button>
        <button className="mx-1 flex h-8 w-[calc(100%_-_8px)] cursor-pointer items-center gap-2 rounded-lg px-3 py-[6px] hover:bg-state-base-hover">
          <span className="system-sm-regular text-text-secondary">Export</span>
        </button>
        {(app.mode === "completion" || app.mode === "chat") && (
          <>
            <Divider className="!my-1" />
            <div
              className="mx-1 flex h-9 cursor-pointer items-center rounded-lg px-3 py-2 hover:bg-state-base-hover"
              onClick={onClickSwitch}
            >
              <span className="text-sm leading-5 text-text-secondary">Switch</span>
            </div>
          </>
        )}
        <Divider className="!my-1" />
        <button className="mx-1 flex h-8 w-[calc(100%_-_8px)] cursor-pointer items-center gap-2 rounded-lg px-3 py-[6px] hover:bg-state-base-hover">
          <span className="system-sm-regular text-text-secondary">Open in Explore</span>
        </button>
        <Divider className="!my-1" />
        <div className="group mx-1 flex h-8 w-[calc(100%_-_8px)] cursor-pointer items-center gap-2 rounded-lg px-3 py-[6px] hover:bg-state-destructive-hover">
          <span className="system-sm-regular text-text-secondary group-hover:text-text-destructive">Delete</span>
        </div>
      </div>
    );
  };

  const [tags, setTags]: any = useState<Tag[]>(app.tags);
  useEffect(() => {
    setTags(app.tags);
  }, [app.tags]);

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          getRedirection(isCurrentWorkspaceEditor, app, push);
        }}
        className="group relative col-span-1 inline-flex h-[160px] cursor-pointer flex-col rounded-xl border-[1px] border-solid border-components-card-border bg-components-card-bg shadow-sm transition-all duration-200 ease-in-out hover:shadow-lg"
      >
        <div className="flex h-[66px] shrink-0 grow-0 items-center gap-3 px-[14px] pb-3 pt-[14px]">
          <div className="relative shrink-0">
            <AppIcon
              size="large"
              iconType={app.icon_type}
              icon={app.icon}
              background={app.icon_background}
              imageUrl={app.icon_url}
            />
            <AppTypeIcon
              type={app.mode}
              wrapperClassName="absolute -bottom-0.5 -right-0.5 w-4 h-4 shadow-sm"
              className="h-3 w-3"
            />
          </div>
          <div className="w-0 grow py-[1px]">
            <div className="flex items-center text-sm font-semibold leading-5 text-text-secondary">
              <div className="truncate" title={app.name}>
                {app.name}
              </div>
            </div>
            <div className="flex items-center text-[10px] font-medium leading-[18px] text-text-tertiary">
              {app.mode === "advanced-chat" && <div className="truncate">Advanced</div>}
              {app.mode === "chat" && <div className="truncate">CHATBOT</div>}
              {app.mode === "agent-chat" && <div className="truncate">AGENT</div>}
              {app.mode === "workflow" && <div className="truncate">WORKFLOW</div>}
              {app.mode === "completion" && <div className="truncate">COMPLETION</div>}
            </div>
          </div>
        </div>
        <div className="title-wrapper h-[90px] px-[14px] text-xs leading-normal text-text-tertiary">
          <div className={"line-clamp-2 group-hover:line-clamp-2"} title={app.description}>
            {app.description}
          </div>
        </div>
        <div
          className={
            "absolute bottom-1 left-0 right-0 h-[42px] shrink-0 items-center pb-[6px] pl-[14px] pr-[6px] pt-1 flex"
          }
        >
          {isCurrentWorkspaceEditor && (
            <>
              <div
                className={"flex w-0 grow items-center gap-1"}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <div className={"mr-[41px] w-full grow group-hover:!mr-0 group-hover:!block !block"}>
                  <TagSelector
                    position="bl"
                    type="app"
                    targetID={app.id}
                    value={tags.map((tag) => tag.id)}
                    selectedTags={tags}
                    onCacheUpdate={setTags}
                    onChange={onRefresh}
                  />
                </div>
              </div>
              <div className="mx-1 !hidden h-[14px] w-[1px] shrink-0 group-hover:!flex" />
              <div className="!hidden shrink-0 group-hover:!flex">
                <CustomPopover
                  htmlContent={<Operations />}
                  position="br"
                  trigger="click"
                  btnElement={
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md">
                      <RiMoreFill className="h-4 w-4 text-text-tertiary" />
                    </div>
                  }
                  btnClassName={
                    ((open) => (open ? "!bg-black/5 !shadow-none" : "!bg-transparent"),
                    "h-8 w-8 rounded-md border-none !p-2 hover:!bg-black/5")
                  }
                  popupClassName={
                    app.mode === "completion" || app.mode === "chat"
                      ? "!w-[256px] translate-x-[-224px]"
                      : "!w-[160px] translate-x-[-128px]"
                  }
                  className={"!z-20 h-fit"}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {showEditModal && (
        <EditAppModal
          isEditModal
          appName={app.name}
          appIconType={app.icon_type}
          appIcon={app.icon}
          appIconBackground={app.icon_background}
          appIconUrl={app.icon_url}
          appDescription={app.description}
          appMode={app.mode}
          appUseIconAsAnswerIcon={app.use_icon_as_answer_icon}
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default AppCard;
