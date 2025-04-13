import { Container, Heading, Text } from '@medusajs/ui';

export const ActorEditorRules = () => {
  return (
    <>
      <Container className="h-full divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Editor Rules'}</Heading>
        </div>

        <div className="flex justify-center p-4">rules</div>
      </Container>
    </>
  );
};
