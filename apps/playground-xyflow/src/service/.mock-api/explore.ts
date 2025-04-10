export const fetchInstalledAppList = ({ url, params }: any) => {
  const payload = {
    name: "fetchInstalledAppList",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/installed-apps",
      params: {},
    },
    res: {
      installed_apps: [
        {
          id: "47ba1509-1955-4f42-b1d1-5ea9339f05e4",
          app: {
            id: "35130ddc-538b-4de3-b2d2-206b45b0fd59",
            name: "Translation assistant",
            mode: "completion",
            icon_type: "emoji",
            icon: "\ud83d\udd04",
            icon_background: "#EFF1F5",
            icon_url: null,
            use_icon_as_answer_icon: false,
          },
          app_owner_tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
          is_pinned: false,
          last_used_at: null,
          editable: true,
          uninstallable: true,
        },
        {
          id: "ee19890e-1c1e-4f16-9a7c-2223c5cace33",
          app: {
            id: "b03a02b4-588a-4109-a1b4-4c52952c429e",
            name: "GPT-Researcher EN",
            mode: "workflow",
            icon_type: "emoji",
            icon: "face_with_monocle",
            icon_background: "#FFE4E8",
            icon_url: null,
            use_icon_as_answer_icon: false,
          },
          app_owner_tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
          is_pinned: false,
          last_used_at: null,
          editable: true,
          uninstallable: true,
        },
        {
          id: "c6d5b902-9c42-4955-a29e-2cf3dd658340",
          app: {
            id: "3e339923-5944-4d6a-b5ac-0d77e1bce309",
            name: "workflow-test",
            mode: "workflow",
            icon_type: "emoji",
            icon: "\ud83e\udd16",
            icon_background: "#FFEAD5",
            icon_url: null,
            use_icon_as_answer_icon: false,
          },
          app_owner_tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
          is_pinned: false,
          last_used_at: null,
          editable: true,
          uninstallable: true,
        },
      ],
    },
  };
  return payload.res;
};
