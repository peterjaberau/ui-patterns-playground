import { useWorkflowActor } from './useWorkflowActor';

const WorkflowComponent = () => {
  const { state, send } = useWorkflowActor();

  return (
    <div>
      <p>Current mode: {state.controlMode}</p>
      <button onClick={() => send({ type: 'SET_CONTROL_MODE', value: 'pointer' })}>Set Pointer</button>
      <button onClick={() => send({ type: 'SET_CONTROL_MODE', value: 'hand' })}>Set Hand</button>
    </div>
  );
};
