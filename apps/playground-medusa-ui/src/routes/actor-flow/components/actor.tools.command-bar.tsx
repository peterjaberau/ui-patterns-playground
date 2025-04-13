import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';

export const ActorToolsCommandBar = () => {
  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Tools Command Bar'}</Heading>
        </div>

        <div className="flex justify-center p-4">
          <Button size="small" variant="secondary">
            onClick
          </Button>
        </div>
      </Container>
    </>
  );
};
