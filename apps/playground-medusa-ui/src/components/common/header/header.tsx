import { Heading, Button, Text } from '@medusajs/ui';
import React from 'react';
import Link, { LinkProps } from 'next/link';

import { ActionMenu, ActionMenuProps } from '../action-menu';

export type HeadingProps = {
  title: string;
  subtitle?: string;
  actions?: (
    | {
        type: 'button';
        props: React.ComponentProps<typeof Button>;
        link?: LinkProps;
      }
    | {
        type: 'action-menu';
        props: ActionMenuProps;
      }
    | {
        type: 'custom';
        children: React.ReactNode;
      }
  )[];
};

export interface HeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  actions?: {
    type: 'button';
    props: React.ComponentProps<typeof Button>;
    link?: LinkProps;
    [key: string]: any;
  }[];
  id?: string | any;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Header = (props: HeaderProps | any) => {
  const { title, subtitle, actions = [], id, children, ...rest } = props;

  return (
    <div className="flex items-center justify-between px-6 py-4" id={id} {...rest}>
      <div>
        <Heading level="h2">{title}</Heading>
        {subtitle && (
          <Text className="text-ui-fg-subtle" size="small">
            {subtitle}
          </Text>
        )}
      </div>
      {actions.length > 0 && (
        <div className="flex items-center justify-center gap-x-2">
          {actions.map((action: any, index: any) => (
            <>
              {action.type === 'button' && (
                <Button {...action.props} size={action.props.size || 'small'} key={index}>
                  <>
                    {action.props.children}
                    {action.link && <Link {...action.link} />}
                  </>
                </Button>
              )}
              {action.type === 'action-menu' && <ActionMenu {...action.props} />}
              {action.type === 'custom' && action.children}
            </>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};
