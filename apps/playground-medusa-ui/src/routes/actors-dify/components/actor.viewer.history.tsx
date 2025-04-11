import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';

export const ActorViewerHistory = () => {
  // const { actors } = useActorsContext();
  // const actorInstances = useSelector(actors, (state) => state.context.actorInstances);

  const handleCreateActorInstance = () => {
    // const newActorInstance = {
    //   actorInstanceId: `actor-${Date.now()}`,
    //   actorTitle: `Actor Instance Title ${Date.now()}`,
    //   children: [],
    // };
    //
    // actors.send({
    //   type: 'ADD_ACTOR_INSTANCE',
    //   actorInstance: newActorInstance,
    // });
  };

  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Viewer History'}</Heading>
        </div>

        <div className="flex justify-center p-4">history</div>
      </Container>
    </>
  );
};
