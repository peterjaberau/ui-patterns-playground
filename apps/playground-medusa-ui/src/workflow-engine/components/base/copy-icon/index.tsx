'use client';
import React, { useState } from 'react';

import { debounce } from 'lodash-es';
import copy from 'copy-to-clipboard';
import Tooltip from '../tooltip';
import { Clipboard, ClipboardCheck } from '@base/icons/src/vender/line/files';

type Props = {
  content: string;
};

const prefixEmbedded = 'appOverview.overview.appInfo.embedded';

export const CopyIcon = ({ content }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onClickCopy = debounce(() => {
    copy(content);
    setIsCopied(true);
  }, 100);

  const onMouseLeave = debounce(() => {
    setIsCopied(false);
  }, 100);

  return (
    <Tooltip popupContent={isCopied ? 'Copied' : 'Copy'}>
      <div onMouseLeave={onMouseLeave}>
        {!isCopied ? (
          <Clipboard className="text-text-tertiary mx-1 h-3.5 w-3.5 cursor-pointer" onClick={onClickCopy} />
        ) : (
          <ClipboardCheck className="text-text-tertiary mx-1 h-3.5 w-3.5" />
        )}
      </div>
    </Tooltip>
  );
};

export default CopyIcon;
