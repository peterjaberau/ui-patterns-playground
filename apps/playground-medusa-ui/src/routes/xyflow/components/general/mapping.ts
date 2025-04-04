// nodes
import AnnotationNode from './nodes/AnnotationNode';
import CircleNode from './nodes/CircleNode';
import ColorSelectorNode from './nodes/ColorSelectorNode';
import ResizerNode from './nodes/ResizerNode';
import TextInputNode from './nodes/TextInputNode';
import ToolbarNode from './nodes/ToolbarNode';

//edges
import ButtonEdge from './edges/ButtonEdge';

export const nodeTypesMapping = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextInputNode,
  colorselector: ColorSelectorNode,
};

export const edgeTypesMapping = {
  button: ButtonEdge,
};
