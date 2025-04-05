import type { FC } from 'react';
import { memo } from 'react';

import type { ChatItem } from '../../types';
import { formatNumber } from '@utils/format';

type MoreProps = {
  more: ChatItem['more'];
};
const More: FC<MoreProps> = ({ more }) => {
  return (
    <div className="system-xs-regular text-text-quaternary mt-1 flex items-center opacity-0 group-hover:opacity-100">
      {more && (
        <>
          <div className="mr-2 max-w-[33.3%] shrink-0 truncate" title={`${more.latency}s`}>
            {`${more.latency}s`}
          </div>
          <div className="max-w-[33.3%] shrink-0 truncate" title={`Token spent ${formatNumber(more.tokens)}`}>
            {`Token spent ${formatNumber(more.tokens)}`}
          </div>
          <div className="mx-2 shrink-0">·</div>
          <div className="max-w-[33.3%] shrink-0 truncate" title={more.time}>
            {more.time}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(More);
