// nodes
import AnnotationNode from '../components/nodes/AnnotationNode';
import CircleNode from '../components/nodes/CircleNode';
import ResizerNode from '../components/nodes/ResizerNode';
import TextInputNode from '../components/nodes/TextInputNode';
import ToolbarNode from '../components/nodes/ToolbarNode';

//edges
import ButtonEdge from '../components/edges/ButtonEdge';
import CustomEdge from '../components/edges/custom-edge';

//constants
import { nodeTypesEnum, edgeTypesEnum } from './constants/workflow.constants';

export const nodeTypes = {
  // [nodeTypesEnum.CUSTOM_NODE]: 'custom',
  [nodeTypesEnum.CUSTOM_ANNOTATION_NODE]: AnnotationNode,
  [nodeTypesEnum.CUSTOM_TOOLS_NODE]: ToolbarNode,
  [nodeTypesEnum.CUSTOM_RESIZER_NODE]: ResizerNode,
  [nodeTypesEnum.CUSTOM_CIRCLE_NODE]: CircleNode,
  [nodeTypesEnum.CUSTOM_TEXTINPUT_NODE]: TextInputNode,
};

export const edgeTypes = {
  [edgeTypesEnum.CUSTOM_EDGE]: CustomEdge,
  [edgeTypesEnum.CUSTOM_BUTTON_EDGE]: ButtonEdge,
};
