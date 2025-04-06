import { NodeRunningStatusEnum } from './constants/workflow.constants';

export const getEdgeColor = (nodeRunningStatus?: NodeRunningStatusEnum, isFailBranch?: boolean) => {
  if (nodeRunningStatus === NodeRunningStatusEnum.Succeeded) return 'var(--color-workflow-link-line-success-handle)';

  if (nodeRunningStatus === NodeRunningStatusEnum.Failed) return 'var(--color-workflow-link-line-error-handle)';

  if (nodeRunningStatus === NodeRunningStatusEnum.Exception) return 'var(--color-workflow-link-line-failure-handle)';

  if (nodeRunningStatus === NodeRunningStatusEnum.Running) {
    if (isFailBranch) return 'var(--color-workflow-link-line-failure-handle)';

    return 'var(--color-workflow-link-line-handle)';
  }

  return 'var(--color-workflow-link-line-normal)';
};
