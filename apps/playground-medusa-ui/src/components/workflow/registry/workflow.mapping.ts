import { NodeCustomTypeEnum } from '../constants/workflow.constants';

export const nodeTypes = {
  [NodeCustomTypeEnum.CUSTOM_NODE]: CustomNode,
  [NodeCustomTypeEnum.CUSTOM_NOTE_NODE]: CustomNoteNode,
  [NodeCustomTypeEnum.CUSTOM_SIMPLE_NODE]: CustomSimpleNode,
  [NodeCustomTypeEnum.CUSTOM_ITERATION_START_NODE]: CustomIterationStartNode,
  [NodeCustomTypeEnum.CUSTOM_LOOP_START_NODE]: CustomLoopStartNode,
};
