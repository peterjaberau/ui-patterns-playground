import { Button, Popover, ActionList } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useFlowActorRef, useFlowActorSelector } from '../flow-machine/context';
import { metadata } from '../flow/config';

const flowContextSelector = (snapshot: any) => snapshot.context;
const flowStateSelector = (snapshot: any) => snapshot;
const currentFlowNameSelector = (snapshot: any) => snapshot.context.flow.name;
const isIdleSelector = (snapshot: any) => snapshot.matches('idle');

export function FlowPicker() {
  const { send } = useFlowActorRef();
  const flowState = useFlowActorSelector(flowContextSelector);
  const currentFlowName = useFlowActorSelector(currentFlowNameSelector);
  const isIdle = useFlowActorSelector(isIdleSelector);

  const [popoverActive, setPopoverActive] = useState(false);
  const [selected, setSelected] = useState(null);

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const activator = (
    <Button variant="primary" onClick={togglePopoverActive} disclosure>
      {currentFlowName || 'Select a flow'}
    </Button>
  );

  const handleItemAction = (item: any) => {
    setPopoverActive(false);
    if (isIdle) {
      send({ type: 'flow.load', payload: { name: item } });
    }
  };

  return (
    <Popover active={popoverActive} activator={activator} autofocusTarget="first-node" onClose={togglePopoverActive}>
      <ActionList
        actionRole="menuitem"
        items={metadata.flows.map((item: any) => ({ content: item, onAction: () => handleItemAction(item) }))}
      />
    </Popover>
  );
}
