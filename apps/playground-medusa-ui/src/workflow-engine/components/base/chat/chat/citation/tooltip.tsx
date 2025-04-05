import React, { useState } from 'react';
import type { FC } from 'react';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';

type TooltipProps = {
  data: number | string;
  text: string;
  icon: React.ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ data, text, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <PortalToFollowElem open={open} onOpenChange={setOpen} placement="top-start">
      <PortalToFollowElemTrigger onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div className="mr-6 flex items-center">
          {icon}
          {data}
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent style={{ zIndex: 1001 }}>
        <div className="system-xs-medium bg-components-tooltip-bg text-text-quaternary rounded-lg p-3 shadow-lg">
          {text} {data}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default Tooltip;
