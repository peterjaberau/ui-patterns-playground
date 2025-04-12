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
        title: 'Base',
        type: '_group',
        items: [
          {
            title: 'Start',
            type: 'Start',
            hidden: false,
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
            hidden: false,
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
        ],
      },
      {
        title: 'Custom',
        type: '_group',
        items: [
          {
            title: 'Setting Custom Simple',
            type: 'custom',
            icon: {
              type: 'icon-start',
              bgColor: '#17B26A',
            },
            settingWidget: 'SettingWidgetSimple',
            settingWidgetProps: {
              params: 'test',
            },
          },
          {
            title: 'Setting Custom Advanced',
            type: 'custom',
            icon: {
              type: 'icon-model',
              bgColor: '#6172F3',
            },
            settingWidget: 'SettingWidgetAdvanced',
          },
        ],
      },

      {
        title: 'LLM (nodeWidget)',
        type: 'LLM',
        showTestingBtn: true,
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
        showTestingBtn: true,
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
        showTestingBtn: true,
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
        switchExtra: {
          // Conditional node additional attribute configuration
          // hideElse: true,
          valueKey: 'value',
          titleKey: 'name',
        },
      },
      {
        title: 'HSF',
        showTestingBtn: true,
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
        showTestingBtn: true,
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
          id: 'start',
          type: 'Start',
          data: { input: 'starting node' },
          position: { x: 10, y: 270 },
          ports: [{ id: 'right', type: 'output', group: 'right' }],
        },
        {
          id: 'llm',
          type: 'LLM',
          data: {
            model: 'GPT-4',
            temperature: 0.7,
            maxTokens: 200,
            systemPrompt: 'You are a professional AI assistant, please help users solve problems.',
            _status: 'success',
          },
          position: { x: 300, y: 140 },
          ports: [
            { id: 'left', type: 'input', group: 'left' },
            { id: 'right', type: 'output', group: 'right' },
          ],
        },
        {
          id: 'http',
          type: 'HTTP',
          data: {
            method: 'POST',
            url: 'https://api.example.com/process',
            headers: "{ 'Content-Type': 'application/json' }",
            body: "{ 'key': 'value' }",
            _status: 'warning',
          },
          position: { x: 600, y: 140 },
          ports: [
            { id: 'left', type: 'input', group: 'left' },
            { id: 'right', type: 'output', group: 'right' },
          ],
        },
        {
          id: 'classifier',
          type: 'Classifier',
          data: {
            categories: ['Technical issues', 'Business issues', 'Others'],
            rules: 'Classify according to the keywords in the problem description',
            defaultCategory: 'Other',
            _status: 'success',
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
        { source: 'start', target: 'llm', id: 'edge-1-2' },
        { source: 'llm', target: 'http', id: 'edge-2-3' },
        { source: 'http', target: 'classifier', id: 'edge-3-4' },
        { source: 'classifier', target: '7', id: 'edge-4-5' },
      ],
    },
    logs: [
      {
        nodeId: 'llm',
        statusPanel: {
          status: [
            { label: 'Success', value: 'success', isBadge: true },
            { label: 'Time consumed', value: '2.3s' },
            { label: 'Token', value: '856' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                model: 'GPT-4',
                temperature: 0.7,
                maxTokens: 200,
                systemPrompt: 'Please generate a product introduction document.',
              },
              null,
              2,
            ),
          },
          {
            title: 'Ouput',
            code: `XFlow is a powerful process orchestration component that provides an intuitive visual interface and supports node drag, connection, configuration and other functions. Users can quickly build complex business processes through simple operations. \n\nFeatures:\n1. Visual arrangement\n2. Rich node types\n3. Flexible configuration options\n4. Perfect state management`,
          },
        ],
      },
      {
        nodeId: 'http',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                method: 'POST',
                url: 'https://api.example.com/process',
                headers: "{ 'Content-Type': 'application/json' }",
                body: "{ 'key': 'value' }",
                _status: 'warning',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Manual review Execution successful \n Processing completion time: ${new Date().toLocaleString()}`,
          },
        ],
      },
      {
        nodeId: 'classifier',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                categories: ['Technical issues', 'Business issues', 'Others'],
                rules: 'Classify according to the keywords in the problem description',
                defaultCategory: 'Other',
                _status: 'success',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Result Format Execution Successfully \n Processing Completion Time: ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
    props: {
      globalConfig: {
        nodeView: {
          status: [
            { value: 'processing', color: '#1890FF', name: 'Processing' },
            { value: 'success', color: '#52c41a', name: 'Success' },
            { value: 'error', color: '#ff4d4f', name: 'Failed' },
            { value: 'warning', color: '#faad14', name: 'warning' },
          ],
        },
      },
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
            y: 60,
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
            y: 150,
          },
        },
        {
          id: 'review',
          type: 'userTask',
          data: {
            name: 'Manual review',
            assignee: 'admin',
            description: 'Please review the AI generated content',
            _status: 'warning',
          },
          position: {
            x: 450,
            y: 250,
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
            y: 150,
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
            y: 230,
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
      globalConfig: {
        nodeView: {
          status: [
            { value: 'processing', color: '#1890FF', name: 'Processing' },
            { value: 'success', color: '#52c41a', name: 'Success' },
            { value: 'error', color: '#ff4d4f', name: 'Failed' },
            { value: 'warning', color: '#faad14', name: 'warning' },
          ],
        },
      },
      nodeSelector: {
        showSearch: true,
      },
    },
    logs: [
      {
        nodeId: 'llm',
        statusPanel: {
          status: [
            { label: 'Success', value: 'success', isBadge: true },
            { label: 'Time consumed', value: '2.3s' },
            { label: 'Token', value: '856' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'GPT-_4 requests',
                model: 'gpt-4',
                temperature: 0.7,
                prompt: 'Please generate a product introduction document',
              },
              null,
              2,
            ),
          },
          {
            title: 'Ouput',
            code: `XFlow is a powerful process orchestration component that provides an intuitive visual interface and supports node drag, connection, configuration and other functions. Users can quickly build complex business processes through simple operations. \n\nFeatures:\n1. Visual arrangement\n2. Rich node types\n3. Flexible configuration options\n4. Perfect state management`,
          },
        ],
      },
      {
        nodeId: 'review',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'Manual review',
                assignee: 'admin',
                description: 'Please review the content generated by AI',
                _status: 'warning',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Manual review Execution successful \n Processing completion time: ${new Date().toLocaleString()}`,
          },
        ],
      },
      {
        nodeId: 'format',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'Format result',
                format: 'markdown',
                _status: 'success',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Result Format Execution Successfully \n Processing Completion Time: ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  },
  {
    name: 'runtime',
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
            y: 60,
          },
        },
        {
          id: 'llm',
          type: 'LLM',
          data: {
            name: 'GPT-4 calls',
            model: 'gpt-4',
            temperature: 0.7,
            _status: 'success', // Change the initial state to success, match the initial log
          },
          position: {
            x: 250,
            y: 150,
          },
        },
        {
          id: 'review',
          type: 'userTask',
          data: {
            name: 'Manual review',
            assignee: 'admin',
            description: 'Please review the content generated by AI',
            _status: 'warning',
          },
          position: {
            x: 450,
            y: 250,
          },
        },
        {
          id: 'format',
          type: 'Format',
          data: {
            name: 'Format result',
            format: 'markdown',
            _status: 'success',
          },
          position: {
            x: 650,
            y: 150,
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
            y: 230,
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
    logs: [
      {
        nodeId: 'llm',
        statusPanel: {
          status: [
            { label: 'Success', value: 'success', isBadge: true },
            { label: 'Time consumed', value: '2.3s' },
            { label: 'Token', value: '856' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'GPT-_4 requests',
                model: 'gpt-4',
                temperature: 0.7,
                prompt: 'Please generate a product introduction document',
              },
              null,
              2,
            ),
          },
          {
            title: 'Ouput',
            code: `XFlow is a powerful process orchestration component that provides an intuitive visual interface and supports node drag, connection, configuration and other functions. Users can quickly build complex business processes through simple operations. \n\nFeatures:\n1. Visual arrangement\n2. Rich node types\n3. Flexible configuration options\n4. Perfect state management`,
          },
        ],
      },
      {
        nodeId: 'review',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'Manual review',
                assignee: 'admin',
                description: 'Please review the content generated by AI',
                _status: 'warning',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Manual review Execution successful \n Processing completion time: ${new Date().toLocaleString()}`,
          },
        ],
      },
      {
        nodeId: 'format',
        statusPanel: {
          status: [
            { label: 'status', value: 'success', isBadge: true },
            { label: 'Time', value: '1.5s' },
            { label: 'Token', value: '1024' },
          ],
          extra: `Execution time: ${new Date().toLocaleString()}`,
        },
        codePanel: [
          {
            title: 'Input',
            code: JSON.stringify(
              {
                name: 'Format result',
                format: 'markdown',
                _status: 'success',
              },
              null,
              2,
            ),
          },
          {
            title: 'Output',
            code: `Node Result Format Execution Successfully \n Processing Completion Time: ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
    props: {
      globalConfig: {
        nodeView: {
          status: [
            { value: 'processing', color: '#1890FF', name: 'Processing' },
            { value: 'success', color: '#52c41a', name: 'Success' },
            { value: 'error', color: '#ff4d4f', name: 'Failed' },
            { value: 'warning', color: '#faad14', name: 'warning' },
          ],
        },
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
