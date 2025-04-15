import { useState, type Dispatch, type SetStateAction, type ReactNode, type HTMLAttributes } from 'react';
import { Panel } from '@xyflow/react';
import { Button } from '@shopify/polaris';

import NodeInspectorDevTools from './components/node-inspector.devtools';
import ChangeLoggerDevTools from './components/change-logger.devtools';
import ViewportLoggerDevTools from './components/viewport-logger.devtools';

export function FlowWidgetDevTools() {
  const [nodeInspectorActive, setNodeInspectorActive] = useState(true);
  const [changeLoggerActive, setChangeLoggerActive] = useState(true);
  const [viewportLoggerActive, setViewportLoggerActive] = useState(true);

  return (
    <div className="react-flow__devtools">
      <Panel position="top-left">
        <DevToolButton setActive={setNodeInspectorActive} active={nodeInspectorActive} title={'Node Inspector'} />
        <DevToolButton setActive={setChangeLoggerActive} active={changeLoggerActive} title={'Change Logger'} />
        <DevToolButton setActive={setViewportLoggerActive} active={viewportLoggerActive} title={'Viewport Logger'} />
      </Panel>
      {changeLoggerActive && <ChangeLoggerDevTools />}
      {nodeInspectorActive && <NodeInspectorDevTools />}
      {viewportLoggerActive && <ViewportLoggerDevTools />}
    </div>
  );
}

function DevToolButton({
  active,
  setActive,
  title,
  ...rest
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  title: string;
}) {
  const handleClick: any = () => {
    setActive((a) => !a);
  };

  return (
    <Button pressed={active} onClick={handleClick} {...rest}>
      {title}
    </Button>
  );
}
