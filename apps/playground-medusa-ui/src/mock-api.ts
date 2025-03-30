import { product, order } from './mock-db';
import { stores } from './mock-db';

export const useProduct = (id?: any, query?: any, options?: any) => {
  return product;
};

export const useOrder = (id?: any, query?: any, options?: any) => {
  return order;
};

export const useStores = (query?: any, options?: any) => {
  return stores;
};
