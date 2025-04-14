'use client';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import Link from 'next/link';
import XFlow, { FlowProvider } from '@/components/x-flow';
import React, { useState } from 'react';
import { getFlowConfig, getDomainSchema, getFlowWidgets } from './flow/config';
import './flow/index.css';
import { FlowPicker } from './common/flow-picker';

import { useFlowActorRef, useFlowActorSelector } from './flow-machine/context';
const selectFlowActorState = (snapshot: any) => snapshot.context;

export const ActorEditorFlow = () => {
  const flowActorState = useFlowActorSelector(selectFlowActorState);
  console.log('flowActorState', flowActorState);

  const handleCreateActorInstance = () => {};
  const [flowSettings, setFlowSettings] = React.useState(getDomainSchema({ name: 'general' })); //primitive

  const [flowConfig, setFlowConfig] = React.useState(getFlowConfig({ name: 'basic' })); //primitive
  const [flowWidgets, setFlowWidgets] = React.useState(getFlowWidgets({ name: 'general' })); //primitive
  const [loading, setLoading] = useState(false);
  const [logList, setLogList] = useState<any[]>(flowConfig.logs || []);

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Flow Editor'}</Heading>
          <div className="flex items-center gap-x-2">
            <FlowPicker />
            <Link href={`/actors/open/default-flow-id?mode=modal`}>
              <Button size="small" variant="danger">
                Default Modal
              </Button>
            </Link>
            <Link href={`/actors/open/default-flow-id?mode=drawer`}>
              <Button size="small" variant="secondary">
                Default Drawer
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex p-4">
          <FlowProvider>
            <div style={{ height: '800px', width: '100%', position: 'relative' }}>
              {/* ...flowConfig.props */}
              <XFlow
                {...flowActorState.flow?.props}
                initialValues={flowActorState.flow.initialValues}
                settings={flowActorState.flow?.settings.settingSchema}
                onTesting={(node: any, nodes: any) => {}}
                logPanel={{
                  logList,
                  loading,
                }}
                widgets={flowActorState.flow?.widgets}
              />
            </div>
          </FlowProvider>
        </div>
      </Container>
    </>
  );
};
