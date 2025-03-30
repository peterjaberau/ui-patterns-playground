import { PencilSquare, Trash } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { HttpTypes } from '@medusajs/types';
import { Container, Heading, StatusBadge, Text, toast, usePrompt } from '@medusajs/ui';
import { useRouter } from 'next/navigation';
import { ActionMenu } from '@/components/common/action-menu';
import Link from 'next/link';

type CustomerGeneralSectionProps = {
  customer: HttpTypes.AdminCustomer | any;
};

export const CustomerGeneralSection = ({ customer }: CustomerGeneralSectionProps) => {
  const prompt = usePrompt();
  const navigate = useRouter();

  const name = [customer.first_name, customer.last_name].filter(Boolean).join(' ');

  const statusColor = customer.has_account ? 'green' : 'orange';
  const statusText = customer.has_account ? 'Registered' : 'Guest';

  const handleDelete = async () => {
    const res = await prompt({
      title: 'Delete Customer',
      description: `You are about to delete the customer ${customer.email}. This action cannot be undone.`,
      verificationInstruction: 'Please type {val} to confirm.',
      verificationText: customer.email,
      confirmText: 'Delete',
      cancelText: 'Cancel',
    });

    if (!res) {
      return;
    }

    toast.success(`Customer ${customer.email} was successfully deleted.`);

    // navigate.push('/customers', { replace: true });
  };

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading>{customer.email}</Heading>
        <div className="flex items-center gap-x-2">
          <StatusBadge color={statusColor}>{statusText}</StatusBadge>
          <Link href={`/page-detail/open/${customer.id}?mode=modal`}>
            <Button size="small" variant="secondary">
              Edit as modal
            </Button>
          </Link>
          <Link href={`/page-detail/open/${customer.id}?mode=drawer`}>
            <Button size="small" variant="secondary">
              Edit as drawer
            </Button>
          </Link>
          <Link href={`/page-detail/open/${customer.id}`}>
            <Button size="small" variant="secondary">
              Edit as drafult
            </Button>
          </Link>
          <ActionMenu
            groups={[
              {
                actions: [
                  {
                    label: 'Edit',
                    icon: <PencilSquare />,
                    to: `/page-detail/open/${customer.id}`,
                  },
                ],
              },
              {
                actions: [
                  {
                    label: 'Delete',
                    icon: <Trash />,
                    onClick: handleDelete,
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
        <Text size="small" leading="compact" weight="plus">
          Name
        </Text>
        <Text size="small" leading="compact">
          {name || '-'}
        </Text>
      </div>
      <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
        <Text size="small" leading="compact" weight="plus">
          Company
        </Text>
        <Text size="small" leading="compact">
          {customer.company_name || '-'}
        </Text>
      </div>
      <div className="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
        <Text size="small" leading="compact" weight="plus">
          Phone
        </Text>
        <Text size="small" leading="compact">
          {customer.phone || '-'}
        </Text>
      </div>
    </Container>
  );
};
