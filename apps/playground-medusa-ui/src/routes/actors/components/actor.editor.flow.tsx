'use client';

import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';
import { XFlow, XFlowProvider } from '@/components/x-flow';
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
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Flow Editor'}</Heading>
        </div>

        <div className="flex p-4">
          <div
            className="w-100 h-100 flex flex-col justify-start"
            style={{ height: '800px', width: '100%', position: 'relative' }}
          >
            {/* <Header data={{}} /> */}
            <XFlowProvider
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
