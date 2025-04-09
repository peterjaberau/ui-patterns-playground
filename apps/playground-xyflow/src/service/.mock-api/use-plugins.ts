export const usePermissionsKey = ({ url, params }: any) => {
  const payload = {
    name: "usePermissionsKey",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/plugin/permission/fetch",
      urlFull: "/workspaces/current/plugin/permission/fetch",
      params: {},
    },
    res: {
      install_permission: "everyone",
      debug_permission: "everyone",
    },
  };

  return payload.res;
};
