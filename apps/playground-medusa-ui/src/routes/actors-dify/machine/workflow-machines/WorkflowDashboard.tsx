const WorkflowDashboard = () => {
  const { spawnWorkflow, sendToWorkflow, getWorkflowContext } = useParentMachine();

  const id = 'workflow-123';

  return (
    <div>
      <button onClick={() => spawnWorkflow(id)}>Spawn Workflow {id}</button>
      <button
        onClick={() =>
          sendToWorkflow(id, {
            type: 'SET_CONTROL_MODE',
            value: 'pointer',
          })
        }
      >
        Set Pointer Mode
      </button>
      <pre>{JSON.stringify(getWorkflowContext(id), null, 2)}</pre>
    </div>
  );
};
