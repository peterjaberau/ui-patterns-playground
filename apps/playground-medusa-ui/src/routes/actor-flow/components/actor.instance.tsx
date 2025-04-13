import { Container, Heading, Text } from '@medusajs/ui';

export const ActorInstance = () => {
  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Actor Instance'}</Heading>
        </div>

        <div className="flex justify-center p-4">instance</div>
      </Container>
    </>
  );
};
