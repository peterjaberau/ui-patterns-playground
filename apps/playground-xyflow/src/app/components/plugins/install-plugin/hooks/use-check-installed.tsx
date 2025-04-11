// import { useCheckInstalled as useDoCheckInstalled } from '@/service/use-plugins'

import { useMemo } from "react";
import type { VersionInfo } from "../../types";
type Props = {
  pluginIds: string[];
  enabled: boolean;
};
const useCheckInstalled = (props: Props) => {
  // const { data, isLoading, error } = useDoCheckInstalled(props)

  const isLoading = false;
  const error = undefined;
  const data = {
    plugins: [],
  };

  const installedInfo = useMemo(() => {
    if (!data) return undefined;

    const res: Record<string, VersionInfo> = {};
    data?.plugins.forEach((plugin: any) => {
      res[plugin.plugin_id] = {
        installedId: plugin.id,
        installedVersion: plugin.declaration.version,
        uniqueIdentifier: plugin.plugin_unique_identifier,
      };
    });
    return res;
  }, [data]);
  return {
    installedInfo,
    isLoading,
    error,
  };
};

export default useCheckInstalled;
