import { Scrollable, Tabs } from '@shopify/polaris';
import { NodeViewerCatalog, NodeViewerComponent, NodeViewerSpecifications, NodeViewerState } from './ui/nodeWidgets';
import JsonView from 'react18-json-view';
import { Card, BlockStack, InlineStack, Button } from '@shopify/polaris';
import { useState } from 'react';

const NodeMapping: any = {
  NodeViewerCatalog: NodeViewerCatalog,
  NodeViewerComponent: NodeViewerComponent,
  NodeViewerSpecifications: NodeViewerSpecifications,
  NodeViewerState: NodeViewerState,
};

interface NodeWidgetRendererProps {
  ref?: {
    id: string;
    component: keyof typeof NodeMapping; // Ensures the component is a key of NodeMapping
    props?: Record<string, any>;
  };
  data?: any;
  [key: string]: any;
}

const tabs = [
  {
    id: 'preview',
    content: 'Preview',
  },
  {
    id: 'debug',
    content: 'Debug',
  },
];

export const NodeWidgetRenderer = (props: NodeWidgetRendererProps) => {
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Preview, 1 for Debug

  const isPreviewTab = selectedTab === 0;

  const SelectedComponent: any = NodeMapping[props.data.ref.component];

  const handleTabChange = (selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex);
  };

  // Render the selected component if it exists, otherwise render null or a fallback
  // return <>{SelectedComponent ? <SelectedComponent data={data} {...rest} /> : null}</>;

  return (
    <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
      <Card>
        {isPreviewTab ? (
          <>{SelectedComponent ? <SelectedComponent data={props.data} /> : null}</>
        ) : (
          <Scrollable style={{ height: '250px' }} focusable scrollbarGutter="stable" scrollbarWidth="thin">
            <JsonView
              src={props}
              collapsed={3}
              displaySize={true}
              collapseStringMode="directly"
              ignoreLargeArray
              collapseObjectsAfterLength={Infinity}
            />
          </Scrollable>
        )}
      </Card>
    </Tabs>
  );
};
