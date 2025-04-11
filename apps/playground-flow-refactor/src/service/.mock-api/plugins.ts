export const fetchPluginTasks = ({ url, params }: any) => {
  const payload = {
    name: "fetchPluginTasks",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/plugin/tasks",
      urlFull: "/workspaces/current/plugin/tasks?page=1&page_size=255",
      params: { page: 1, page_size: 255 },
    },
    res: {
      tasks: [],
    },
  };

  return payload.res;
};
