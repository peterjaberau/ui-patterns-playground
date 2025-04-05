import { useState } from 'react';

import { RiChatSettingsLine } from '@remixicon/react';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import ActionButton, { ActionButtonState } from '@base/action-button';
import { Message3Fill } from '@base/icons/src/public/other';
import InputsFormContent from '@base/chat/embedded-chatbot/inputs-form/content';
import cn from '@utils/classnames';

type Props = {
  iconColor?: string;
};
const ViewFormDropdown = ({ iconColor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement="bottom-end"
      offset={{
        mainAxis: 4,
        crossAxis: 4,
      }}
    >
      <PortalToFollowElemTrigger onClick={() => setOpen((v) => !v)}>
        <ActionButton size="l" state={open ? ActionButtonState.Hover : ActionButtonState.Default}>
          <RiChatSettingsLine className={cn('h-[18px] w-[18px]', iconColor)} />
        </ActionButton>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-50">
        <div className="border-components-panel-border bg-components-panel-bg w-[400px] rounded-2xl border-[0.5px] shadow-lg backdrop-blur-sm">
          <div className="border-divider-subtle flex items-center gap-3 rounded-t-2xl border-b px-6 py-4">
            <Message3Fill className="h-6 w-6 shrink-0" />
            <div className="system-xl-semibold text-text-secondary grow">{'New chat setup'}</div>
          </div>
          <div className="p-6">
            <InputsFormContent />
          </div>
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default ViewFormDropdown;
