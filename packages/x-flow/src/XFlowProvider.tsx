import { XFlow } from './XFlow';
import { withProvider } from './withProvider';

import * as nodes from './nodes';
import { FlowProps } from './types';

const XFlowProvider = withProvider<FlowProps>(XFlow, nodes);

export { XFlowProvider };
