import { Container, Heading, Text } from '@medusajs/ui';

export const ActorConfigAppearance = () => {
  const handleCreateActorInstance = () => {};

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Config Appearance'}</Heading>
        </div>

        <div className="flex justify-center p-4">config appearance</div>
      </Container>
    </>
  );
};
