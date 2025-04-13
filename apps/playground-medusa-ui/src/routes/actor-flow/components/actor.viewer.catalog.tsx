import { Button } from '@medusajs/ui';
import { Container, Heading } from '@medusajs/ui';
import { dataResources } from '../machine/data';
import { useActorRootSelector, useActorRootRef } from '../machine/context';

export const ActorViewerCatalog = () => {
  const spawnForm = useActorRootSelector((snapshot) => snapshot.context.spawnActor);
  const { send } = useActorRootRef();

  const handleSpawnActor = (pluginName: any) => {
    const plugin = dataResources.find((resource) => resource.name === pluginName);
    const { name, previewSchema, variants, schema }: any = plugin;

    send({
      type: 'act-ins.spawn',
      payload: {
        name,
        previewSchema,
        variants,
        schema,
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
          {dataResources.map((resource) => (
            <Button key={resource.name} size="small" variant="primary" onClick={() => handleSpawnActor(resource.name)}>
              Spawn {resource.plugin.panelTitle}
            </Button>
          ))}
        </div>
      </Container>
    </>
  );
};
