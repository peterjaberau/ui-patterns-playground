'use client';

import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';
import XFlow, { FlowProvider } from '@/components/x-flow';
// import XFlow from '@/components/x-flow';
import React from 'react';
import { getFlowConfig, getDomainSchema } from './flow/config';
import { NodeWidgetHTTP, NodeWidgetLLM, NodeWidgetClassifier } from './flow/nodeWidgets';

import showSwitchNode from './flow/components/showSwitchNode';
// import { XFlow } from '@/components/x-flow';
import { settings } from './flow/setting';
import { nodes, edges } from './flow/const';
import './flow/index.css';
import { Tools } from './flow/tools';

export const ActorEditorFlow = () => {
  const handleCreateActorInstance = () => {};

  // const [flowSettings, setFlowSettings] = React.useState(getDomainSchema({ name: 'general' }));
  // const [flowConfig, setFlowConfig] = React.useState(getFlowConfig({ name: 'basic' }));

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Flow Editor'}</Heading>
          <div className="flex items-center gap-x-2">
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
          <FlowProviderWrapper />
        </div>
      </Container>
    </>
  );
};

const FlowWrapper = () => {
  const [flowSettings, setFlowSettings] = React.useState(getDomainSchema({ name: 'general' }));
  const [flowConfig, setFlowConfig] = React.useState(getFlowConfig({ name: 'basic' }));

  return (
    <XFlow
      {...flowConfig.props}
      initialValues={flowConfig.content}
      settings={flowSettings?.schema}
      widgets={{ NodeWidgetHTTP, NodeWidgetLLM, NodeWidgetClassifier }}
    />
  );
};

const FlowProviderWrapper = () => {
  return (
    <FlowProvider>
      <div style={{ height: '800px', width: '100%', position: 'relative' }}>
        <FlowWrapper />
      </div>
    </FlowProvider>
  );
};
