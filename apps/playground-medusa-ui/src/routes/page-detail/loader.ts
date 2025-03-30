import { capture } from './_mock_';

export const Loader = () => {
  return capture;
};

export const useExtension = () => {
  const getWidgets = (zone?: string) => {
    return Loader().getWidgets;
  };

  return {
    getWidgets,
  };
};

export const useLoaderData = () => {
  return Loader().initialData;
};

export const useCustomer = (id?: string, query?: Record<string, any>, options?: any) => {
  const customer = Loader().customer;
  const isLoading = false;
  const isError = false;
  const error = null;

  return {
    customer,
    isLoading,
    isError,
    error,
  };
};
