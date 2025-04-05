'use client';
import React, { useState } from 'react';
import { RiClipboardFill, RiClipboardLine } from '@remixicon/react';
import { debounce } from 'lodash-es';
import copy from 'copy-to-clipboard';
import copyStyle from './style.module.css';
import Tooltip from '@base/tooltip';
import ActionButton from '@base/action-button';

type Props = {
  content: string;
  className?: string;
};

const prefixEmbedded = 'appOverview.overview.appInfo.embedded';

const CopyFeedback = ({ content }: Props) => {
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
      <ActionButton>
        <div onClick={onClickCopy} onMouseLeave={onMouseLeave}>
          {isCopied && <RiClipboardFill className="h-4 w-4" />}
          {!isCopied && <RiClipboardLine className="h-4 w-4" />}
        </div>
      </ActionButton>
    </Tooltip>
  );
};

export default CopyFeedback;

export const CopyFeedbackNew = ({ content, className }: Pick<Props, 'className' | 'content'>) => {
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
      <div className={`hover:bg-components-button-ghost-bg-hover h-8 w-8 cursor-pointer rounded-lg ${className ?? ''}`}>
        <div
          onClick={onClickCopy}
          onMouseLeave={onMouseLeave}
          className={`h-full w-full ${copyStyle.copyIcon} ${isCopied ? copyStyle.copied : ''}`}
        ></div>
      </div>
    </Tooltip>
  );
};
