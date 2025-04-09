export const fetchNodesDefaultConfigs = ({ url, params }: any) => {
  const payload = {
    name: "fetchNodesDefaultConfigs",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/apps/{id}/workflows/default-workflow-block-configs",
      urlFull: "/apps/b03a02b4-588a-4109-a1b4-4c52952c429e/workflows/default-workflow-block-configs",
      params: { id: "b03a02b4-588a-4109-a1b4-4c52952c429e" },
    },
    res: [
      {
        type: "llm",
        config: {
          prompt_templates: {
            chat_model: {
              prompts: [
                {
                  role: "system",
                  text: "You are a helpful AI assistant.",
                  edition_type: "basic",
                },
              ],
            },
            completion_model: {
              conversation_histories_role: {
                user_prefix: "Human",
                assistant_prefix: "Assistant",
              },
              prompt: {
                text: "Here are the chat histories between human and assistant, inside <histories></histories> XML tags.\n\n<histories>\n{{#histories#}}\n</histories>\n\n\nHuman: {{#sys.query#}}\n\nAssistant:",
                edition_type: "basic",
              },
              stop: ["Human:"],
            },
          },
        },
      },
      {
        type: "llm",
        config: {
          prompt_templates: {
            chat_model: {
              prompts: [
                {
                  role: "system",
                  text: "You are a helpful AI assistant.",
                  edition_type: "basic",
                },
              ],
            },
            completion_model: {
              conversation_histories_role: {
                user_prefix: "Human",
                assistant_prefix: "Assistant",
              },
              prompt: {
                text: "Here are the chat histories between human and assistant, inside <histories></histories> XML tags.\n\n<histories>\n{{#histories#}}\n</histories>\n\n\nHuman: {{#sys.query#}}\n\nAssistant:",
                edition_type: "basic",
              },
              stop: ["Human:"],
            },
          },
        },
      },
      {
        type: "code",
        config: {
          variables: [
            {
              variable: "arg1",
              value_selector: [],
            },
            {
              variable: "arg2",
              value_selector: [],
            },
          ],
          code_language: "python3",
          code: '\ndef main(arg1: str, arg2: str) -> dict:\n    return {\n        "result": arg1 + arg2,\n    }\n',
          outputs: {
            result: {
              type: "string",
              children: null,
            },
          },
        },
      },
      {
        type: "template-transform",
        config: {
          variables: [
            {
              variable: "arg1",
              value_selector: [],
            },
          ],
          template: "{{ arg1 }}",
        },
      },
      {
        type: "question-classifier",
        config: {
          instructions: "",
        },
      },
      {
        type: "http-request",
        config: {
          method: "get",
          authorization: {
            type: "no-auth",
          },
          body: {
            type: "none",
          },
          timeout: {
            connect: 10,
            read: 60,
            write: 20,
            max_connect_timeout: 10,
            max_read_timeout: 60,
            max_write_timeout: 20,
          },
        },
        retry_config: {
          max_retries: 3,
          retry_interval: 2.0,
          retry_enabled: true,
        },
      },
      {
        type: "iteration",
        config: {
          is_parallel: false,
          parallel_nums: 10,
          error_handle_mode: "terminated",
        },
      },
      {
        model: {
          prompt_templates: {
            completion_model: {
              conversation_histories_role: {
                user_prefix: "Human",
                assistant_prefix: "Assistant",
              },
              stop: ["Human:"],
            },
          },
        },
      },
    ],
  };

  return payload.res;
};

export const fetchPublishedWorkflow = ({ url, params }: any) => {
  const payload = {
    name: "fetchPublishedWorkflow",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/apps/{id}/workflows/publish",
      fullUrl: "/apps/b03a02b4-588a-4109-a1b4-4c52952c429e/workflows/publish",
      params: { id: "b03a02b4-588a-4109-a1b4-4c52952c429e" },
    },
    res: {
      id: null,
      graph: null,
      features: null,
      hash: null,
      version: null,
      marked_name: null,
      marked_comment: null,
      created_by: {
        id: null,
        name: null,
        email: null,
      },
      created_at: null,
      updated_by: null,
      updated_at: null,
      tool_published: null,
      environment_variables: null,
      conversation_variables: null,
    },
  };

  return payload.res;
};

export const fetchWorkflowDraft = ({ url, params }: any) => {
  const payload = {
    name: "fetchWorkflowDraft",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/apps/{id}/workflows/draft",
      urlFull: "/apps/b03a02b4-588a-4109-a1b4-4c52952c429e/workflows/draft",
      params: { id: "b03a02b4-588a-4109-a1b4-4c52952c429e" },
    },
    res: {
      id: "fb6f7aa7-5886-4030-baee-ea0c50f26c23",
      graph: {
        nodes: [
          {
            data: {
              desc: "",
              selected: false,
              title: "start",
              type: "start",
              variables: [
                {
                  label: "title",
                  max_length: 100,
                  options: [],
                  required: true,
                  type: "text-input",
                  variable: "title",
                },
                {
                  label: "language",
                  max_length: 48,
                  options: ["\u4e2d\u6587", "English", "\u65e5\u672c\u8a9e"],
                  required: true,
                  type: "select",
                  variable: "language",
                },
              ],
            },
            height: 116,
            id: "1730257085761",
            position: {
              x: 30,
              y: 258,
            },
            positionAbsolute: {
              x: 30,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 1,
                },
                mode: "chat",
                name: "claude-3-5-sonnet-20241022",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  id: "e18aef50-3449-4259-9559-c4d17101d533",
                  role: "system",
                  text: "<instruction>\n<task_description>\nGenerate a series of appropriate search engine queries to break down questions based on user inquiries\n</task_description>\n\n<examples>\n<example>\nInput: User asks how to learn programming\nOutput: 'programming learning methods, 'programming tutorials for beginners'\n</example>\n\n<example>\nInput: User wants to understand latest technology trends  \nOutput: 'tech trends 2021', 'latest technology news'\n</example>\n\n<example>\nInput: User seeks healthy eating advice\nOutput: 'healthy eating guide', 'balanced nutrition diet'\n</example>\n</examples>\n\n<instructions>\n1. Take user's question as input.\n2. Identify relevant keywords or phrases based on the topic of user's question.\n3. Use these keywords or phrases to make search engine queries.\n4. Generate a series of appropriate search engine queries to help break down user's question.\n5. Ensure output content does not contain any xml tags.\n6.The output must be pure and conform to the <example> style without other explanations.\n7.Break down into at least 4-6 subproblems.\n8.Output is separated only by commas.\n</instructions>",
                },
                {
                  id: "b0e446f2-b714-41e9-8eb6-292187a97796",
                  role: "user",
                  text: "title\uff1a{{#1730257085761.title#}}\nlanguage\uff1a{{#1730257085761.language#}}\nThe output must be pure and conform to the <example> style without other explanations.\nOutput is separated only by commas.\nBreak down into at least 4-6 subproblems.",
                },
              ],
              selected: false,
              title: "LLM",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730257098742",
            position: {
              x: 334,
              y: 258,
            },
            positionAbsolute: {
              x: 334,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              code: "def main(input_str: str) -> dict:\n    if not input_str:\n        return {'result': []}\n    \n    input_str = input_str.strip().strip('\"')\n    items = [item.strip() for item in input_str.split(',')]\n    \n    return {'result': items}",
              code_language: "python3",
              desc: "",
              outputs: {
                result: {
                  children: null,
                  type: "array[string]",
                },
              },
              selected: false,
              title: "code",
              type: "code",
              variables: [
                {
                  value_selector: ["1730257098742", "text"],
                  variable: "input_str",
                },
              ],
            },
            height: 54,
            id: "1730257648212",
            position: {
              x: 638,
              y: 258,
            },
            positionAbsolute: {
              x: 638,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              desc: "",
              error_handle_mode: "continue-on-error",
              height: 333,
              is_parallel: true,
              iterator_selector: ["1730257648212", "result"],
              output_selector: ["1730259235391", "text"],
              output_type: "array[string]",
              parallel_nums: 10,
              selected: false,
              start_node_id: "1730257830072start",
              title: "interaction",
              type: "iteration",
              width: 913,
            },
            height: 333,
            id: "1730257830072",
            position: {
              x: 942,
              y: 394,
            },
            positionAbsolute: {
              x: 942,
              y: 394,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 913,
            zIndex: 1,
          },
          {
            data: {
              desc: "",
              isInIteration: true,
              selected: false,
              title: "",
              type: "iteration-start",
            },
            draggable: false,
            height: 48,
            id: "1730257830072start",
            parentId: "1730257830072",
            position: {
              x: 24,
              y: 68,
            },
            positionAbsolute: {
              x: 966,
              y: 462,
            },
            selectable: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-iteration-start",
            width: 44,
            zIndex: 1002,
          },
          {
            data: {
              desc: "",
              isInIteration: true,
              iteration_id: "1730257830072",
              provider_id: "tavily",
              provider_name: "tavily",
              provider_type: "builtin",
              selected: false,
              title: "TavilySearch",
              tool_configurations: {
                exclude_domains: null,
                include_answer: null,
                include_domains: null,
                include_images: null,
                include_raw_content: null,
                max_results: 5,
                search_depth: "basic",
              },
              tool_label: "TavilySearch",
              tool_name: "tavily_search",
              tool_parameters: {
                query: {
                  type: "mixed",
                  value: "{{#1730257830072.item#}}",
                },
              },
              type: "tool",
            },
            height: 246,
            id: "1730257879652",
            parentId: "1730257830072",
            position: {
              x: 128,
              y: 67,
            },
            positionAbsolute: {
              x: 1070,
              y: 461,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
            zIndex: 1002,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              isInIteration: true,
              iteration_id: "1730257830072",
              model: {
                completion_params: {
                  temperature: 0.7,
                },
                mode: "chat",
                name: "claude-3-haiku-20240307",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  edition_type: "basic",
                  id: "d8e18834-ba12-4acb-b376-15340d30a3e3",
                  jinja2_text:
                    '"{research_summary}" Using the above information, answer the following question or topic: "{question}" in a detailed report \u2014 The report should focus on the answer to the question, should be well structured, informative, in depth, with facts and numbers if available, a minimum of 1,200 words and with markdown syntax and apa format. Write all source urls at the end of the report in apa format. You should write your report only based on the given information and nothing else.',
                  role: "system",
                  text: "Your goal is to provide answers based on information from the internet. \nYou must use the provided Tavily search API function to find relevant online information. \nYou should never use your own knowledge to answer questions.\nPlease include relevant url sources in the end of your answers",
                },
                {
                  id: "b23ba544-1b25-4d0a-abdf-34a6c22a2c76",
                  role: "user",
                  text: 'language\uff1a{{#1730257085761.language#}}\n "{{#1730257879652.text#}}" Using the above information, answer the following question or topic: "{{#1730257830072.item#}} "\n',
                },
              ],
              selected: false,
              title: "LLM 3",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730259235391",
            parentId: "1730257830072",
            position: {
              x: 416.1699410031715,
              y: 71.98653004766629,
            },
            positionAbsolute: {
              x: 1358.1699410031715,
              y: 465.9865300476663,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
            zIndex: 1002,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 0.7,
                },
                mode: "chat",
                name: "gpt-4o",
                provider: "langgenius/openai/openai",
              },
              prompt_template: [
                {
                  id: "3b248cc7-ce1c-4d24-b20c-aa988aaad672",
                  role: "system",
                  text: "according{{#1730257648212.result#}}\uff0c{{#1730257085761.title#}}Generate 3 to 5 sub-titles.\n<instructions>\nPlease generate 4 subheadings for the main title following these steps:\nCarefully read the provided main title and related content\nAnalyze the core theme and key information points of the main title\nEnsure the generated subheadings maintain consistency and relevance with the main title\nEach subheading should:\nBe concise and appropriate in length\nHighlight a unique angle or key point\nCapture readers' interest\nMatch the overall style and tone of the article\nBetween subheadings:\nContent should not overlap\nLogical order should be maintained\nShould collectively support the main title\nUse numerical sequence (1, 2, 3...) to mark each subheading\nOutputformatrequirements:\nEach subheading on a separate line\nNo XML tags included\nOutput subheadings content only\n</instructions>",
                },
                {
                  id: "5a7b9e7a-e8f8-4564-a9bf-85861c4fe312",
                  role: "user",
                  text: "language\uff1a{{#1730257085761.language#}}\nGenerate a series of appropriate sub-title to help break down {{#1730257085761.title#}}.\nBreaks down\u00a0complex topics into\u00a0manageable\u00a0subtopics",
                },
              ],
              selected: false,
              title: "LLM 3",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730259707121",
            position: {
              x: 1276.5,
              y: 258,
            },
            positionAbsolute: {
              x: 1276.5,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              desc: "",
              selected: false,
              template:
                "<h1>{{ arg0 }}</h1>\n\n<h2>{{ arg1 }}</h2>\n<div>{{ arg5 }}</div>\n\n<h2>{{ arg2 }}</h2>\n<div>{{ arg6 }}</div>\n\n<h2>{{ arg3 }}</h2>\n<div>{{ arg7 }}</div>\n\n<h2>{{ arg4 }}</h2>\n<div>{{ arg8 }}</div>",
              title: "Template conversion",
              type: "template-transform",
              variables: [
                {
                  value_selector: ["1730257085761", "title"],
                  variable: "arg0",
                },
                {
                  value_selector: ["1730260137415", "sub_title1"],
                  variable: "arg1",
                },
                {
                  value_selector: ["1730260137415", "sub_title2"],
                  variable: "arg2",
                },
                {
                  value_selector: ["1730260137415", "sub_title3"],
                  variable: "arg3",
                },
                {
                  value_selector: ["1730260137415", "sub_title4"],
                  variable: "arg4",
                },
                {
                  value_selector: ["1730260569281", "text"],
                  variable: "arg5",
                },
                {
                  value_selector: ["1730260824960", "text"],
                  variable: "arg6",
                },
                {
                  value_selector: ["17302609631470", "text"],
                  variable: "arg7",
                },
                {
                  value_selector: ["17302610163900", "text"],
                  variable: "arg8",
                },
              ],
            },
            height: 54,
            id: "1730259990083",
            position: {
              x: 2523,
              y: 394,
            },
            positionAbsolute: {
              x: 2523,
              y: 394,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              desc: "",
              instruction:
                "{{#1730259707121.text#}}Extract the return value in the output value as four independent parameters.Avoids\u00a0redundancy\u00a0by tracking previously written content",
              model: {
                completion_params: {
                  temperature: 0.7,
                },
                mode: "chat",
                name: "claude-3-5-sonnet-20241022",
                provider: "langgenius/anthropic/anthropic",
              },
              parameters: [
                {
                  description: "NO.1 sub title",
                  name: "sub_title1",
                  required: false,
                  type: "string",
                },
                {
                  description: "NO.2 sub_title",
                  name: "sub_title2",
                  required: false,
                  type: "string",
                },
                {
                  description: "NO.3 sub_title",
                  name: "sub_title3",
                  required: false,
                  type: "string",
                },
                {
                  description: "NO.4 sub_title",
                  name: "sub_title4",
                  required: false,
                  type: "string",
                },
              ],
              query: ["1730259707121", "text"],
              reasoning_mode: "prompt",
              selected: false,
              title: "Parameter extractor",
              type: "parameter-extractor",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730260137415",
            position: {
              x: 1915,
              y: 258,
            },
            positionAbsolute: {
              x: 1915,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 1,
                },
                mode: "chat",
                name: "claude-3-haiku-20240307",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  id: "3ef1efde-48b7-4f8d-830b-44e92815950f",
                  role: "system",
                  text: "in a detailed report \u2014 The report should focus on the answer to {{#1730260137415.sub_title1#}}and nothing else.",
                },
                {
                  id: "04881f0e-1a81-4c5c-813a-5123d62689e8",
                  role: "user",
                  text: "language\uff1a{{#1730257085761.language#}}\ncontext\uff1a{{#1730257830072.output#}}\nProvide the research report in the specified language, avoiding small talk.\n\n\n",
                },
              ],
              selected: false,
              title: "LLM 5",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730260569281",
            position: {
              x: 2219,
              y: 258,
            },
            positionAbsolute: {
              x: 2219,
              y: 258,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 1,
                },
                mode: "chat",
                name: "claude-3-haiku-20240307",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  id: "c059b7a1-a7cb-4d2d-a258-cc4bd122ff7f",
                  role: "system",
                  text: "in a detailed report \u2014 The report should focus on the answer to {{#1730260137415.sub_title2#}}and nothing else.",
                },
                {
                  id: "e494e57c-eff3-434d-bba7-4981a6dfd212",
                  role: "user",
                  text: "language\uff1a{{#1730257085761.language#}}\ncontext\uff1a{{#1730257830072.output#}}\nProvide the research report in the specified language, avoiding small talk.\n\n\n",
                },
              ],
              selected: false,
              title: "LLM 6",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "1730260824960",
            position: {
              x: 2219,
              y: 394,
            },
            positionAbsolute: {
              x: 2219,
              y: 394,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 1,
                },
                mode: "chat",
                name: "claude-3-haiku-20240307",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  id: "c059b7a1-a7cb-4d2d-a258-cc4bd122ff7f",
                  role: "system",
                  text: "in a detailed report \u2014 The report should focus on the answer to {{#1730260137415.sub_title3#}}and nothing else.",
                },
                {
                  id: "53cd6741-f1ef-4480-9778-9e8c1ea2e298",
                  role: "user",
                  text: "language\uff1a{{#1730257085761.language#}}\ncontext\uff1a{{#1730257830072.output#}}\nProvide the research report in the specified language, avoiding small talk.\n\n",
                },
              ],
              selected: false,
              title: "LLM 7",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "17302609631470",
            position: {
              x: 2219,
              y: 530,
            },
            positionAbsolute: {
              x: 2219,
              y: 530,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              context: {
                enabled: false,
                variable_selector: [],
              },
              desc: "",
              model: {
                completion_params: {
                  temperature: 1,
                },
                mode: "chat",
                name: "claude-3-haiku-20240307",
                provider: "langgenius/anthropic/anthropic",
              },
              prompt_template: [
                {
                  id: "c059b7a1-a7cb-4d2d-a258-cc4bd122ff7f",
                  role: "system",
                  text: "in a detailed report \u2014 The report should focus on the answer to {{#1730260137415.sub_title4#}}and nothing else.",
                },
                {
                  id: "2773ef9d-37b8-49f8-9455-c2399538407f",
                  role: "user",
                  text: "language\uff1a{{#1730257085761.language#}}\ncontext\uff1a{{#1730257830072.output#}}\nProvide the research report in the specified language, avoiding small talk.\n\n\n\n",
                },
              ],
              selected: false,
              title: "LLM 8",
              type: "llm",
              variables: [],
              vision: {
                enabled: false,
              },
            },
            height: 96,
            id: "17302610163900",
            position: {
              x: 2219,
              y: 666,
            },
            positionAbsolute: {
              x: 2219,
              y: 666,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              desc: "",
              outputs: [
                {
                  value_selector: ["1730259990083", "output"],
                  variable: "output",
                },
              ],
              selected: false,
              title: "End",
              type: "end",
            },
            height: 90,
            id: "1730261407654",
            position: {
              x: 2827,
              y: 394,
            },
            positionAbsolute: {
              x: 2827,
              y: 394,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom",
            width: 244,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 168,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"GPT-Rasearcher receives two variable inputs. 1. title: the proposition to be studied. 2. language: language preference for the research report.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "",
              type: "",
              width: 240,
            },
            height: 168,
            id: "1730387967784",
            position: {
              x: 28.05097515220939,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 28.05097515220939,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 240,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 173,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Step1: First, let the LLM provide a series of search engine queries related to the proposition. Comprehensive research can be conducted through queries from different perspectives.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "",
              type: "",
              width: 242,
            },
            height: 173,
            id: "1730388614165",
            position: {
              x: 321.6365008011338,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 321.6365008011338,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 242,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 188,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Step2: Since the input requirement for iteration is an array, we use a code node to extract subqueries from the string output by the LLM. Here, the new function \\"code generator\\" can be used to quickly generate the required code.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "",
              type: "",
              width: 240,
            },
            height: 188,
            id: "1730388689290",
            position: {
              x: 635.9314896948702,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 635.9314896948702,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 240,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 224,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Step3: We constructed two parallel branches. One is to use the LLM to summarize secondary headings suitable for proposition research based on search engine queries. The other branch uses iteration and simultaneously queries each subquery with Tavily and then conducts inductive research using the LLM. Here, we use the advanced functions of iteration and the parallel mode to accelerate the search.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: " (1)",
              type: "",
              width: 281,
            },
            height: 224,
            id: "17303887996700",
            position: {
              x: 968.506506560585,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 968.506506560585,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 281,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 198,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Step 4: We use a parameter extractor to extract a total of four sub-titles of the secondary research propositions output by the previous LLM. Then, we use four parallel branches to take the iterative output as the context (now the prompt can support injecting an array [string]) to answer the four questions.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "  (2)",
              type: "",
              width: 289,
            },
            height: 198,
            id: "17303896484860",
            position: {
              x: 1279.1060058303985,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 1279.1060058303985,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 289,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 156,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Finally, we use template nodes to orderly splice the previous first-level headings, second-level headings, and research conclusions to obtain a complete research report. \ud83d\ude03","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "  (3)",
              type: "",
              width: 283,
            },
            height: 156,
            id: "17303898217580",
            position: {
              x: 1676.1759535081464,
              y: 7.975706889733289,
            },
            positionAbsolute: {
              x: 1676.1759535081464,
              y: 7.975706889733289,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 283,
          },
          {
            data: {
              author: "Dify",
              desc: "",
              height: 175,
              selected: false,
              showAuthor: true,
              text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"example title\uff1a","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"1.A Study of Florence Art History","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"2.The Complete History of Minecraft","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"3.The Chronicles of OpenAI","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0},{"children":[{"type":"linebreak","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
              theme: "blue",
              title: "",
              type: "",
              width: 240,
            },
            height: 175,
            id: "1730452566694",
            position: {
              x: -241.22286003072247,
              y: 6.623354710724881,
            },
            positionAbsolute: {
              x: -241.22286003072247,
              y: 6.623354710724881,
            },
            selected: false,
            sourcePosition: "right",
            targetPosition: "left",
            type: "custom-note",
            width: 240,
          },
          {
            id: "1743984382525",
            type: "custom",
            data: {
              type: "http-request",
              title: "HTTP Request",
              desc: "",
              variables: [],
              method: "get",
              url: "",
              authorization: {
                type: "no-auth",
                config: null,
              },
              headers: "",
              params: "",
              body: {
                type: "none",
                data: [],
              },
              timeout: {
                max_connect_timeout: 0,
                max_read_timeout: 0,
                max_write_timeout: 0,
              },
              retry_config: {
                retry_enabled: true,
                max_retries: 3,
                retry_interval: 100,
              },
              selected: false,
            },
            position: {
              x: 30,
              y: 414,
            },
            targetPosition: "left",
            sourcePosition: "right",
            positionAbsolute: {
              x: 30,
              y: 414,
            },
            width: 244,
            height: 80,
            selected: false,
          },
          {
            id: "1744144982768",
            type: "custom-note",
            data: {
              title: "",
              desc: "",
              type: "",
              text: "",
              theme: "blue",
              author: "Dify",
              showAuthor: true,
              width: 240,
              height: 88,
              selected: false,
            },
            position: {
              x: 31.029301352524314,
              y: 544.7132431807495,
            },
            targetPosition: "left",
            sourcePosition: "right",
            positionAbsolute: {
              x: 31.029301352524314,
              y: 544.7132431807495,
            },
            width: 240,
            height: 88,
            selected: true,
          },
        ],
        edges: [
          {
            data: {
              isInIteration: false,
              sourceType: "start",
              targetType: "llm",
            },
            id: "1730257085761-source-1730257098742-target",
            selected: false,
            source: "1730257085761",
            sourceHandle: "source",
            target: "1730257098742",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "code",
            },
            id: "1730257098742-source-1730257648212-target",
            selected: false,
            source: "1730257098742",
            sourceHandle: "source",
            target: "1730257648212",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "code",
              targetType: "iteration",
            },
            id: "1730257648212-source-1730257830072-target",
            selected: false,
            source: "1730257648212",
            sourceHandle: "source",
            target: "1730257830072",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: true,
              iteration_id: "1730257830072",
              sourceType: "iteration-start",
              targetType: "tool",
            },
            id: "1730257830072start-source-1730257879652-target",
            selected: false,
            source: "1730257830072start",
            sourceHandle: "source",
            target: "1730257879652",
            targetHandle: "target",
            type: "custom",
            zIndex: 1002,
          },
          {
            data: {
              isInIteration: true,
              iteration_id: "1730257830072",
              sourceType: "tool",
              targetType: "llm",
            },
            id: "1730257879652-source-1730259235391-target",
            selected: false,
            source: "1730257879652",
            sourceHandle: "source",
            target: "1730259235391",
            targetHandle: "target",
            type: "custom",
            zIndex: 1002,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "code",
              targetType: "llm",
            },
            id: "1730257648212-source-1730259707121-target",
            selected: false,
            source: "1730257648212",
            sourceHandle: "source",
            target: "1730259707121",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "parameter-extractor",
            },
            id: "1730259707121-source-1730260137415-target",
            selected: false,
            source: "1730259707121",
            sourceHandle: "source",
            target: "1730260137415",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "template-transform",
            },
            id: "1730260569281-source-1730259990083-target",
            selected: false,
            source: "1730260569281",
            sourceHandle: "source",
            target: "1730259990083",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "parameter-extractor",
              targetType: "llm",
            },
            id: "1730260137415-source-1730260569281-target",
            selected: false,
            source: "1730260137415",
            sourceHandle: "source",
            target: "1730260569281",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "parameter-extractor",
              targetType: "llm",
            },
            id: "1730260137415-source-1730260824960-target",
            selected: false,
            source: "1730260137415",
            sourceHandle: "source",
            target: "1730260824960",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "iteration",
              targetType: "parameter-extractor",
            },
            id: "1730257830072-source-1730260137415-target",
            selected: false,
            source: "1730257830072",
            sourceHandle: "source",
            target: "1730260137415",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "parameter-extractor",
              targetType: "llm",
            },
            id: "1730260137415-source-17302609631470-target",
            selected: false,
            source: "1730260137415",
            sourceHandle: "source",
            target: "17302609631470",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "parameter-extractor",
              targetType: "llm",
            },
            id: "1730260137415-source-17302610163900-target",
            selected: false,
            source: "1730260137415",
            sourceHandle: "source",
            target: "17302610163900",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "template-transform",
            },
            id: "1730260824960-source-1730259990083-target",
            selected: false,
            source: "1730260824960",
            sourceHandle: "source",
            target: "1730259990083",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "template-transform",
            },
            id: "17302609631470-source-1730259990083-target",
            selected: false,
            source: "17302609631470",
            sourceHandle: "source",
            target: "1730259990083",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "llm",
              targetType: "template-transform",
            },
            id: "17302610163900-source-1730259990083-target",
            selected: false,
            source: "17302610163900",
            sourceHandle: "source",
            target: "1730259990083",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
          {
            data: {
              isInIteration: false,
              sourceType: "template-transform",
              targetType: "end",
            },
            id: "1730259990083-source-1730261407654-target",
            selected: false,
            source: "1730259990083",
            sourceHandle: "source",
            target: "1730261407654",
            targetHandle: "target",
            type: "custom",
            zIndex: 0,
          },
        ],
        viewport: {
          x: -82,
          y: 191,
          zoom: 0.7,
        },
      },
      features: {
        opening_statement: "",
        suggested_questions: [],
        suggested_questions_after_answer: {
          enabled: false,
        },
        text_to_speech: {
          enabled: false,
          language: "",
          voice: "",
        },
        speech_to_text: {
          enabled: false,
        },
        retriever_resource: {
          enabled: true,
        },
        sensitive_word_avoidance: {
          enabled: false,
        },
        file_upload: {
          image: {
            enabled: false,
            number_limits: 3,
            transfer_methods: ["local_file", "remote_url"],
          },
          enabled: false,
          allowed_file_types: ["image"],
          allowed_file_extensions: [".JPG", ".JPEG", ".PNG", ".GIF", ".WEBP", ".SVG"],
          allowed_file_upload_methods: ["local_file", "remote_url"],
          number_limits: 3,
          fileUploadConfig: {
            file_size_limit: 15,
            batch_count_limit: 5,
            image_file_size_limit: 10,
            video_file_size_limit: 100,
            audio_file_size_limit: 50,
            workflow_file_upload_limit: 10,
          },
        },
      },
      hash: "0d0d783351982ec0031f472fb9ebdd7873a26457bfe4c4c7f0566590a9312a4d",
      version: "draft",
      marked_name: "",
      marked_comment: "",
      created_by: {
        id: "ea3db04e-2aec-4c18-a196-6fbb56ffd2a9",
        name: "Dify",
        email: "peterjaberau@gmail.com",
      },
      created_at: 1743984090,
      updated_by: {
        id: "ea3db04e-2aec-4c18-a196-6fbb56ffd2a9",
        name: "Dify",
        email: "peterjaberau@gmail.com",
      },
      updated_at: 1744190153,
      tool_published: false,
      environment_variables: [
        {
          id: "8db67049-1c7e-449a-8db2-85e8b9dcc606",
          name: "varStr",
          value: "string vaule 1",
          value_type: "string",
        },
      ],
      conversation_variables: [],
    },
  };

  return payload.res;
};

export const fetchWorkflowRunHistory = ({ url, params }: any) => {
  const payload = {
    name: "fetchWorkflowRunHistory",
    req: {
      base: "https://cloud.dify.ai/console/api",
      method: "GET",
      url: "/apps/{id}/workflow-runs",
      urlFull: "/apps/b03a02b4-588a-4109-a1b4-4c52952c429e/workflow-runs",
      params: { id: "b03a02b4-588a-4109-a1b4-4c52952c429e" },
    },
    res: {
      limit: 20,
      has_more: false,
      data: [
        {
          id: "d394311d-050d-4976-a7b6-11a24e739dc6",
          sequence_number: 1,
          version: "draft",
          status: "failed",
          elapsed_time: 0.06782951904460788,
          total_tokens: 0,
          total_steps: 2,
          created_by_account: {
            id: "ea3db04e-2aec-4c18-a196-6fbb56ffd2a9",
            name: "Dify",
            email: "peterjaberau@gmail.com",
          },
          created_at: 1744144954,
          finished_at: 1744144954,
          exceptions_count: 0,
          retry_index: 0,
        },
      ],
    },
  };

  return payload.res;
};
