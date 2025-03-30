import { Container } from '@medusajs/ui';

export const ItemWrapper: React.FC = ({ children }: any) => {
  return <Container className="h-full">{children}</Container>;
};
