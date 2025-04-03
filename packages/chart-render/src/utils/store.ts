import { FormInstance } from 'formRenderV1';
import create, { StoreApi } from 'zustand';
import createContext from 'zustand/context';
import { DataSource } from './type';
export interface IStore {
  /** Tool function to modify global status*/
  readonly setChart: (store: Partial<IStore>) => void;

  /** FormRender instance */
  readonly form?: FormInstance;

  /** Is it loading? */
  loading: boolean;

  /** Data, provided to the chart component for rendering*/
  dataSource: DataSource;

  /** Method to re-request data */
  refresh?: () => void;
}

export const { Provider, useStore: useChart } =
  createContext<StoreApi<IStore>>();

export const createStore = () =>
  create<IStore>(setChart => ({
    setChart,
    loading: false,
    dataSource: { meta: [], data: [] },
  }));
