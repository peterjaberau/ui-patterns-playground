export const useWorkflowConfig = ({ url, params }: any) => {
  const payload = {
    name: "useWorkflowConfig",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/apps/{id}/workflows/draft/config",
      urlFull: "/apps/b03a02b4-588a-4109-a1b4-4c52952c429e/workflows/draft/config",
      params: { id: "b03a02b4-588a-4109-a1b4-4c52952c429e" },
    },
    res: {
      parallel_depth_limit: 3,
    },
  };

  return payload.res;
};
