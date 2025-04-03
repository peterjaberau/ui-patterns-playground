import { TableProps } from 'antd';
import type { TableColumnType } from 'antd';
import { FRProps, FormInstance } from 'form-render';
import type { ConfigProviderProps } from 'antd/es/config-provider';
import type { TableRenderStoreType } from './core/store';

export type ColumnsSettingValueType = Array<{
  /** Column key */
  key: string,
  /** Is the current column hidden? */
  hidden: boolean,
  /** Is the current column fixed? */
  fixed?: 'right' | 'left'
}>

export type ToolbarActionConfig = {
  /** Enabled functions, default is all, all enabled*/
  enabled?: Array<'refresh' | 'columnsSetting' | 'fullScreen' | 'density'>,
  /** Status of column settings */
  columnsSettingValue?: ColumnsSettingValueType
  /** Callback when the column setting status changes*/
  onColumnsSettingChange?: (val: ColumnsSettingValueType) => void;
}
export type DoSearchType = (
  params: {
    current?: number;
    tab?: number | string;
    pageSize?: number;
    sorter?: any;
  },
  customSearch?: any
) => Promise<void>

export type RefreshType = (
  params?: { stay?: boolean; tab?: number | string },
  search?: any
) => Promise<void>

export type ChangeTabType = (tab: number | string) => Promise<void>;

export interface TableContext {
  doSearch: DoSearchType,
  refresh: RefreshType,
  changeTab: ChangeTabType,
  form: FormInstance,
  getState: () => TableRenderStoreType & { search: Record<string, any> },
}

export type ProColumnsType<T extends object = any> = Array<
  TableColumnType<T> & {
  dataIndex?: string;
  /** Whether to support replication*/
  copyable?: boolean;
  /** Type of value */
  valueType?: 'text' | 'money' | 'date' | 'dateTime' | 'code' | 'tag' | 'tags' | 'progress' | 'dateRange' | 'dateTimeRange' | 'image';
  /** Enumeration of current column values ​​*/
  enum?: Record<string, string>;
}
>;

export interface TableState<RecordType> {
  loading: boolean;
  api: ApiType<RecordType>;
  tab: number;
  dataSource: Array<RecordType>;
  extraData: any;
  extraParams: Record<string, any>;
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
  tableSize: TableProps<any>['size'];
  sorter: any;
}

// TODO Here, the props of FR should be written in FR, and inheritance is fine here
export interface SearchProps<RecordType> extends Omit<FRProps, 'form'> {
  debug?: boolean;
  searchBtnStyle?: React.CSSProperties;
  searchBtnClassName?: string;
  displayType?: any;
  propsSchema?: any;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  searchOnMount?: boolean | unknown;
  searchWithError?: boolean;
  searchBtnRender?: (
    submit: Function,
    clearSearch: Function,
    other: any
  ) => React.ReactNode[];
  searchText?: string;
  resetText?: string;
  onSearch?: (search: any) => any;
  afterSearch?: (params: any) => any;
  widgets?: any;
  form?: any;
  [key: string]: any
}

type ApiType<RecordType> =
  | SearchApi<RecordType>
  | Array<{ api: SearchApi<RecordType>; name: string }>;

export type SearchApi<RecordType> = (
  params: Record<string, any> & {
    current: number;
    pageSize: number;
    tab?: number;
  },
  sorter?: any
) => Promise<{

  /**
   * @deprecated will be deprecated soon, please use data to return
   */
  rows?: Array<RecordType>;
  data: Array<RecordType>;
  total: number;
  pageSize?: number;
}>;

export interface TablePropsC<RecordType extends Object = any>
  extends Omit<TableProps<RecordType>, 'columns' | 'dataSource' | 'title'> {
  /** Column definition, in addition to supporting all antd configurations, some additional syntax sugar is added*/
  columns: ProColumnsType<RecordType>;
  /** title */
  title?: string | React.ReactNode;
}

export interface TableRenderProps<RecordType extends Object = any>
  extends Omit<TablePropsC<RecordType>, 'locale'> {
  /**
   * Enable debug mode to display internal status at all times
   */
  debug?: boolean;
  /** The control at the top right of the table body, such as the "Add" button*/
  toolbarRender?: React.ReactNode;
  /**
   * The Icon list displayed in the upper right corner of the table body has built-in functions such as refresh, adjust density, and full screen display
   *
   * You can pass in an object for more specific configuration
   */
  toolbarAction?: boolean | Pick<ToolbarActionConfig, 'enabled'>;
  /** Whether to request an interface when switching pages*/
  pageChangeWithRequest?: boolean;
  onTabChange?: () => any;
  search?: SearchProps<RecordType>;
  locale?: 'zh-CN' | 'en-US';
  /**
   * Antd's global config
   */
  configProvider?: ConfigProviderProps;
  /**
   * Custom rendering table
   */
  tableWrapper?: (tableNode: React.ReactNode) => React.ReactNode;
  request?: ApiType<RecordType>;
  // Automatic request
  autoRequest?: boolean;
}
