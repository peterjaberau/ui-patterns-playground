export const fetchTagList = ({ url, params }: any) => {
  const payload = {
    name: "fetchTagList",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/tags",
      urlFull: "/tags?type=app",
      params: { type: "app" },
    },
    res: [],
  };

  return payload.res;
};
