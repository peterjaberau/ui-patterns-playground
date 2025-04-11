import { useMachine } from '@xstate/react';
import { parentMachine } from './parentMachine';

const ParentComponent = () => {
  const [state, send] = useMachine(parentMachine);

  const sendPointerMode = () => send({ type: 'WORKFLOW.SEND', event: { type: 'SET_CONTROL_MODE', value: 'pointer' } });

  return (
    <div>
      <button onClick={() => send({ type: 'INIT_WORKFLOW' })}>Init Workflow</button>
      <button onClick={sendPointerMode}>Set Control Mode: Pointer</button>
    </div>
  );
};
