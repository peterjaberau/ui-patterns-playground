import { Container, Heading, Text } from '@medusajs/ui';

export const ActorConfigContent = () => {
  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Config Content'}</Heading>
        </div>

        <div className="flex grow justify-center p-4">config content</div>
      </Container>
    </>
  );
};
