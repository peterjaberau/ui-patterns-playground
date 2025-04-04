import { XFlow } from './XFlow';
import { withProvider } from './withProvider';

import * as nodes from './nodes';

const XFlowProvider = withProvider(XFlow, nodes);

export { XFlowProvider };
