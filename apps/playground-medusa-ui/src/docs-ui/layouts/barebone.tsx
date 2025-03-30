import clsx from 'clsx';
import React from 'react';

export type BareboneLayoutProps = {
  htmlClassName?: string;
  children: React.ReactNode;
  gaId?: string;
};

export const BareboneLayout = ({ htmlClassName, children, gaId }: BareboneLayoutProps) => {
  return (
    <html lang="en" className={clsx('h-full w-full', htmlClassName)}>
      <head />
      {children}
    </html>
  );
};
