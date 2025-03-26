'use client';
import { Tab } from '@/ui/tab';
import { EuiTabs } from '@elastic/eui';

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
};

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <EuiTabs>
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </EuiTabs>
  );
};
