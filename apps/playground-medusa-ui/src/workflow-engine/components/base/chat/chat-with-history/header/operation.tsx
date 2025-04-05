'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import type { Placement } from '@floating-ui/react';
import { RiArrowDownSLine } from '@remixicon/react';

import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import cn from '@utils/classnames';

type Props = {
  title: string;
  isPinned: boolean;
  isShowRenameConversation?: boolean;
  onRenameConversation?: () => void;
  isShowDelete: boolean;
  togglePin: () => void;
  onDelete: () => void;
  placement?: Placement;
};

const Operation: FC<Props> = ({
  title,
  isPinned,
  togglePin,
  isShowRenameConversation,
  onRenameConversation,
  isShowDelete,
  onDelete,
  placement = 'bottom-start',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <PortalToFollowElem open={open} onOpenChange={setOpen} placement={placement} offset={4}>
      <PortalToFollowElemTrigger onClick={() => setOpen((v) => !v)}>
        <div
          className={cn(
            'text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center rounded-lg p-1.5 pl-2',
            open && 'bg-state-base-hover',
          )}
        >
          <div className="system-md-semibold">{title}</div>
          <RiArrowDownSLine className="h-4 w-4" />
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-50">
        <div
          className={
            'border-components-panel-border bg-components-panel-bg-blur min-w-[120px] rounded-xl border-[0.5px] p-1 shadow-lg backdrop-blur-sm'
          }
        >
          <div
            className={cn(
              'system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5',
            )}
            onClick={togglePin}
          >
            <span className="grow">{isPinned ? 'Unpin' : 'Pin'}</span>
          </div>
          {isShowRenameConversation && (
            <div
              className={cn(
                'system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5',
              )}
              onClick={onRenameConversation}
            >
              <span className="grow">{'Rename'}</span>
            </div>
          )}
          {isShowDelete && (
            <div
              className={cn(
                'system-md-regular text-text-secondary hover:bg-state-destructive-hover hover:text-text-destructive group flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5',
              )}
              onClick={onDelete}
            >
              <span className="grow">{'Delete'}</span>
            </div>
          )}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};
export default React.memo(Operation);
