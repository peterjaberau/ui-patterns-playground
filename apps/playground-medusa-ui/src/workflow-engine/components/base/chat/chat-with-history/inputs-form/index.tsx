import React from 'react';

import { Message3Fill } from '@base/icons/src/public/other';
import Button from '@base/button';
import Divider from '@base/divider';
import InputsFormContent from '@base/chat/chat-with-history/inputs-form/content';
import { useChatWithHistoryContext } from '../context';
import cn from '@utils/classnames';

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const InputsFormNode = ({ collapsed, setCollapsed }: Props) => {
  const { isMobile, currentConversationId, handleStartChat, themeBuilder } = useChatWithHistoryContext();

  return (
    <div className={cn('flex flex-col items-center px-4 pt-6', isMobile && 'pt-4')}>
      <div
        className={cn(
          'border-components-panel-border bg-components-panel-bg w-full max-w-[672px] rounded-2xl border-[0.5px] shadow-md',
          collapsed && 'border-components-card-border bg-components-card-bg border shadow-none',
        )}
      >
        <div
          className={cn(
            'flex items-center gap-3 rounded-t-2xl px-6 py-4',
            !collapsed && 'border-divider-subtle border-b',
            isMobile && 'px-4 py-3',
          )}
        >
          <Message3Fill className="h-6 w-6 shrink-0" />
          <div className="system-xl-semibold text-text-secondary grow">{'New chat setup'}</div>
          {collapsed && (
            <Button
              className="text-text-tertiary uppercase"
              size="small"
              variant="ghost"
              onClick={() => setCollapsed(false)}
            >
              {'Edit'}
            </Button>
          )}
          {!collapsed && currentConversationId && (
            <Button
              className="text-text-tertiary uppercase"
              size="small"
              variant="ghost"
              onClick={() => setCollapsed(true)}
            >
              {'Close'}
            </Button>
          )}
        </div>
        {!collapsed && (
          <div className={cn('p-6', isMobile && 'p-4')}>
            <InputsFormContent />
          </div>
        )}
        {!collapsed && !currentConversationId && (
          <div className={cn('p-6', isMobile && 'p-4')}>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => handleStartChat(() => setCollapsed(true))}
              style={
                themeBuilder?.theme
                  ? {
                      backgroundColor: themeBuilder?.theme.primaryColor,
                    }
                  : {}
              }
            >
              {'Start Chat'}
            </Button>
          </div>
        )}
      </div>
      {collapsed && (
        <div className="flex w-full max-w-[720px] items-center py-4">
          <Divider bgStyle="gradient" className="h-px basis-1/2 rotate-180" />
          <Divider bgStyle="gradient" className="h-px basis-1/2" />
        </div>
      )}
    </div>
  );
};

export default InputsFormNode;
