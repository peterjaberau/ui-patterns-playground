'use client';

import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';
import WithProvider from '@/components/x-flow';

// import { XFlow } from '@/components/x-flow';
import { settings } from './flow/setting';
import { nodes, edges } from './flow/const';
import React from 'react';
import './flow/index.css';
import showSwitchNode from './flow/showSwitchNode';
import { customNodeWidget, customEndNodeWidget, customLLMNodeWidget } from './flow/customization/nodeWidgets';
import { Tools } from './flow/tools';

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
          <div style={{ height: '800px', width: '100%', position: 'relative' }}>
            <WithProvider
              initialValues={{ nodes, edges }}
              settings={settings as any}
              nodeSelector={{
                showSearch: true,
              }}
              widgets={{ showSwitchNode }}
              // , customEndNodeWidget, customNodeWidget, customLLMNodeWidget
            />
            <Tools />
          </div>
        </div>
      </Container>
    </>
  );
};
