"use client";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useBoolean } from "ahooks";
import { useSelectedLayoutSegment } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/20/solid";
import AppNav from "./app-nav";
import { useAppContext } from "@/context/app-context";
import LogoSite from "@/app/components/base/logo/logo-site";
import useBreakpoints, { MediaType } from "@/hooks/use-breakpoints";
import { useProviderContext } from "@/context/provider-context";
import { useModalContext } from "@/context/modal-context";

const navClassName = `
  flex items-center relative mr-0 sm:mr-3 px-3 h-8 rounded-xl
  font-medium text-sm
  cursor-pointer
`;

const Header = () => {
  const { isCurrentWorkspaceEditor, isCurrentWorkspaceDatasetOperator } = useAppContext();
  const selectedSegment = useSelectedLayoutSegment();
  const media = useBreakpoints();
  const isMobile = media === MediaType.mobile;
  const [isShowNavMenu, { toggle, setFalse: hideNavMenu }] = useBoolean(false);

  useEffect(() => {
    hideNavMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSegment]);
  return (
    <div className="flex flex-1 items-center justify-between bg-background-body px-4">
      <div className="flex items-center">
        {isMobile && (
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center" onClick={toggle}>
            <Bars3Icon className="h-4 w-4 text-gray-500" />
          </div>
        )}
        {!isMobile && (
          <div className="flex w-64 shrink-0 items-center gap-1.5 self-stretch p-2 pl-3">
            <Link href="/apps" className="flex h-8 w-8 shrink-0 items-center justify-center gap-2">
              <LogoSite className="object-contain" />
            </Link>
            <div className="font-light text-divider-deep">/</div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="flex">
          <Link href="/apps" className="mr-4 flex items-center">
            <LogoSite />
          </Link>
          <div className="font-light text-divider-deep">/</div>
        </div>
      )}
      {!isMobile && <div className="flex items-center">{!isCurrentWorkspaceDatasetOperator && <AppNav />}</div>}
      {isMobile && isShowNavMenu && (
        <div className="flex w-full flex-col gap-y-1 p-2">{!isCurrentWorkspaceDatasetOperator && <AppNav />}</div>
      )}
    </div>
  );
};
export default Header;
