'use client';

import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import Link from 'next/link';
import XFlow, { FlowProvider } from '@/components/x-flow';
import React, { useState } from 'react';
import { getFlowConfig, getDomainSchema } from './flow/config';
import { NodeWidgetHTTP, NodeWidgetLLM, NodeWidgetClassifier } from './flow/nodeWidgets';
import { SettingWidgetSimple, SettingWidgetAdvanced } from './flow/settingWidgets';
import './flow/index.css';

export const ActorEditorFlow = () => {
  const handleCreateActorInstance = () => {};

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

  const [loading, setLoading] = useState(false);
  const [logList, setLogList] = useState<any[]>(flowConfig.logs || []);

  return (
    <XFlow
      {...flowConfig.props}
      initialValues={flowConfig.content}
      settings={flowSettings?.schema}
      onTesting={(node: any, nodes: any) => {
        // node: the node currently being debugged
        // nodes: all node data
        // console.log('single point debugging', node, nodes);
      }}
      logPanel={{
        logList,
        loading,
      }}
      widgets={{ NodeWidgetHTTP, NodeWidgetLLM, NodeWidgetClassifier, SettingWidgetSimple, SettingWidgetAdvanced }}
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
