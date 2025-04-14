import { Button, Popover, ActionList } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useFlowActorRef, useFlowActorSelector } from '../flow-machine/context';
import { metadata } from '../flow/config';

const selectFlowActorState = (snapshot: any) => snapshot.context;

export function FlowPicker() {
  const { send } = useFlowActorRef();
  const flowActorState = useFlowActorSelector(selectFlowActorState);
  console.log('flowActorState', flowActorState);

  const [popoverActive, setPopoverActive] = useState(false);
  const [selected, setSelected] = useState(null);

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      {selected || 'Select a flow'}
    </Button>
  );

  const handleItemAction = (item: any) => {
    setSelected(item);
    setPopoverActive(false);
    send({ type: 'flow.load', payload: { name: item } });
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
