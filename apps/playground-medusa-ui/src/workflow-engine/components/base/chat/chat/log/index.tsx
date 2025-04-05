import type { FC } from 'react';
import { RiFileList3Line } from '@remixicon/react';
import type { IChatItem } from '@base/chat/chat/type';
import { useStore as useAppStore } from '@workflow-app/components/app/store';
import ActionButton from '@base/action-button';

type LogProps = {
  logItem: IChatItem;
};
const Log: FC<LogProps> = ({ logItem }) => {
  const setCurrentLogItem = useAppStore((s: any) => s.setCurrentLogItem);
  const setShowPromptLogModal = useAppStore((s: any) => s.setShowPromptLogModal);
  const setShowAgentLogModal = useAppStore((s: any) => s.setShowAgentLogModal);
  const setShowMessageLogModal = useAppStore((s: any) => s.setShowMessageLogModal);
  const { workflow_run_id: runID, agent_thoughts } = logItem;
  const isAgent = agent_thoughts && agent_thoughts.length > 0;

  return (
    <div
      className="border-components-actionbar-border bg-components-actionbar-bg ml-1 flex items-center gap-0.5 rounded-[10px] border-[0.5px] p-0.5 shadow-md backdrop-blur-sm"
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setCurrentLogItem(logItem);
        if (runID) setShowMessageLogModal(true);
        else if (isAgent) setShowAgentLogModal(true);
        else setShowPromptLogModal(true);
      }}
    >
      <ActionButton>
        <RiFileList3Line className="h-4 w-4" />
      </ActionButton>
    </div>
  );
};

export default Log;
