// nodes
import AnnotationNode from '../components/nodes/AnnotationNode';
import CircleNode from '../components/nodes/CircleNode';
import ResizerNode from '../components/nodes/ResizerNode';
import TextInputNode from '../components/nodes/TextInputNode';
import ToolbarNode from '../components/nodes/ToolbarNode';

//edges
import ButtonEdge from '../components/edges/ButtonEdge';

export const nodeTypesMapping = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextInputNode,
};

export const edgeTypesMapping = {
  button: ButtonEdge,
};
