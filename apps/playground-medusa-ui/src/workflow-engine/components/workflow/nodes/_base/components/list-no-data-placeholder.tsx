'use client';
import type { FC } from 'react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ListNoDataPlaceholder: FC<Props> = ({ children }) => {
  return (
    <div className="system-xs-regular bg-background-section text-text-tertiary flex min-h-[42px] w-full items-center justify-center rounded-[10px]">
      {children}
    </div>
  );
};
export default React.memo(ListNoDataPlaceholder);
