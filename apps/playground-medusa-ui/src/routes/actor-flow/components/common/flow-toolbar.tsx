import { InlineStack, Button, ButtonGroup, Popover, ActionList, Icon } from '@shopify/polaris';
import { ImportIcon, ExportIcon, DeleteIcon, PlusIcon } from '@shopify/polaris-icons';
import { useFlowActorRef, useFlowActorSelector } from '../flow-machine/context';
import { useState } from 'react';

const flowPropsSelector = (snapshot: any) => snapshot.context.flow.props;
const isIdleSelector = (snapshot: any) => snapshot.matches('idle');

export function FlowToolbar() {
  const { send } = useFlowActorRef();

  const [layoutMode, setLayoutMode] = useState(null) as any;
  const [isCreateActive, setIsCreateActive] = useState(false);
  const flowProps = useFlowActorSelector(flowPropsSelector);

  return (
    <>
      <InlineStack gap="400">
        {/* LayoutMode */}
        <ButtonGroup variant="segmented">
          <Button
            pressed={!flowProps.layout || flowProps.layout === 'manual'}
            onClick={() => send({ type: 'flow.updateProps', payload: { layout: 'manual' } })}
          >
            M
          </Button>
          <Button
            pressed={flowProps.layout === 'LR'}
            onClick={() => send({ type: 'flow.updateProps', payload: { layout: 'LR' } })}
          >
            LR
          </Button>
          <Button
            pressed={flowProps.layout === 'TB'}
            onClick={() => send({ type: 'flow.updateProps', payload: { layout: 'TB' } })}
          >
            TB
          </Button>
        </ButtonGroup>

        {/* Create */}
        <Popover
          active={isCreateActive}
          activator={
            <Button icon={PlusIcon} variant="primary" onClick={() => setIsCreateActive((prev) => !prev)}>
              Add node
            </Button>
          }
          onClose={() => setIsCreateActive(false)}
        >
          <ActionList
            actionRole="menuitem"
            sections={[
              {
                title: 'Node types',
                items: [
                  {
                    content: 'Create catalog viewer',
                    suffix: <ImportIcon />,
                  },
                  {
                    content: 'Create component viewer',
                    suffix: <ImportIcon />,
                  },
                  {
                    content: 'Create specification viewer',
                    suffix: <ImportIcon />,
                  },
                  {
                    content: 'Create state viewer',
                    suffix: <ImportIcon />,
                  },
                ],
              },
            ]}
          />
        </Popover>
      </InlineStack>
    </>
  );
}
