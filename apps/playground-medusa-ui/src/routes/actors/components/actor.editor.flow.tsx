import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';

import XFlow from '@xrenders/xflow';
import { settings } from './flow/setting';
import { nodes, edges } from './flow/const';
import React from 'react';
import './flow/index.css';
import showSwitchNode from './flow/showSwitchNode';
import Header from './flow/header';
import { Tools } from './flow/tools';

export const ActorEditorFlow = () => {
  const handleCreateActorInstance = () => {};

  return (
    <>
      <Container className="h-[400px] divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Flow Editor'}</Heading>
        </div>

        <div className="flex justify-center p-4">
          <div style={{ height: '600px', position: 'relative' }}>
            <Header data={{}} />
            <XFlow
              initialValues={{ nodes, edges }}
              settings={settings as any}
              nodeSelector={{
                showSearch: true,
              }}
              widgets={{ showSwitchNode }}
            />
            <Tools />
          </div>
        </div>
      </Container>
    </>
  );
};
