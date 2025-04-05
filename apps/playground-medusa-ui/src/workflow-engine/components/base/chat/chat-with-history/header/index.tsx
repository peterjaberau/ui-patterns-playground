import { useCallback, useState } from 'react';
import { RiEditBoxLine, RiLayoutRight2Line, RiResetLeftLine } from '@remixicon/react';

import { useChatWithHistoryContext } from '../context';
import Operation from './operation';
import ActionButton, { ActionButtonState } from '@base/action-button';
import AppIcon from '@base/app-icon';
import Tooltip from '@base/tooltip';
import ViewFormDropdown from '@base/chat/chat-with-history/inputs-form/view-form-dropdown';
import Confirm from '@base/confirm';
import RenameModal from '@base/chat/chat-with-history/sidebar/rename-modal';
import type { ConversationItem } from '@workflow-app/models/share';
import cn from '@utils/classnames';

const Header = () => {
  const {
    appData,
    currentConversationId,
    currentConversationItem,
    inputsForms,
    pinnedConversationList,
    handlePinConversation,
    handleUnpinConversation,
    conversationRenaming,
    handleRenameConversation,
    handleDeleteConversation,
    handleNewConversation,
    sidebarCollapseState,
    handleSidebarCollapse,
    isResponding,
  } = useChatWithHistoryContext();

  const isSidebarCollapsed = sidebarCollapseState;

  const isPin = pinnedConversationList.some((item) => item.id === currentConversationId);

  const [showConfirm, setShowConfirm] = useState<ConversationItem | null>(null);
  const [showRename, setShowRename] = useState<ConversationItem | null>(null);
  const handleOperate = useCallback(
    (type: string) => {
      if (type === 'pin') handlePinConversation(currentConversationId);

      if (type === 'unpin') handleUnpinConversation(currentConversationId);

      if (type === 'delete') setShowConfirm(currentConversationItem as any);

      if (type === 'rename') setShowRename(currentConversationItem as any);
    },
    [currentConversationId, currentConversationItem, handlePinConversation, handleUnpinConversation],
  );
  const handleCancelConfirm = useCallback(() => {
    setShowConfirm(null);
  }, []);
  const handleDelete = useCallback(() => {
    if (showConfirm) handleDeleteConversation(showConfirm.id, { onSuccess: handleCancelConfirm });
  }, [showConfirm, handleDeleteConversation, handleCancelConfirm]);
  const handleCancelRename = useCallback(() => {
    setShowRename(null);
  }, []);
  const handleRename = useCallback(
    (newName: string) => {
      if (showRename) handleRenameConversation(showRename.id, newName, { onSuccess: handleCancelRename });
    },
    [showRename, handleRenameConversation, handleCancelRename],
  );

  return (
    <>
      <div className="flex h-14 shrink-0 items-center justify-between p-3">
        <div
          className={cn(
            'flex items-center gap-1 transition-all duration-200 ease-in-out',
            !isSidebarCollapsed && 'user-select-none opacity-0',
          )}
        >
          <ActionButton
            className={cn(!isSidebarCollapsed && 'cursor-default')}
            size="l"
            onClick={() => handleSidebarCollapse(false)}
          >
            <RiLayoutRight2Line className="h-[18px] w-[18px]" />
          </ActionButton>
          <div className="mr-1 shrink-0">
            <AppIcon
              size="large"
              iconType={appData?.site.icon_type}
              icon={appData?.site.icon}
              background={appData?.site.icon_background}
              imageUrl={appData?.site.icon_url}
            />
          </div>
          {!currentConversationId && (
            <div className={cn('system-md-semibold text-text-secondary grow truncate')}>{appData?.site.title}</div>
          )}
          {currentConversationId && currentConversationItem && isSidebarCollapsed && (
            <>
              <div className="text-divider-deep p-1">/</div>
              <Operation
                title={currentConversationItem?.name || ''}
                isPinned={!!isPin}
                togglePin={() => handleOperate(isPin ? 'unpin' : 'pin')}
                isShowDelete
                isShowRenameConversation
                onRenameConversation={() => handleOperate('rename')}
                onDelete={() => handleOperate('delete')}
              />
            </>
          )}
          <div className="flex items-center px-1">
            <div className="bg-divider-regular h-[14px] w-px"></div>
          </div>
          {isSidebarCollapsed && (
            <Tooltip disabled={!!currentConversationId} popupContent={'Already in a new chat'}>
              <div>
                <ActionButton
                  size="l"
                  state={
                    !currentConversationId || isResponding ? ActionButtonState.Disabled : ActionButtonState.Default
                  }
                  disabled={!currentConversationId || isResponding}
                  onClick={handleNewConversation}
                >
                  <RiEditBoxLine className="h-[18px] w-[18px]" />
                </ActionButton>
              </div>
            </Tooltip>
          )}
        </div>
        <div className="flex items-center gap-1">
          {currentConversationId && (
            <Tooltip popupContent={'Reset conversation'}>
              <ActionButton size="l" onClick={handleNewConversation}>
                <RiResetLeftLine className="h-[18px] w-[18px]" />
              </ActionButton>
            </Tooltip>
          )}
          {currentConversationId && inputsForms.length > 0 && <ViewFormDropdown />}
        </div>
      </div>
      {!!showConfirm && (
        <Confirm
          title={'Delete conversation'}
          content={'Are you sure you want to delete this conversation?'}
          isShow
          onCancel={handleCancelConfirm}
          onConfirm={handleDelete}
        />
      )}
      {showRename && (
        <RenameModal
          isShow
          onClose={handleCancelRename}
          saveLoading={conversationRenaming}
          name={showRename?.name || ''}
          onSave={handleRename}
        />
      )}
    </>
  );
};

export default Header;
