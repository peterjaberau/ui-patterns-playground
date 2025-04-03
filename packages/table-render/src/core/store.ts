import React from 'react';
import { create, useStore } from 'zustand';
import { ToolbarActionConfig, ProColumnsType } from '../types';

export type TableRenderStoreType = {
  loading: boolean;
  api: null,
  /**
   * If the api is an array, you need to sense the tab at the top level to know what api is called when you click search
   */
  tab: 0,
  /**
   * Table column definition
   */
  columns: ProColumnsType<any>,
  dataSource: any[],
  /**
   * Extended return value other than dataSource that needs to be used
   */
  extraData: null,
  extraParams: {},
  pagination: {
    current: number,
    pageSize: number,
    total: number,
  },
  tableSize: 'default',
  schema: any,
  inited: boolean,
  init?: (schema: TableRenderStoreType['schema']) => any;
  getState: () => any;
  setState: (state: any) => void;
  /**
   * Update column data
   */
  setColumns: (columns: ProColumnsType<any>) => void;
  /**
   * Dynamically set column status
   */
  columnsSetting: ToolbarActionConfig['columnsSettingValue'];
  setColumnsSetting: (setting: ToolbarActionConfig['columnsSettingValue']) => void;
};

export const StoreContext = React.createContext(null);

export const createStore = (defaultProps?: Partial<TableRenderStoreType>) => create<TableRenderStoreType>()((set, get) => ({
  ...defaultProps,
  loading: false,
  api: null,
  tab: 0,
  dataSource: [],
  extraData: null,
  extraParams: {},
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
  tableSize: 'default',
  schema: {},
  columns: [],
  inited: false,
  columnsSetting: [],
  setState: (state) => set({ ...state }),
  getState: () => get(),
  setColumns: (columns) => set({ columns }),
  setColumnsSetting: (setting) => set({ columnsSetting: setting }),
}));

export const useTableStore = <T>(
  selector: (store: TableRenderStoreType) => T,
  equalityFn?: (left: T, right: T) => boolean
) => {
  const store = React.useContext(StoreContext);
  return useStore(store, selector, equalityFn);
}
