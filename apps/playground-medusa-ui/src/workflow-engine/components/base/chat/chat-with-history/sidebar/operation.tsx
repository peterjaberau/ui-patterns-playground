'use client';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { RiDeleteBinLine, RiEditLine, RiMoreFill, RiPushpinLine, RiUnpinLine } from '@remixicon/react';

import { useBoolean } from 'ahooks';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import ActionButton, { ActionButtonState } from '@base/action-button';
import cn from '@utils/classnames';

type Props = {
  isActive?: boolean;
  isItemHovering?: boolean;
  isPinned: boolean;
  isShowRenameConversation?: boolean;
  onRenameConversation?: () => void;
  isShowDelete: boolean;
  togglePin: () => void;
  onDelete: () => void;
};

const Operation: FC<Props> = ({
  isActive,
  isItemHovering,
  isPinned,
  togglePin,
  isShowRenameConversation,
  onRenameConversation,
  isShowDelete,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [isHovering, { setTrue: setIsHovering, setFalse: setNotHovering }] = useBoolean(false);
  useEffect(() => {
    if (!isItemHovering && !isHovering) setOpen(false);
  }, [isItemHovering, isHovering]);
  return (
    <PortalToFollowElem open={open} onOpenChange={setOpen} placement="bottom-end" offset={4}>
      <PortalToFollowElemTrigger onClick={() => setOpen((v) => !v)}>
        <ActionButton
          className={cn(isItemHovering || open ? 'opacity-100' : 'opacity-0')}
          state={isActive ? ActionButtonState.Active : open ? ActionButtonState.Hover : ActionButtonState.Default}
        >
          <RiMoreFill className="h-4 w-4" />
        </ActionButton>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-50">
        <div
          ref={ref}
          className={
            'border-components-panel-border bg-components-panel-bg-blur min-w-[120px] rounded-xl border-[0.5px] p-1 shadow-lg backdrop-blur-sm'
          }
          onMouseEnter={setIsHovering}
          onMouseLeave={setNotHovering}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={cn(
              'system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-2 py-1.5',
            )}
            onClick={togglePin}
          >
            {isPinned && <RiUnpinLine className="text-text-tertiary h-4 w-4 shrink-0" />}
            {!isPinned && <RiPushpinLine className="text-text-tertiary h-4 w-4 shrink-0" />}
            <span className="grow">{isPinned ? 'Unpin' : 'Pin'}</span>
          </div>
          {isShowRenameConversation && (
            <div
              className={cn(
                'system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-2 py-1.5',
              )}
              onClick={onRenameConversation}
            >
              <RiEditLine className="text-text-tertiary h-4 w-4 shrink-0" />
              <span className="grow">{'Rename'}</span>
            </div>
          )}
          {isShowDelete && (
            <div
              className={cn(
                'system-md-regular text-text-secondary hover:bg-state-destructive-hover hover:text-text-destructive group flex cursor-pointer items-center space-x-1 rounded-lg px-2 py-1.5',
              )}
              onClick={onDelete}
            >
              <RiDeleteBinLine
                className={cn('text-text-tertiary group-hover:text-text-destructive h-4 w-4 shrink-0')}
              />
              <span className="grow">{'Delete'}</span>
            </div>
          )}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};
export default React.memo(Operation);
