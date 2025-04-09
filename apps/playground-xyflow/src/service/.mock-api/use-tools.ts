export const useAllWorkflowTools = ({ url, params }: any) => {
  const payload = {
    name: "useAllWorkflowTools",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/tools/workflow",
      fullUrl: "/workspaces/current/tools/workflow",
      params: {},
    },
    res: [],
  };

  return payload.res;
};
