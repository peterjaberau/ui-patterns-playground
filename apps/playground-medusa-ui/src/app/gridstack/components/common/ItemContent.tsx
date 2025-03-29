import { GridStackItem } from '@/ui/gridstack';

interface ItemContentProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const ItemContent = (props: ItemContentProps) => {
  const { children, ...rest } = props;
  return (
    <div
      className="bg-ui-bg-component border-ui-border-base flex h-full w-full items-center justify-center overflow-hidden rounded border"
      {...rest}
    >
      {children}
    </div>
  );
};
