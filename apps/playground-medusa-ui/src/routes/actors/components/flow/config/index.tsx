export const domainSchema = [
  {
    name: 'general',
    schema: [
      {
        title: 'Start',
        type: 'Start',
        hidden: true,
        targetHandleHidden: true,
        icon: {
          type: 'icon-start',
          bgColor: '#17B26A',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
            select: {
              title: 'Variable 2',
              type: 'string',
              widget: 'select',
              props: {
                options: [
                  { label: 'a', value: 'a' },
                  { label: 'b', value: 'b' },
                  { label: 'c', value: 'c' },
                ],
              },
            },
            radio1: {
              title: 'Choose single choice',
              type: 'string',
              widget: 'radio',
              props: {
                options: [
                  { label: 'morning', value: 'a' },
                  { label: 'medium', value: 'b' },
                  { label: 'night', value: 'c' },
                ],
              },
            },
            textarea1: {
              title: 'Long text',
              type: 'string',
              widget: 'textArea',
            },
            date1: {
              title: 'Date selection',
              type: 'string',
              widget: 'datePicker',
            },
            dateRange1: {
              title: 'Date range',
              type: 'range',
              widget: 'dateRange',
            },
            time1: {
              title: 'Time selection',
              type: 'string',
              widget: 'timePicker',
            },
            timeRange1: {
              title: 'Time range',
              type: 'range',
              widget: 'timeRange',
            },
          },
        },
      },
      {
        title: 'End',
        type: 'End',
        hidden: true,
        sourceHandleHidden: true,
        icon: {
          type: 'icon-end',
          bgColor: '#F79009',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
            select: {
              title: 'Variable 2',
              type: 'string',
              widget: 'select',
              props: {
                options: [
                  { label: 'a', value: 'a' },
                  { label: 'b', value: 'b' },
                  { label: 'c', value: 'c' },
                ],
              },
            },
          },
        },
      },
      {
        title: 'LLM',
        type: 'LLM',
        description: 'Call large language models to answer questions or process natural language',
        icon: {
          type: 'icon-model',
          bgColor: '#6172F3',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Prompt',
        type: 'Prompt',
        description: 'Improve the answering effect of large language models by carefully designing prompt words',
        icon: {
          type: 'icon-prompt',
          bgColor: '#17B26A',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'knowledge base',
        type: 'knowledge',
        description: 'Allows you to query text content related to user issues from the knowledge base',
        icon: {
          type: 'icon-knowledge',
          bgColor: '#6172F3',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Switch',
        type: 'Switch',
        description: 'Allows you to split the workflow into two branches based on if/else conditions',
        icon: {
          type: 'icon-fenzhi',
          bgColor: '#06AED4',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'HSF',
        type: 'hsf',
        description: 'Allow server requests to be sent through the HSF protocol',
        icon: {
          type: 'icon-hsf',
          bgColor: '#875BF7',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Http',
        type: 'http',
        description: 'Allows sending server requests over HTTP protocol',
        icon: {
          type: 'icon-http',
          bgColor: '#875BF7',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Code execution',
        type: 'Code',
        description: 'Execute a piece of Groovy or Python or NodeJS code to implement custom logic',
        icon: {
          type: 'icon-code',
          bgColor: '#2E90FA',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable 1',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Tool',
        type: 'tool',
        description: 'Allow tool capability',
        icon: {
          type: 'icon-gongju',
          bgColor: '#2E90FA',
        },
        settingSchema: {
          type: 'object',
          properties: {
            input: {
              title: 'Variable one',
              type: 'string',
              widget: 'input',
            },
          },
        },
      },
      {
        title: 'Tool',
        type: '_group',
        items: [
          {
            title: 'Code execution',
            type: 'Code',
            description: 'Execute a piece of Groovy or Python or NodeJS code to implement custom logic',
            icon: {
              type: 'icon-code',
              bgColor: '#2E90FA',
            },
            settingSchema: {
              type: 'object',
              properties: {
                input: {
                  title: 'Variable 1',
                  type: 'string',
                  widget: 'input',
                },
              },
            },
          },
          {
            title: 'Tool',
            type: 'tool',
            description: 'Allow tool capability',
            icon: {
              type: 'icon-gongju',
              bgColor: '#2E90FA',
            },
            settingSchema: {
              type: 'object',
              properties: {
                input: {
                  title: 'Variable 1',
                  type: 'string',
                  widget: 'input',
                },
              },
            },
          },
        ],
      },
    ],
  },
];

export const data = [
  {
    name: 'basic',
    domain: 'general',
    content: {
      nodes: [
        {
          id: '1',
          type: 'Start',
          data: {},
          position: {
            x: 40,
            y: 240,
          },
        },
        {
          id: '2',
          type: 'End',
          data: {},
          position: {
            x: 500,
            y: 240,
          },
        },
      ],
      edges: [{ source: '1', target: '2', id: '234123' }],
    },
    props: {
      nodeSelector: {
        showSearch: true,
      },
    },
  },
];

export const getFlowConfig = ({ name }: any) => {
  const flowConfig = data.find((item) => item.name === name);
  if (!flowConfig) {
    throw new Error(`Flow config for ${name} not found`);
  }
  return flowConfig;
};

export const getDomainSchema = ({ name }: any) => {
  const domainConfig = domainSchema.find((item) => item.name === name);
  if (!domainConfig) {
    domainSchema.find((item) => item.name === 'general');
  }
  return domainConfig;
};
