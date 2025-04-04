import { createContext } from 'react';
import { FlowStore } from './store';

export const ConfigContext: any = createContext(null as any);

const StoreContext = createContext<FlowStore | null>(null);
export const Provider = StoreContext.Provider;
export default StoreContext;
