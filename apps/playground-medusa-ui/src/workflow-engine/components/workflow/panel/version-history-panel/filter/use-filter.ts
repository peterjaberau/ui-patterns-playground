import { WorkflowVersionFilterOptions } from '../../../types';

export const useFilterOptions = () => {
  return [
    {
      key: WorkflowVersionFilterOptions.all,
      name: t('workflow.versionHistory.filter.all'),
    },
    {
      key: WorkflowVersionFilterOptions.onlyYours,
      name: t('workflow.versionHistory.filter.onlyYours'),
    },
  ];
};
