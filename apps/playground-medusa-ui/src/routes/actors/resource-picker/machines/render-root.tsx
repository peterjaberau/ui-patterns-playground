import {
  EuiButton,
  EuiSplitPanel,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiRadioGroup,
  EuiComboBox,
  EuiFormRow,
} from '@elastic/eui';
import { Button, Container, Heading } from '@medusajs/ui';
import { useActorRef } from '@xstate/react';
import Link from 'next/link';
import { FC } from 'react';
import { ActorOptions, AnyActorLogic } from 'xstate';

import { ResourcePickerProvider } from './render-picker';
import { RootProvider, useRootRef, useRootSelector } from './context';
import { rootMachine } from './machines';
import { formOptions } from './data';

interface RootProps {
  actorOptions: ActorOptions<AnyActorLogic> | undefined | any;
  children: React.ReactNode;
}

export const RootRenderer = ({ children, actorOptions }: RootProps) => {
  const rootActorRef = useActorRef(rootMachine, actorOptions);
  return <RootProvider value={rootActorRef}>{children}</RootProvider>;
};

export const RootForm = () => {
  const spawnForm = useRootSelector((snapshot) => snapshot.context.spawnForm);
  const { send } = useRootRef();

  return (
    <EuiSplitPanel.Outer title="Resource Picker Item Type">
      <EuiSplitPanel.Inner>
        <EuiFlexGroup direction={'column'} gutterSize={'xs'}>
          <EuiFormRow label="Resource Type">
            <EuiRadioGroup
              options={formOptions.itemTypes}
              idSelected={spawnForm.resourceType}
              onChange={(id) => {
                const selected = id;
                if (!selected) return;
                send({
                  type: 'rpSpawnForm.edit',
                  payload: {
                    key: 'resourceType',
                    value: selected,
                  },
                });
              }}
            />
          </EuiFormRow>

          <EuiFormRow label="Resource Ui Mode">
            <EuiComboBox
              singleSelection={{ asPlainText: true }}
              options={formOptions.uiMode}
              selectedOptions={formOptions.uiMode.filter((option: any) => {
                return option.value === spawnForm.uiSettings.resourceUiMode;
              })}
              onChange={(selectedOptions: any) => {
                const selected = selectedOptions.at(0).value;

                console.log('onChange', {
                  selectedOptions: selectedOptions,
                  selected: selected,
                });

                if (!selected) return;
                send({
                  type: 'rpSpawnForm.edit',
                  payload: {
                    key: 'uiSettings.resourceUiMode',
                    value: selected,
                  },
                });
              }}
            />
          </EuiFormRow>

          <EuiFormRow label="Modal Size">
            <EuiRadioGroup
              options={formOptions.modalSize}
              idSelected={spawnForm.uiSettings.modalSize ?? 'medium'}
              onChange={(id) => {
                const selected = id;
                if (!selected) return;
                send({
                  type: 'rpSpawnForm.edit',
                  payload: {
                    key: 'uiSettings.modalSize',
                    value: selected,
                  },
                });
              }}
            />
          </EuiFormRow>

          <EuiFormRow label="Selection Type">
            <EuiRadioGroup
              options={formOptions.selectionType}
              idSelected={spawnForm.resourceSelectionType}
              onChange={(id) => {
                const selected = id;
                if (!selected) return;
                send({
                  type: 'rpSpawnForm.edit',
                  payload: {
                    key: 'resourceSelectionType',
                    value: selected,
                  },
                });
              }}
            />
          </EuiFormRow>
        </EuiFlexGroup>
      </EuiSplitPanel.Inner>
      <EuiSplitPanel.Inner>
        <EuiButton
          onClick={() => {
            send({
              type: 'rp.spawn',
            });
          }}
        >
          Spawn
        </EuiButton>
      </EuiSplitPanel.Inner>
    </EuiSplitPanel.Outer>
  );
};

export const RootCard: FC<any> = ({ id, latestSelectedItemIds, actorRef }) => {
  const { send } = useRootRef();

  return (
    <EuiCard
      key={id}
      title={`Resource Picker - ${id}`}
      description={
        <EuiFlexGroup direction={'column'}>
          <EuiFlexItem>Selected Items</EuiFlexItem>
          {[...latestSelectedItemIds].map((id) => (
            <EuiFlexItem key={id}>{id}</EuiFlexItem>
          ))}
        </EuiFlexGroup>
      }
      footer={
        <EuiFlexGroup justifyContent={'center'} alignItems={'center'} direction={'row'}>
          <EuiFlexItem>
            <EuiButton
              size={'s'}
              onClick={() => {
                send({
                  type: 'rp.open',
                  payload: {
                    id: id,
                  },
                });
              }}
            >
              Open
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton
              size={'s'}
              color={'danger'}
              onClick={() => {
                send({
                  type: 'rp.kill',
                  payload: {
                    id: id,
                  },
                });
              }}
            >
              Kill
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      }
    >
      <ResourcePickerProvider actorRef={actorRef} />
    </EuiCard>
  );
};

export const RootMain = () => {
  const pickers = useRootSelector((state) => state.context.pickers);
  return (
    <>
      <EuiFlexGrid columns={2}>
        <EuiFlexItem grow={true}>
          <div className="flex items-center justify-between px-6 py-4">
            <Heading>{'Root control panel'}</Heading>

            <div className="flex items-center gap-x-2">
              <Link href={'#'}>
                <Button size="small" variant="primary" onClick={() => {}}>
                  Action
                </Button>
              </Link>
            </div>
          </div>

          <EuiFlexGrid columns={3}>
            {[...pickers].map(([id, { latestSelectedItems, actorRef }]) => (
              <RootCard
                key={id}
                id={id}
                latestSelectedItemIds={new Set(latestSelectedItems.keys())}
                actorRef={actorRef}
              />
            ))}
          </EuiFlexGrid>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <Container>
            <Heading>{'Options'}</Heading>
            <RootForm />
          </Container>
        </EuiFlexItem>
      </EuiFlexGrid>
    </>
  );
};
