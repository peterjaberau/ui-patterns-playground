import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { HttpTypes } from '@medusajs/types';
import { Container, Heading, StatusBadge, Text, toast, usePrompt } from '@medusajs/ui';
import { useRouter } from 'next/navigation';
import { ActionMenu } from '@/components/common/action-menu';
import Link from 'next/link';

export const ActorSpecsSection = ({ scenario }: any) => {
  const { scenarioId, props } = scenario;

  const prompt = usePrompt();
  const navigate = useRouter();

  const handleAction = async () => {
    toast.success(`General ${scenarioId} action triggered.`);
  };

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'Specs'}</Heading>
          <div className="flex items-center gap-x-2">
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
        <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
          <Text size="small" leading="compact" weight="plus">
            Selected Actor
          </Text>
          <Text size="small" leading="compact">
            {scenarioId}
          </Text>
        </div>
        <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
          <Text size="small" leading="compact" weight="plus">
            Status
          </Text>
          <StatusBadge color={'green'}>{'NA'}</StatusBadge>
        </div>
        <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
          <Text size="small" leading="compact" weight="plus">
            Open Modal
          </Text>
          <Link href={`/actors/open/${scenarioId}?mode=drawer`}>
            <Button size="small" variant="secondary">
              Click
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
