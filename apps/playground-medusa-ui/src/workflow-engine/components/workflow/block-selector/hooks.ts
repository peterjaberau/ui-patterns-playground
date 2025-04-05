import { BLOCKS } from './constants';
import { TabsEnum, ToolTypeEnum } from './types';

export const useBlocks = () => {
  return BLOCKS.map((block) => {
    return {
      ...block,
      title: t(`workflow.blocks.${block.type}`),
    };
  });
};

export const useTabs = () => {
  return [
    {
      key: TabsEnum.Blocks,
      name: t('workflow.tabs.blocks'),
    },
    {
      key: TabsEnum.Tools,
      name: t('workflow.tabs.tools'),
    },
  ];
};

export const useToolTabs = () => {
  return [
    {
      key: ToolTypeEnum.All,
      name: t('workflow.tabs.allTool'),
    },
    {
      key: ToolTypeEnum.BuiltIn,
      name: t('workflow.tabs.plugin'),
    },
    {
      key: ToolTypeEnum.Custom,
      name: t('workflow.tabs.customTool'),
    },
    {
      key: ToolTypeEnum.Workflow,
      name: t('workflow.tabs.workflowTool'),
    },
  ];
};
