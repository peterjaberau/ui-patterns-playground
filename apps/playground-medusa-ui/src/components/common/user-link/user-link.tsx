import { Avatar, Text } from '@medusajs/ui';
import Link from 'next/link';

type UserLinkProps = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  email: string;
  type?: 'customer' | 'user';
};

export const UserLink = ({ id, first_name, last_name, email, type = 'user' }: UserLinkProps) => {
  const name = [first_name, last_name].filter(Boolean).join(' ');
  const fallback = name ? name.slice(0, 1) : email.slice(0, 1);
  const link = type === 'user' ? `/settings/users/${id}` : `/customers/${id}`;

  return (
    <Link
      href={link}
      className="transition-fg hover:text-ui-fg-subtle focus-visible:shadow-borders-focus flex w-fit items-center gap-x-2 rounded-md outline-none"
    >
      <Avatar size="2xsmall" fallback={fallback.toUpperCase()} />
      <Text size="small" leading="compact" weight="regular">
        {name || email}
      </Text>
    </Link>
  );
};
