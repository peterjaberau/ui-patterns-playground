import { product, order, orderLineItems, orderChanges, customer, activities, user } from './mock-db';
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

export const useOrderLineItems = (id?: string, query?: any, options?: any) => {
  return orderLineItems;
};

export const useOrderChanges = (query?: any, options?: any) => {
  return orderChanges;
};

export const useCustomer = (id?: string, query?: any, options?: any) => {
  return customer;
};

export const useActivityItems = (query?: any, options?: any) => {
  return activities;
};

export const useUser = (id?: string, query?: any, options?: any) => {
  return user;
};
