import { useCallback } from 'react';
import { produce } from 'immer';
import type { TextChunkResponse } from '@workflow-app/types/workflow';
import { useWorkflowStore } from '@workflow/store';

export const useWorkflowTextChunk = () => {
  const workflowStore = useWorkflowStore();

  const handleWorkflowTextChunk = useCallback(
    (params: TextChunkResponse) => {
      const {
        data: { text },
      } = params;
      const { workflowRunningData, setWorkflowRunningData } = workflowStore.getState();

      setWorkflowRunningData(
        produce(workflowRunningData!, (draft) => {
          draft.resultTabActive = true;
          draft.resultText += text;
        }),
      );
    },
    [workflowStore],
  );

  return {
    handleWorkflowTextChunk,
  };
};
