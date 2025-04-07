import XFlow from './XFlow';
import withProvider from './withProvider';

import * as nodes from './nodes';
import FlowProps from './types';

export type { default as FR } from './types';

export { FlowProvider } from './components/FlowProvider';
export { useFlow } from './hooks/useFlow';
export { useNodes } from './hooks/useNodes';
export { useEdges } from './hooks/useEdges';

export default withProvider<FlowProps>(XFlow, nodes);

/*
 export * from '@x-flow/XFlowProvider';
 export * from '@x-flow/XFlow';
 export * from '@x-flow/withProvider';

 export * from '@x-flow/components/FlowProvider';

 export * from '@x-flow/hooks/useEdges';
 export * from '@x-flow/hooks/useFlow';
 export * from '@x-flow/hooks/useNodes';
 export * from '@x-flow/hooks/useEdges';
 export * from '@x-flow/hooks/useStore';
 export * from '@x-flow/hooks/useTemporalStore';

 export * from '@x-flow/types';
 export * from '@x-flow/utils';


 */
