import { Badge } from '@medusajs/ui';
import clsx from 'clsx';
import React from 'react';

const colorMap = {
  default: 'grey',
  pink: 'purple',
  blue: 'blue',
  violet: 'green',
  cyan: 'red',
  orange: 'orange',
};

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <Badge
      color={colorMap[color]}
      style={{ marginTop: '-25px' }}
      className={clsx('mt-2', { 'animate-[highlight_1s_ease-in-out_1]': animateRerendering })}
      size="2xsmall"
    >
      {children}
    </Badge>
  );
};
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-vercel-pink': color === 'pink',
        'border-vercel-blue': color === 'blue',
        'border-vercel-cyan': color === 'cyan',
        'border-vercel-violet': color === 'violet',
        'border-vercel-orange': color === 'orange',
        'text-vercel-pink animate-[rerender_1s_ease-in-out_1]': animateRerendering,
      })}
    >
      <div
        className={clsx('absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest', {
          'left-3 lg:left-5': size === 'small',
          'left-4 lg:left-9': size === 'default',
        })}
      >
        {labels.map((label) => {
          return (
            <Label key={label} color={color} animateRerendering={animateRerendering}>
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
