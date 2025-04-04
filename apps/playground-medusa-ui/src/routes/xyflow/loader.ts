import { data } from './_mock_';

export const Loader: any = () => {
  return data;
};

export const useLoader = () => {
  return Loader();
};

export const useFlowById = (id?: any, query?: any, options?: any) => {
  const data = useLoader();
  const flow = data.find((d: any) => d.id === id);

  const isLoading = false;
  const isError = false;
  const error = null;

  return {
    flow,
    isLoading,
    isError,
    error,
  };
};
