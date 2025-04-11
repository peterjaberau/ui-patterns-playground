export const useEducationStatus = ({ url, params }: any) => {
  const payload = {
    name: "useEducationStatus",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/account/education",
      urlFull: "/account/education",
      params: {},
    },
    res: {
      result: false,
    },
  };

  return payload.res;
};
