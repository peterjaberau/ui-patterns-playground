'use client';
// import { Button, Container } from '@medusajs/ui';

import { ArrowUpRightOnBox, Check, SquareTwoStack, TriangleDownMini, XMarkMini } from '@medusajs/icons';
import { Badge, Drawer, Heading, IconButton, Kbd } from '@medusajs/ui';
import Primitive from '@uiw/react-json-view';
import { CSSProperties, MouseEvent, Suspense, useState } from 'react';
import { Container as UiContainer, clx } from '@medusajs/ui';
import { Button, Text } from '@medusajs/ui';
import React from 'react';
import { DropdownMenu } from '@medusajs/ui';
import { EllipsisHorizontal } from '@medusajs/icons';
import Link, { LinkProps } from 'next/link';

type ContainerProps = React.ComponentProps<typeof UiContainer>;

type JsonViewSectionProps = {
  data?: object | any;
  title?: string | any;
};

export const Container = (props: ContainerProps) => {
  return <UiContainer {...props} className={clx('divide-y p-0', props.className)} />;
};

export default function Byline({ data }: JsonViewSectionProps) {
  if (!data) {
    return;
  }

  const numberOfKeys: any = (Object as any).keys(data as any).length;

  return (
    <Container className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-x-4">
        <Heading level="h2">JSON</Heading>
        <Badge size="2xsmall" rounded="full">
          {numberOfKeys} keys
        </Badge>
      </div>
      <Drawer>
        <Drawer.Trigger asChild>
          <IconButton size="small" variant="transparent" className="text-ui-fg-muted hover:text-ui-fg-subtle">
            <ArrowUpRightOnBox />
          </IconButton>
        </Drawer.Trigger>
        <Drawer.Content className="bg-ui-contrast-bg-base text-ui-code-fg-subtle !shadow-elevation-commandbar overflow-hidden border border-none max-md:inset-x-2 max-md:max-w-[calc(100%-16px)]">
          <div className="bg-ui-code-bg-base flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-x-4">
              <Drawer.Title asChild>
                <Heading className="text-ui-contrast-fg-primary">
                  <span className="text-ui-fg-subtle">{numberOfKeys}</span>
                </Heading>
              </Drawer.Title>
            </div>
            <div className="flex items-center gap-x-2">
              <Kbd className="bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary">
                esc
              </Kbd>
              <Drawer.Close asChild>
                <IconButton
                  size="small"
                  variant="transparent"
                  className="text-ui-contrast-fg-secondary hover:text-ui-contrast-fg-primary hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus-visible:bg-ui-contrast-bg-base-hover focus-visible:shadow-borders-interactive-with-active"
                >
                  <XMarkMini />
                </IconButton>
              </Drawer.Close>
            </div>
          </div>
          <Drawer.Body className="flex flex-1 flex-col overflow-hidden px-[5px] py-0 pb-[5px]">
            <div className="bg-ui-contrast-bg-subtle flex-1 overflow-auto rounded-b-[4px] rounded-t-lg p-3">
              <Suspense fallback={<div className="flex size-full flex-col"></div>}>
                <Primitive
                  value={data}
                  displayDataTypes={false}
                  style={
                    {
                      '--w-rjv-font-family': 'Roboto Mono, monospace',
                      '--w-rjv-line-color': 'var(--contrast-border-base)',
                      '--w-rjv-curlybraces-color': 'var(--contrast-fg-secondary)',
                      '--w-rjv-brackets-color': 'var(--contrast-fg-secondary)',
                      '--w-rjv-key-string': 'var(--contrast-fg-primary)',
                      '--w-rjv-info-color': 'var(--contrast-fg-secondary)',
                      '--w-rjv-type-string-color': 'var(--tag-green-icon)',
                      '--w-rjv-quotes-string-color': 'var(--tag-green-icon)',
                      '--w-rjv-type-boolean-color': 'var(--tag-orange-icon)',
                      '--w-rjv-type-int-color': 'var(--tag-orange-icon)',
                      '--w-rjv-type-float-color': 'var(--tag-orange-icon)',
                      '--w-rjv-type-bigint-color': 'var(--tag-orange-icon)',
                      '--w-rjv-key-number': 'var(--contrast-fg-secondary)',
                      '--w-rjv-arrow-color': 'var(--contrast-fg-secondary)',
                      '--w-rjv-copied-color': 'var(--contrast-fg-secondary)',
                      '--w-rjv-copied-success-color': 'var(--contrast-fg-primary)',
                      '--w-rjv-colon-color': 'var(--contrast-fg-primary)',
                      '--w-rjv-ellipsis-color': 'var(--contrast-fg-secondary)',
                    } as CSSProperties
                  }
                  collapsed={1}
                >
                  <Primitive.Quote render={() => <span />} />
                  <Primitive.Null render={() => <span className="text-ui-tag-red-icon">null</span>} />
                  <Primitive.Undefined render={() => <span className="text-ui-tag-blue-icon">undefined</span>} />
                  <Primitive.CountInfo
                    render={(_props, { value }) => {
                      return (
                        <span className="text-ui-contrast-fg-secondary ml-2">
                          {Object.keys(value as object).length} items
                        </span>
                      );
                    }}
                  />
                  <Primitive.Arrow>
                    <TriangleDownMini className="text-ui-contrast-fg-secondary -ml-[0.5px]" />
                  </Primitive.Arrow>
                  <Primitive.Colon>
                    <span className="mr-1">:</span>
                  </Primitive.Colon>
                  <Primitive.Copied
                    render={({ style }, { value }) => {
                      return <Copied style={style} value={value} />;
                    }}
                  />
                </Primitive>
              </Suspense>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    </Container>
  );
}

type CopiedProps = {
  style?: CSSProperties;
  value: object | undefined;
};

const Copied = ({ style, value }: CopiedProps) => {
  const [copied, setCopied] = useState(false);

  const handler = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setCopied(true);

    if (typeof value === 'string') {
      navigator.clipboard.writeText(value);
    } else {
      const json = JSON.stringify(value, null, 2);
      navigator.clipboard.writeText(json);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const styl = { whiteSpace: 'nowrap', width: '20px' };

  if (copied) {
    return (
      <span style={{ ...style, ...styl }}>
        <Check className="text-ui-contrast-fg-primary" />
      </span>
    );
  }

  return (
    <span style={{ ...style, ...styl }} onClick={handler}>
      <SquareTwoStack className="text-ui-contrast-fg-secondary" />
    </span>
  );
};

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

export const Header = ({ title, subtitle, actions = [] }: HeadingProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
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
          {actions.map((action, index) => (
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
    </div>
  );
};

export type Action = {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
} & (
  | {
      to: string;
      onClick?: never;
    }
  | {
      onClick: () => void;
      to?: never;
    }
);

export type ActionGroup = {
  actions: Action[];
};

export type ActionMenuProps = {
  groups: ActionGroup[];
};

export const ActionMenu = ({ groups }: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton size="small" variant="transparent">
          <EllipsisHorizontal />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {groups.map((group, index) => {
          if (!group.actions.length) {
            return null;
          }

          const isLast = index === groups.length - 1;

          return (
            <DropdownMenu.Group key={index}>
              {group.actions.map((action, index) => {
                if (action.onClick) {
                  return (
                    <DropdownMenu.Item
                      disabled={action.disabled}
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        action.onClick();
                      }}
                      className={clx('[&_svg]:text-ui-fg-subtle flex items-center gap-x-2', {
                        '[&_svg]:text-ui-fg-disabled': action.disabled,
                      })}
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </DropdownMenu.Item>
                  );
                }

                return (
                  <div key={index}>
                    <DropdownMenu.Item
                      className={clx('[&_svg]:text-ui-fg-subtle flex items-center gap-x-2', {
                        '[&_svg]:text-ui-fg-disabled': action.disabled,
                      })}
                      asChild
                      disabled={action.disabled}
                    >
                      <Link href={action.to} onClick={(e) => e.stopPropagation()}>
                        {action.icon}
                        <span>{action.label}</span>
                      </Link>
                    </DropdownMenu.Item>
                  </div>
                );
              })}
              {!isLast && <DropdownMenu.Separator />}
            </DropdownMenu.Group>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
