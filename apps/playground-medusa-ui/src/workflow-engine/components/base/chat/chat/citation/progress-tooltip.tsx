import { useState } from 'react';
import type { FC } from 'react';

import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';

type ProgressTooltipProps = {
  data: number;
};

const ProgressTooltip: FC<ProgressTooltipProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <PortalToFollowElem open={open} onOpenChange={setOpen} placement="top-start">
      <PortalToFollowElemTrigger onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div className="flex grow items-center">
          <div className="border-components-progress-gray-border mr-1 h-1.5 w-16 overflow-hidden rounded-[3px] border">
            <div className="bg-components-progress-gray-progress h-full" style={{ width: `${data * 100}%` }}></div>
          </div>
          {data}
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent style={{ zIndex: 1001 }}>
        <div className="system-xs-medium bg-components-tooltip-bg text-text-quaternary rounded-lg p-3 shadow-lg">
          {'Retrieval Score'} {data}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default ProgressTooltip;
