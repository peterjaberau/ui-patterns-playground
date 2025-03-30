import { HttpTypes } from '@medusajs/types';
import { clx, Container, Heading, toast, usePrompt } from '@medusajs/ui';

import { Trash } from '@medusajs/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ActionMenu } from '@/components/common/action-menu';
import { NoRecords } from '@/components/common/empty-table-content';
import { Listicle } from '@/components/common/listicle';

type CustomerAddressSectionProps = {
  customer: HttpTypes.AdminCustomer | any;
};

export const CustomerAddressSection = ({ customer }: CustomerAddressSectionProps) => {
  const prompt = usePrompt();
  const navigate = useRouter();

  const addresses = customer.addresses ?? [];

  const handleDelete = async (address: HttpTypes.AdminCustomerAddress) => {
    const confirm = await prompt({
      title: 'Are you sure?',
      description: `You are about to delete the Address ${address.address_name ?? 'n/a'}. This action cannot be undone.`,
      verificationInstruction: 'Please type {val} to confirm',
      verificationText: address.address_name ?? 'address',
      confirmText: 'You are about to confirm an Order Edit. This action cannot be undone.',
      cancelText: 'Cancel',
    });

    if (!confirm) {
      return;
    }

    toast.success(`${address.address_name ?? 'address'} was successfully deleted.`);

    navigate.replace(`/customers/${customer.id}`);
  };

  return (
    <Container className="p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">{'Addresses'}</Heading>
        <Link href={`create-address`} className="text-ui-fg-muted text-xs">
          Add
        </Link>
      </div>

      {addresses.length === 0 && (
        <NoRecords
          className={clx({
            'flex h-full flex-col overflow-hidden border-t p-6': true,
          })}
          icon={null}
          title="No records"
          message="There are no records to show"
        />
      )}

      {addresses.map((address: any) => {
        return (
          <Listicle
            key={address.id}
            labelKey={address.address_name ?? 'n/a'}
            descriptionKey={[address.address_1, address.address_2].join(' ')}
          >
            <ActionMenu
              groups={[
                {
                  actions: [
                    {
                      icon: <Trash />,
                      label: 'Delete',
                      onClick: async () => {
                        await handleDelete(address);
                      },
                    },
                  ],
                },
              ]}
            />
          </Listicle>
        );
      })}
    </Container>
  );
};
