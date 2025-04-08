export const referenceSchema = {
  simpleList: {
    properties: {
      type: 'array',
      widget: 'simpleList',
      props: {
        hideCopy: true,
        hideMove: true,
      },
      className: 'parallel-wrap',
      items: {
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            type: 'string',
            props: {
              allowClear: true,
            },
            className: 'child-title',
            readOnlyWidget: 'ReadOnlyPanel',
          },
          value: {
            title: 'value',
            type: 'string',
            props: {
              allowClear: true,
            },
            className: 'child-title',
            readOnlyWidget: 'ReadOnlyPanel',
          },
        },
      },
    },
  },
};

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
        title: 'LLM (nodeWidget)',
        type: 'LLM',
        nodeWidget: 'NodeWidgetLLM',
        description: 'Call large language models to answer questions or process natural language',
        icon: {
          type: 'icon-model',
          bgColor: '#6172F3',
        },
        settingSchema: {
          type: 'object',
          properties: {
            name: {
              title: 'Node name',
              type: 'string',
              required: true,
            },
            model: {
              type: 'string',
              title: 'Model',
              widget: 'select',
              enum: ['GPT-4', 'GPT-3.5', 'Claude'],
              enumNames: ['GPT-3.5', 'GPT-4'],
              default: 'GPT-4',
            },
            temperature: {
              type: 'number',
              title: 'Temperature',
              widget: 'slider',
              minimum: 0,
              maximum: 1,
              default: 0.7,
            },
            maxTokens: {
              type: 'number',
              title: 'Maximum Token',
              default: 200,
            },
            systemPrompt: {
              type: 'string',
              title: 'System prompt word',
              default: 'You are a professional AI assistant, please help users solve problems. ',
            },
          },
        },
      },
      {
        type: 'Classifier',
        title: 'Problem Classification',
        icon: {
          type: 'icon-gongju',
          bgColor: '#2E90FA',
        },
        nodeWidget: 'NodeWidgetClassifier',
        settingSchema: {
          type: 'object',
          properties: {
            categories: {
              type: 'array',
              title: 'Classification',
              widget: 'select',
              enum: ['Technical Issues', 'Business Issues', 'Others'],
              default: ['Technical Issues', 'Business Issues', 'Others'],
            },
            rules: {
              type: 'string',
              title: 'Rules',
              default: 'Classify according to the keywords in the problem description',
            },
            defaultCategory: {
              type: 'string',
              title: 'Default Category',
              widget: 'select',
              enum: ['Technical Issues', 'Business Issues', 'Others'],
              default: 'Other',
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
        showTestingBtn: true,
        description: 'Allows you to split the workflow into two branches based on if/else conditions',
        icon: {
          type: 'icon-fenzhi',
          bgColor: '#06AED4',
        },
        settingSchema: {
          type: 'object',
          properties: {
            name: {
              title: 'Node name',
              type: 'string',
              required: true,
            },
            template: {
              title: 'Prompt word template',
              type: 'string',
              widget: 'textarea',
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
        title: 'HTTP',
        type: 'HTTP',
        description: 'Allows sending server requests over HTTP protocol',
        icon: {
          type: 'icon-http',
          bgColor: '#875BF7',
        },
        nodeWidget: 'NodeWidgetHTTP',
        settingSchema: {
          type: 'object',
          properties: {
            method: {
              type: 'string',
              title: 'Request method',
              widget: 'select',
              enum: ['GET', 'POST', 'PUT', 'DELETE'],
              default: 'POST',
            },
            url: {
              type: 'string',
              title: 'Request address',
              default: 'https://api.example.com/process',
            },
            headers: {
              type: 'string',
              title: 'Request header',
              default: JSON.stringify({ 'Content-Type': 'application/json' }),
            },
            body: {
              type: 'string',
              title: 'Request body',
              default: JSON.stringify({ key: 'value' }),
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
      {
        title: 'User Task',
        type: 'userTask', // exclusiveGateway
        description: 'Execute a piece of code to implement custom logic',
        icon: {
          type: 'icon-code',
          bgColor: 'pink',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...referenceSchema.simpleList,
          },
        },
      },
      {
        title: 'Merge Nodes',
        type: 'Merge',
        showTestingBtn: true,
        icon: {
          type: 'icon-gongju',
          bgColor: '#9E6BE6',
        },
        settingSchema: {
          type: 'object',
          properties: {
            name: {
              title: 'Node name',
              type: 'string',
              required: true,
            },
            strategy: {
              title: 'Merge strategy',
              type: 'string',
              enum: ['compare', 'concat', 'custom'],
              enumNames: ['Compare and merge', 'Splice and merge', 'Custom merge'],
              widget: 'select',
            },
          },
        },
      },
      {
        title: 'Format',
        type: 'Format',
        showTestingBtn: true,
        icon: {
          type: 'icon-code',
          bgColor: '#F759AB',
        },
        settingSchema: {
          type: 'object',
          properties: {
            name: {
              title: 'Node name',
              type: 'string',
              required: true,
            },
            format: {
              title: 'Format type',
              type: 'string',
              enum: ['markdown', 'html', 'text'],
              enumNames: ['Markdown', 'HTML', 'Plain text'],
              widget: 'select',
            },
          },
        },
      },
      {
        title: 'Call Activity',
        type: 'callActivity',
        description: 'Allow server requests to be sent via HTTP protocol',
        icon: {
          type: 'icon-http',
          bgColor: '#2E90FA',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...referenceSchema.simpleList,
          },
        },
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
          data: { input: 'starting node' },
          position: { x: 10, y: 270 },
          ports: [{ id: 'right', type: 'output', group: 'right' }],
        },
        {
          id: '2',
          type: 'LLM',
          data: {
            model: 'GPT-4',
            temperature: 0.7,
            maxTokens: 200,
            systemPrompt: 'You are a professional AI assistant, please help users solve problems.',
          },
          position: { x: 300, y: 140 },
          ports: [
            { id: 'left', type: 'input', group: 'left' },
            { id: 'right', type: 'output', group: 'right' },
          ],
        },
        {
          id: '3',
          type: 'HTTP',
          data: {
            method: 'POST',
            url: 'https://api.example.com/process',
            headers: "{ 'Content-Type': 'application/json' }",
            body: "{ 'key': 'value' }",
          },
          position: { x: 600, y: 140 },
          ports: [
            { id: 'left', type: 'input', group: 'left' },
            { id: 'right', type: 'output', group: 'right' },
          ],
        },
        {
          id: '4',
          type: 'Classifier',
          data: {
            categories: ['Technical issues', 'Business issues', 'Others'],
            rules: 'Classify according to the keywords in the problem description',
            defaultCategory: 'Other',
          },
          position: { x: 900, y: 140 },
          ports: [
            { id: 'left', type: 'input', group: 'left' },
            { id: 'right', type: 'output', group: 'right' },
          ],
        },
        {
          id: '7',
          type: 'End',
          data: { input: 'end node' },
          position: { x: 1300, y: 270 },
          ports: [{ id: 'left', type: 'input', group: 'left' }],
        },
      ],
      edges: [
        { source: '1', target: '2', id: 'edge-1-2' },
        { source: '2', target: '3', id: 'edge-2-3' },
        { source: '3', target: '4', id: 'edge-3-4' },
        { source: '4', target: '7', id: 'edge-4-5' },
      ],
    },
    props: {
      nodeSelector: {
        showSearch: true,
      },
    },
  },
  {
    name: 'best',
    domain: 'general',
    content: {
      nodes: [
        {
          id: 'start',
          type: 'Start',
          data: {
            title: 'Start',
          },
          position: {
            x: 10,
            and: 60,
          },
        },
        {
          id: 'llm',
          type: 'LLM',
          data: {
            name: 'GPT-4 call',
            model: 'gpt-4',
            temperature: 0.7,
            _status: 'success', // The initial status is changed to success, matching the initial log
          },
          position: {
            x: 250,
            and: 150,
          },
        },
        {
          id: 'review',
          type: 'userTask',
          data: {
            name: 'Manual review',
            assignee: 'admin',
            description: 'Please review the AI ​​generated content',
            _status: 'warning',
          },
          position: {
            x: 450,
            and: 250,
          },
        },
        {
          id: 'format',
          type: 'Format',
          data: {
            name: 'Result format',
            format: 'markdown',
            _status: 'success',
          },
          position: {
            x: 650,
            and: 150,
          },
        },
        {
          id: 'end',
          type: 'End',
          data: {
            title: 'End',
          },
          position: {
            x: 850,
            and: 230,
          },
        },
      ],
      edges: [
        { source: 'start', target: 'llm', id: 'e1' },
        { source: 'llm', target: 'review', id: 'e2' },
        { source: 'review', target: 'format', id: 'e3' },
        { source: 'format', target: 'end', id: 'e4' },
      ],
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
