import { ActionMenu } from '@/components/common/action-menu';
import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';
import { useActorsContext } from '../machine/ActorsContext';

export const ActorInstancesSection = () => {
  const { actors } = useActorsContext();
  const actorInstances = useSelector(actors, (state) => state.context.actorInstances);

  const handleCreateActorInstance = () => {
    const newActorInstance = {
      actorInstanceId: `actor-${Date.now()}`,
      actorTitle: `Actor Instance Title ${Date.now()}`,
      children: [],
    };

    actors.send({
      type: 'ADD_ACTOR_INSTANCE',
      actorInstance: newActorInstance,
    });
  };

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Actor Instances'}</Heading>

          <div className="flex items-center gap-x-2">
            <Link href={'#'}>
              <Button size="small" variant="primary" onClick={handleCreateActorInstance}>
                Create Actor
              </Button>
            </Link>
          </div>
        </div>
        {actorInstances.map((actor: any) => (
          <>
            <div key={actor.actorInstanceId} className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
              <Text size="small" leading="compact" weight="plus">
                {actor.actorInstanceId}
              </Text>
              <div className="flex justify-end">
                <Button size="small" variant="secondary">
                  Select
                </Button>
              </div>
            </div>
          </>
        ))}
      </Container>
    </>
  );
};
