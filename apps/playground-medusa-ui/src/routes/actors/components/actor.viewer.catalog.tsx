import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';

import { useActorRootSelector, useActorRootRef } from '../machine/context';

export const ActorViewerCatalog = () => {
  const spawnForm = useActorRootSelector((snapshot) => snapshot.context.spawnActor);
  const { send } = useActorRootRef();

  const handleSpawnActor = ({ resourceType }: any) => {
    send({
      type: 'act-ins.spawn',
      payload: {
        resourceType,
      },
    });
  };

  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Viewer Catalog'}</Heading>
        </div>
        <div className="inline-flex flex-wrap justify-center gap-4 p-4">
          <Button size="small" variant="primary" onClick={() => handleSpawnActor({ resourceType: 'Button' })}>
            Spawn Button
          </Button>
          <Button size="small" variant="primary" onClick={() => handleSpawnActor({ resourceType: 'Badge' })}>
            Spawn Badge
          </Button>
          <Button size="small" variant="primary" onClick={() => handleSpawnActor({ resourceType: 'Container' })}>
            Spawn Container
          </Button>

          <Button size="small" variant="primary" onClick={() => handleSpawnActor({ resourceType: 'Alert' })}>
            Spawn Alert
          </Button>
        </div>
      </Container>
    </>
  );
};
