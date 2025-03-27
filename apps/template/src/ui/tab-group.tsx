'use client';
import { Tab } from '@/ui/tab';
import { EuiFlexGroup, EuiFlexItem, EuiTabs } from '@elastic/eui';
import { EuiButton } from '@elastic/eui';

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
};

export const TabGroup = ({ path, items, action }: { path: string; items: Item[]; action?: any | React.ReactNode }) => {
  return (
    <EuiTabs>
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" direction="row">
        <EuiFlexItem grow={false}>
          <EuiFlexGroup justifyContent="flexStart" alignItems="center" direction="row">
            {items.map((item) => (
              <Tab key={path + item.slug} item={item} path={path} />
            ))}
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center" direction="row">
            {action}
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiTabs>
  );
};
