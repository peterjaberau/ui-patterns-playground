'use client';
import type { FC, ReactNode } from 'react';
import React from 'react';

type Props = {
  title: string;
  content: ReactNode;
};

const InfoPanel: FC<Props> = ({ title, content }) => {
  return (
    <div>
      <div className="bg-workflow-block-parma-bg flex flex-col gap-y-0.5 rounded-md px-[5px] py-[3px]">
        <div className="system-2xs-semibold-uppercase text-text-secondary uppercase">{title}</div>
        <div className="system-xs-regular text-text-tertiary break-words">{content}</div>
      </div>
    </div>
  );
};
export default React.memo(InfoPanel);
