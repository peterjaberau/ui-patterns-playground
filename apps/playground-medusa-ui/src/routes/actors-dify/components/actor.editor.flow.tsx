'use client';

import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import Link from 'next/link';
import React from 'react';
import { getFlowConfig, getDomainSchema } from './flow/config';
import './flow/index.css';

export const ActorEditorFlow = () => {
  const handleCreateActorInstance = () => {};

  const [flowSettings, setFlowSettings] = React.useState(getDomainSchema({ name: 'general' }));
  const [flowConfig, setFlowConfig] = React.useState(getFlowConfig({ name: 'basic' }));

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
          <div style={{ height: '800px', width: '100%', position: 'relative' }}></div>
        </div>
      </Container>
    </>
  );
};
