import { NodeMouseHandler, Handle } from '@xyflow/react';
import { useForm } from 'form-render';
import { ReactNode, ComponentProps } from 'react';

export type HandleProps = ComponentProps<typeof Handle>;

export interface TNodeItem {
  title: string; // node title
  type: string; // Node type_group comparison
  description?: string; // Node description
  hidden?: boolean; // Is it visible?
  icon: {
    type: string;
    bgColor: string;
  };
  settingSchema?: any; // Node configuration schema (pop-up window) string is a custom component
  settingWidget?: string; // Custom component
  settingWidgetProps?: object; // Custom component parameters
  hideDesc?: boolean; // Hide business description
  nodePanel?: {
    //Configure panel property settings
    width?: string | number; //Configure panel width
    hideDesc?: boolean; //Configure panel description
  };
  getSettingSchema?: (
    nodeId: string,
    nodeType: string,
    nodeItem: TNodeItem,
    nodeData: any,
    form: ReturnType<typeof useForm>,
  ) => Promise<any>;

  switchExtra: {
    // Conditional node extra attribute configuration
    hideElse: boolean;
    valueKey: string;
    titleKey: string;
  };
  parallelExtra: {
    // Additional configuration for parallel nodes
    valueKey: string;
    titleKey: string;
  };
  disabledCopy?: boolean;
  disabledDelete?: boolean;
  onTesting: (node: any, nodes: any) => void; // Single point debugging method
}

export interface TNodeGroup {
  title: string; // node title
  type: '_group';
  items: TNodeItem[];
}

export interface TNodeMenu {
  ref: React.RefObject<any>; // optional ref attribute
  showSearch: boolean; // Whether the configuration is searchable
  items: (TNodeGroup | TNodeItem | any)[];
  onClick: ({}: { type: string }) => void;
}

export interface TNodePanel {
  //Configure panel property settings
  width?: string | number; //Configure panel width
  hideDesc?: boolean; //Configure panel description
  onClose?: (activeNodeId: string) => void;
}

export interface TNodeSelector {
  showSearch: boolean; // Whether the configuration is searchable
  items?: (TNodeGroup | TNodeItem)[];
}

export interface TLogListItem {
  // Log data format:
  statusPanel?: {
    status?: Array<{ label: string; value?: string; isBadge?: boolean }>; // isBadge indicates whether the status is displayed in badge form
    extra?: string | ReactNode;
  };
  codePanel?: Array<{ title: string; code: string }>;
  nodeId: string; // Node ID
}

export interface TLogPanel {
  // Log panel
  // logData: any; // Data received by the log panel
  logList: Array<TLogListItem>; // All data in the log panel ===》By default, you can get the log data of all nodes on the page
  loading?: boolean; // Log panel loading
  logWidget?: string; // Custom log panel component
  width?: number; // Log panel width
}

export interface TNodeView {
  hideTitleTips?: boolean;
  status?: Array<{
    name: string; // state name
    color: string; // status color
  }>;
}

export interface TEdge {
  // Edge configuration
  hideEdgeAddBtn?: boolean; // Whether to hide the add node button on the line between two nodes
  hideEdgeDelBtn?: boolean; // Whether to hide the delete node button on the line between two nodes
  deletable?: boolean; // Is it allowed to delete the edges initialized by the line without being affected by this item?
}

export interface TControl {
  hideAddNode?: boolean;
  hideAnnotate?: boolean;
}

export interface THandle {
  // isConnectableStart?:boolean
  // isConnectableEnd?:boolean
  isValidConnection?: HandleProps['isValidConnection'];
}
export interface FlowProps {
  initialValues?: {
    nodes: any[];
    edges: any;
  };
  layout?: 'LR' | 'TB';
  /**
   * Custom components
   */
  widgets?: any;
  /**
   * Node configuration
   */
  settings?: (TNodeGroup | TNodeItem)[];
  nodeSelector?: TNodeSelector;
  iconFontUrl?: string;
  globalConfig?: {
    nodePanel?: TNodePanel;
    nodeView?: TNodeView;
    edge?: TEdge;
    controls?: TControl;
    handle?: THandle;
    deleteKeyCode?: string | string[] | null;
  };
  logPanel?: TLogPanel; // Log panel configuration
  readOnly?: boolean; //Read-only mode
  onNodeClick?: NodeMouseHandler;
  onMenuItemClick?: (itemInfo: ItemInfo, defaultAction: () => void) => void;
  clickAddNode?: (type: string, nodeItem: TNodeItem, addNode: (initData?: Record<string, any>) => void) => void;
}
interface ItemInfo {
  key: 'copy' | 'paste' | 'delete' | string;
  nodeId: string;
  sourceHandle?: string;
}

export default FlowProps;
