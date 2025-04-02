import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { HttpTypes } from '@medusajs/types';
import { Container, Heading, StatusBadge, Text, toast, usePrompt } from '@medusajs/ui';
import { useRouter } from 'next/navigation';
import { ActionMenu } from '@/components/common/action-menu';
import Link from 'next/link';

export const ActorScenePreview = ({ scenario }: any) => {
  const { scenarioId, props } = scenario;

  const prompt = usePrompt();
  const navigate = useRouter();

  const handleAction = async () => {
    toast.success(`Scenario ${scenarioId} action triggered.`);
  };

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading>{`Preview`}</Heading>
        <div className="flex items-center gap-x-2">
          <StatusBadge color={'green'}>{'NA'}</StatusBadge>
          <Link href={`/actors/open/${scenarioId}?mode=drawer`}>
            <Button size="small" variant="secondary">
              Open
            </Button>
          </Link>
          <ActionMenu
            groups={[
              {
                actions: [
                  {
                    label: 'Open',
                    icon: <PencilSquare />,
                    to: `/actors/open/${scenarioId}?mode=drawer`,
                  },
                ],
              },
              {
                actions: [
                  {
                    label: 'Action',
                    icon: <Trash />,
                    onClick: handleAction,
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <div className="text-ui-fg-subtle flex items-center justify-center px-6 py-4">
        <Button size="small" variant="secondary">
          {'Actor Text'}
        </Button>
      </div>
    </Container>
  );
};
