export const fetchCurrentWorkspace = ({ url, params }: any) => {
  const payload = {
    name: "fetchCurrentWorkspace",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/current",
      params: {},
    },
    res: {
      id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
      name: "Dify's Workspace",
      plan: "basic",
      status: "normal",
      created_at: 1715874605,
      role: "owner",
      in_trial: null,
      trial_end_reason: null,
      custom_config: null,
    },
  };

  return payload.res;
};

export const fetchLanggeniusVersion = ({ url, params }: any) => {
  const payload = {
    name: "fetchLanggeniusVersion",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/version",
      params: { current_version: "1.1.3" },
    },
    res: {
      version: "1.1.3",
      release_date: "",
      release_notes: "",
      can_auto_update: false,
      features: {
        can_replace_logo: false,
        model_load_balancing_enabled: true,
      },
    },
  };

  return payload.res;
};

export const getSystemFeatures = ({ url, params }: any) => {
  const payload = {
    name: "getSystemFeatures",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/system-features",
      params: {},
    },
    res: {
      sso_enforced_for_signin: false,
      sso_enforced_for_signin_protocol: "",
      sso_enforced_for_web: false,
      sso_enforced_for_web_protocol: "",
      enable_web_sso_switch_component: false,
      enable_marketplace: true,
      max_plugin_package_size: 15728640,
      enable_email_code_login: true,
      enable_email_password_login: false,
      enable_social_oauth_login: true,
      is_allow_register: true,
      is_allow_create_workspace: true,
      is_email_setup: true,
      license: {
        status: "none",
        expired_at: "",
      },
    },
  };

  return payload.res;
};

export const fetchUserProfile = ({ url, params }: any) => {
  const payload = {
    name: "fetchUserProfile",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/account/profile",
      params: {},
    },
    res: {
      id: "ea3db04e-2aec-4c18-a196-6fbb56ffd2a9",
      name: "Dify",
      avatar: null,
      avatar_url: null,
      email: "peterjaberau@gmail.com",
      is_password_set: false,
      interface_language: "en-US",
      interface_theme: "light",
      timezone: "America/New_York",
      last_login_at: 1743779922,
      last_login_ip: "60.241.129.43",
      created_at: 1715874605,
    },
  };

  return payload.res;
};

export const fetchModelList = ({ url, params }: any) => {
  const { type } = params;

  const data = [
    {
      model: "gpt-3.5-turbo-0125",
      label: {
        zh_Hans: "gpt-3.5-turbo-0125",
        en_US: "gpt-3.5-turbo-0125",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 16385,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-3.5-turbo-1106",
      label: {
        zh_Hans: "gpt-3.5-turbo-1106",
        en_US: "gpt-3.5-turbo-1106",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 16385,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-3.5-turbo-16k",
      label: {
        zh_Hans: "gpt-3.5-turbo-16k",
        en_US: "gpt-3.5-turbo-16k",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 16385,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-3.5-turbo-instruct",
      label: {
        zh_Hans: "gpt-3.5-turbo-instruct",
        en_US: "gpt-3.5-turbo-instruct",
      },
      model_type: "llm",
      features: [],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 4096,
        mode: "completion",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-3.5-turbo",
      label: {
        zh_Hans: "gpt-3.5-turbo",
        en_US: "gpt-3.5-turbo",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 16385,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-4o-mini-2024-07-18",
      label: {
        zh_Hans: "gpt-4o-mini-2024-07-18",
        en_US: "gpt-4o-mini-2024-07-18",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call", "vision"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 128000,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "gpt-4o-mini",
      label: {
        zh_Hans: "gpt-4o-mini",
        en_US: "gpt-4o-mini",
      },
      model_type: "llm",
      features: ["multi-tool-call", "agent-thought", "stream-tool-call", "vision"],
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 128000,
        mode: "chat",
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "text-embedding-3-large",
      label: {
        zh_Hans: "text-embedding-3-large",
        en_US: "text-embedding-3-large",
      },
      model_type: "text-embedding",
      features: null,
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 8191,
        max_chunks: 32,
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "text-embedding-3-small",
      label: {
        zh_Hans: "text-embedding-3-small",
        en_US: "text-embedding-3-small",
      },
      model_type: "text-embedding",
      features: null,
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 8191,
        max_chunks: 32,
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
    {
      model: "text-embedding-ada-002",
      label: {
        zh_Hans: "text-embedding-ada-002",
        en_US: "text-embedding-ada-002",
      },
      model_type: "text-embedding",
      features: null,
      fetch_from: "predefined-model",
      model_properties: {
        context_size: 8097,
        max_chunks: 32,
      },
      deprecated: false,
      status: "active",
      load_balancing_enabled: false,
    },
  ];

  const filteredData = data.filter((item) => item.model_type === type);

  const payload = {
    name: "fetchModelList",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/models/model-types/{type}",
      params: { type: params.type }, // type: "llm" | "text-embedding"
    },
    res: {
      data: [
        {
          tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
          provider: "langgenius/openai/openai",
          label: {
            zh_Hans: "OpenAI",
            en_US: "OpenAI",
          },
          icon_small: {
            zh_Hans:
              "https://cloud.dify.ai/console/api/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/zh_Hans",
            en_US:
              "https://cloud.dify.ai/console/api/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/en_US",
          },
          icon_large: {
            zh_Hans:
              "https://cloud.dify.ai/console/api/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/zh_Hans",
            en_US:
              "https://cloud.dify.ai/console/api/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/en_US",
          },
          status: "active",
          models: filteredData,
        },
      ],
    },
  };

  return payload.res;
};

export const fetchModelProviders = ({ url, params }: any) => {
  const payload = {
    name: "fetchModelProviders",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/model-providers",
      urlFull: "/workspaces/current/model-providers",
      params: {},
    },
    res: {
      data: [
        {
          tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
          provider: "langgenius/openai/openai",
          label: {
            zh_Hans: "OpenAI",
            en_US: "OpenAI",
          },
          description: {
            zh_Hans: "OpenAI \u63d0\u4f9b\u7684\u6a21\u578b\uff0c\u4f8b\u5982 GPT-3.5-Turbo \u548c GPT-4\u3002",
            en_US: "Models provided by OpenAI, such as GPT-3.5-Turbo and GPT-4.",
          },
          icon_small: {
            zh_Hans:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/zh_Hans",
            en_US:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/en_US",
          },
          icon_large: {
            zh_Hans:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/zh_Hans",
            en_US:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/en_US",
          },
          background: "#E5E7EB",
          help: {
            title: {
              zh_Hans: "\u4ece OpenAI \u83b7\u53d6 API Key",
              en_US: "Get your API Key from OpenAI",
            },
            url: {
              zh_Hans: "https://platform.openai.com/account/api-keys",
              en_US: "https://platform.openai.com/account/api-keys",
            },
          },
          supported_model_types: ["llm", "text-embedding", "speech2text", "moderation", "tts"],
          configurate_methods: ["predefined-model", "customizable-model"],
          provider_credential_schema: {
            credential_form_schemas: [
              {
                variable: "openai_api_key",
                label: {
                  zh_Hans: "API Key",
                  en_US: "API Key",
                },
                type: "secret-input",
                required: true,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684 API Key",
                  en_US: "Enter your API Key",
                },
                max_length: 0,
                show_on: [],
              },
              {
                variable: "openai_organization",
                label: {
                  zh_Hans: "\u7ec4\u7ec7 ID",
                  en_US: "Organization",
                },
                type: "text-input",
                required: false,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684\u7ec4\u7ec7 ID",
                  en_US: "Enter your Organization ID",
                },
                max_length: 0,
                show_on: [],
              },
              {
                variable: "openai_api_base",
                label: {
                  zh_Hans: "API Base",
                  en_US: "API Base",
                },
                type: "text-input",
                required: false,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684 API Base, \u5982\uff1ahttps://api.openai.com",
                  en_US: "Enter your API Base, e.g. https://api.openai.com",
                },
                max_length: 0,
                show_on: [],
              },
            ],
          },
          model_credential_schema: {
            model: {
              label: {
                zh_Hans: "\u6a21\u578b\u540d\u79f0",
                en_US: "Model Name",
              },
              placeholder: {
                zh_Hans: "\u8f93\u5165\u6a21\u578b\u540d\u79f0",
                en_US: "Enter your model name",
              },
            },
            credential_form_schemas: [
              {
                variable: "openai_api_key",
                label: {
                  zh_Hans: "API Key",
                  en_US: "API Key",
                },
                type: "secret-input",
                required: true,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684 API Key",
                  en_US: "Enter your API Key",
                },
                max_length: 0,
                show_on: [],
              },
              {
                variable: "openai_organization",
                label: {
                  zh_Hans: "\u7ec4\u7ec7 ID",
                  en_US: "Organization",
                },
                type: "text-input",
                required: false,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684\u7ec4\u7ec7 ID",
                  en_US: "Enter your Organization ID",
                },
                max_length: 0,
                show_on: [],
              },
              {
                variable: "openai_api_base",
                label: {
                  zh_Hans: "API Base",
                  en_US: "API Base",
                },
                type: "text-input",
                required: false,
                default: null,
                options: [],
                placeholder: {
                  zh_Hans: "\u5728\u6b64\u8f93\u5165\u60a8\u7684 API Base",
                  en_US: "Enter your API Base",
                },
                max_length: 0,
                show_on: [],
              },
            ],
          },
          preferred_provider_type: "system",
          custom_configuration: {
            status: "no-configure",
          },
          system_configuration: {
            enabled: true,
            current_quota_type: "trial",
            quota_configurations: [
              {
                quota_type: "trial",
                quota_unit: "credits",
                quota_limit: 200,
                quota_used: 4,
                is_valid: true,
                restrict_models: [
                  {
                    model: "gpt-3.5-turbo",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-1106",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-instruct",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-16k",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-16k-0613",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-0613",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-3.5-turbo-0125",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "text-davinci-003",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-4o-mini",
                    base_model_name: null,
                    model_type: "llm",
                  },
                  {
                    model: "gpt-4o-mini-2024-07-18",
                    base_model_name: null,
                    model_type: "llm",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  };

  return payload.res;
};

export const fetchSupportRetrievalMethods = ({ url, params }: any) => {
  const payload = {
    name: "fetchSupportRetrievalMethods",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/datasets/retrieval-setting",
      urlFull: "/datasets/retrieval-setting",
      params: {},
    },
    res: {
      retrieval_method: ["semantic_search", "full_text_search", "hybrid_search"],
    },
  };

  return payload.res;
};

export const fetchFileUploadConfig = ({ url, params }: any) => {
  const payload = {
    name: "fetchFileUploadConfig",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/files/upload",
      urlFull: "/files/upload",
      params: {},
    },
    res: {
      file_size_limit: 15,
      batch_count_limit: 5,
      image_file_size_limit: 10,
      video_file_size_limit: 100,
      audio_file_size_limit: 50,
      workflow_file_upload_limit: 10,
    },
  };

  return payload.res;
};

export const fetchDefaultModal = ({ url, params }: any) => {
  const payload = {
    name: "fetchDefaultModal",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/workspaces/current/default-model",
      fullUrl: "/workspaces/current/default-model?model_type=tts",
      params: { model_type: "tts" },
    },
    res: {
      data: {
        model: "tts-1-hd",
        model_type: "tts",
        provider: {
          provider: "langgenius/openai/openai",
          label: {
            zh_Hans: "OpenAI",
            en_US: "OpenAI",
          },
          icon_small: {
            zh_Hans:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/zh_Hans",
            en_US:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_small/en_US",
          },
          icon_large: {
            zh_Hans:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/zh_Hans",
            en_US:
              "/workspaces/4a2c46a2-0db1-49ce-947c-2a0ecb4a8066/model-providers/langgenius/openai/openai/icon_large/en_US",
          },
          supported_model_types: ["llm", "text-embedding", "speech2text", "moderation", "tts"],
          models: [],
          tenant_id: "4a2c46a2-0db1-49ce-947c-2a0ecb4a8066",
        },
      },
    },
  };

  return payload.res;
};
