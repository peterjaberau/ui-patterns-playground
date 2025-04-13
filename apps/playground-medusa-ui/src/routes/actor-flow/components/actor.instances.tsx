import { useActorRootRef, useActorRootSelector } from '@/routes/actor-flow/machine/context';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';

const selectActorState = (snapshot: any) => snapshot.context;

export const ActorInstances = () => {
  const actorInstances = useActorRootSelector((state) => state.context.actorInstances);
  const { send } = useActorRootRef();

  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Actor Instances'}</Heading>
        </div>
        {[...actorInstances].map(([id, { latestSelectedItems, actorRef }]) => (
          <div key={id} className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
            <Text size="small" leading="compact" weight="plus">
              {actorRef.getSnapshot().context.component.name} / {id}
            </Text>
            <div className="flex justify-end gap-4">
              <Button size="small" variant="secondary">
                Delete
              </Button>
              <Button size="small" variant="secondary">
                Select
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

/*


 {actorInstances.map((actor: any) => (
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
 ))}

 */
