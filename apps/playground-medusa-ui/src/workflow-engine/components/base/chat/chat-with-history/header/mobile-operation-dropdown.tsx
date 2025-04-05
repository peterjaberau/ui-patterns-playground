import { useState } from 'react';

import { RiMoreFill } from '@remixicon/react';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import ActionButton, { ActionButtonState } from '@base/action-button';

type Props = {
  handleResetChat: () => void;
  handleViewChatSettings: () => void;
};

const MobileOperationDropdown = ({ handleResetChat, handleViewChatSettings }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement="bottom-end"
      offset={{
        mainAxis: 4,
        crossAxis: -4,
      }}
    >
      <PortalToFollowElemTrigger onClick={() => setOpen((v) => !v)}>
        <ActionButton size="l" state={open ? ActionButtonState.Hover : ActionButtonState.Default}>
          <RiMoreFill className="h-[18px] w-[18px]" />
        </ActionButton>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-40">
        <div
          className={
            'border-components-panel-border bg-components-panel-bg-blur min-w-[160px] rounded-xl border-[0.5px] p-1 shadow-lg backdrop-blur-sm'
          }
        >
          <div
            className="system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5"
            onClick={handleResetChat}
          >
            <span className="grow">{'Reset conversation'}</span>
          </div>
          <div
            className="system-md-regular text-text-secondary hover:bg-state-base-hover flex cursor-pointer items-center space-x-1 rounded-lg px-3 py-1.5"
            onClick={handleViewChatSettings}
          >
            <span className="grow">{'View chat settings'}</span>
          </div>
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default MobileOperationDropdown;
