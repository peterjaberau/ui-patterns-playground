import { scenarios } from './_mock_';

export const Loader: any = () => {
  return scenarios;
};

export const useLoader = () => {
  return Loader();
};

export const useScenarioById = (id?: any, query?: any, options?: any) => {
  const data = useLoader();
  const scenario = data.find((d: any) => d.scenarioId === id);

  const isLoading = false;
  const isError = false;
  const error = null;

  return {
    scenario,
    isLoading,
    isError,
    error,
  };
};
