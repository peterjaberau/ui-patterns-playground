export const fetchCurrentPlanInfo = ({ url, params }: any) => {
  const payload = {
    name: "fetchCurrentPlanInfo",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/features",
      urlFull: "/features",
      params: {},
    },
    res: {
      billing: {
        enabled: true,
        subscription: {
          plan: "sandbox",
          interval: "",
        },
      },
      education: {
        enabled: true,
        activated: false,
      },
      members: {
        size: 1,
        limit: 1,
      },
      apps: {
        size: 3,
        limit: 5,
      },
      vector_space: {
        size: 0.0,
        limit: 50,
      },
      knowledge_rate_limit: 10,
      annotation_quota_limit: {
        size: 0,
        limit: 10,
      },
      documents_upload_quota: {
        size: 0,
        limit: 50,
      },
      docs_processing: "standard",
      can_replace_logo: false,
      model_load_balancing_enabled: false,
      dataset_operator_enabled: false,
    },
  };

  return payload.res;
};
