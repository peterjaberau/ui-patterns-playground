'use client';

// nodeTypes:

export const settingSchema = {
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
};

export const activitySchema = {
  title: 'Tools',
  type: '_group',
  items: [
    {
      title: 'Knowledge Retrieval',
      type: 'serviceTask',
      description: 'Allows you to query the knowledge base for text content related to user questions',
      icon: {
        type: 'icon-knowledge',
        bgColor: '#fa541c',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          ...settingSchema,
        },
      },
    },
    {
      title: 'Question Classifier',
      type: 'receiveTask',
      description: 'Define the classification conditions of the problem',
      icon: {
        type: 'icon-prompt',
        bgColor: '#875BF7',
      },
      hideDesc: true,
      nodePanel: {
        width: 510,
      },
      settingSchema: {
        type: 'object',
        className: 'settingSchemaStyle',
        properties: {
          ...settingSchema,
        },
      },
    },
    {
      title: 'Code Execution',
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
          ...settingSchema,
        },
      },
    },
    {
      title: 'HTTP Request',
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
          ...settingSchema,
        },
      },
    },
  ],
};

export const settings = [
  {
    title: 'Event',
    type: '_group',
    items: [
      {
        title: 'Start',
        type: 'startEvent',
        description: 'The node where the process starts. A process is only allowed to have one start node',
        icon: {
          type: 'icon-start',
          bgColor: '#17B26A',
        },
        targetHandleHidden: true,
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            string: {
              title: 'string',
              description: 'With clear x button',
              type: 'string',
              default: 'hello world',
              props: {
                allowClear: true,
              },
            },
            string2: {
              title: 'Complex verification',
              description: 'Usage of pattern and message',
              type: 'string',
              rules: [
                {
                  pattern: '^[A-Za-z0-9]+$',
                  message: 'Please enter numbers or English letters',
                },
              ],
              placeholder: 'Please enter a number or English',
            },
            string3: {
              title: 'Length Control',
              description: 'Length is between 5-15 characters',
              type: 'string',
              minLength: 5,
              maxLength: 15,
            },
            string4: {
              title: 'pre/post tags',
              type: 'string',
              props: {
                addonBefore: 'length',
                addonAfter: 'px',
              },
            },
            string5: {
              title: 'prefix and suffix',
              type: 'string',
              rules: [
                {
                  pattern: '^[0-9]+$',
                  message: 'Please enter a number',
                },
              ],
              props: {
                prefix: '￥',
                suffix: 'RMB',
              },
            },
            string6: {
              title: 'Grayed input box',
              type: 'string',
              disabled: true,
              default: 'hello world',
            },
            string7: {
              title: 'Text box',
              description: 'Fixed height',
              type: 'string',
              format: 'textarea',
              props: {
                row: 4,
              },
            },
          },
          required: ['string4', 'string5'],
        },
      },
      {
        title: 'End',
        type: 'endEvent',
        description: 'Indicates the end node of the process, there can be multiple end nodes',
        icon: {
          type: 'icon-end',
          bgColor: '#F79009',
        },
        sourceHandleHidden: true,
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            nodeDesc: {
              title: 'End description',
              type: 'string',
              format: 'textarea',
              placeholder: 'Scale according to content',
              props: {
                autoSize: {
                  minRows: 3,
                  maxRows: 5,
                },
              },
              readOnlyWidget: 'ReadOnlyPanel',
            },
          },
        },
      },
    ],
  },
  {
    title: 'Logic',
    type: '_group',
    items: [
      {
        title: 'Conditional branch',
        type: 'Switch',
        description: 'Allows you to split the workflow into two branches based on if/else conditions',
        icon: {
          type: 'icon-fenzhi',
          bgColor: '#6172F3',
        },
        nodePanel: {
          width: 550,
        },
        hideDesc: true,
        switchExtra: {
          hideElse: true,
          titleKey: 'name',
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            list: {
              // title: 'Advanced properties',
              type: 'array',
              widget: 'simpleList',
              props: {
                hideCopy: true,
                hideMove: true,
              },
              className: 'switch-list',
              items: {
                type: 'object',
                properties: {
                  name: {
                    title: 'Condition name', // Condition description
                    type: 'string',
                    props: {
                      allowClear: true,
                    },
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  type: {
                    title: 'Conditional Type',
                    type: 'string',
                    widget: 'select',
                    props: {
                      allowClear: true,
                    },
                    enum: ['Type 1'],
                    enumNames: ['Type 1'],
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  value: {
                    title: 'Conditional Statements',
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
        },
        nodeWidget: 'showSwitchNode',
      },
      {
        title: 'Parallel Events',
        type: 'Parallel',
        description: 'Support multiple branches to execute simultaneously',
        icon: {
          type: 'icon-parallel',
          bgColor: '#06aed4',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        parallelExtra: {
          titleKey: 'name',
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            properties: {
              title: 'Properties',
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
                    title: 'attribute name',
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
            list: {
              title: 'Parallel Events',
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
                    title: 'Event name',
                    type: 'string',
                    props: {
                      allowClear: true,
                    },
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  value: {
                    title: 'Event description',
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
        },
      },
    ],
  },
  {
    title: 'Tools',
    type: '_group',
    items: [
      {
        title: 'Knowledge Retrieval',
        type: 'serviceTask',
        description: 'Allows you to query the knowledge base for text content related to user questions',
        icon: {
          type: 'icon-knowledge',
          bgColor: '#fa541c',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...settingSchema,
          },
        },
      },
      {
        title: 'Question Classifier',
        type: 'receiveTask',
        description: 'Define the classification conditions of the problem',
        icon: {
          type: 'icon-prompt',
          bgColor: '#875BF7',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...settingSchema,
          },
        },
      },
      {
        title: 'Code Execution',
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
            ...settingSchema,
          },
        },
      },
      {
        title: 'HTTP Request',
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
            ...settingSchema,
          },
        },
      },
    ],
  },
];

/*
export const settings = [
  {
    title: 'Start Custom',
    type: 'Start',
    description: 'The node where the process starts. A process is only allowed to have one start node',
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
          title: 'Variable one',
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
    nodeWidget: 'customNodeWidget',
  },
  {
    title: 'End Custom',
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
          title: 'End reason',
          type: 'string',
          widget: 'textArea',
        },
      },
    },
    nodeWidget: 'customEndNodeWidget',
  },
  {
    title: 'LLM Custom',
    type: 'LLM',
    description: 'Call the large language model to answer questions or process natural language',
    icon: {
      type: 'icon-model',
      bgColor: '#6172F3',
    },
    settingSchema: {
      type: 'object',
      displayType: 'row',
      labelCol: 6,
      fieldCol: 18,
      properties: {
        input1: {
          title: 'Field A',
          type: 'string',
        },
        input2: {
          title: 'Field B',
          type: 'string',
        },
        input3: {
          title: 'Field C',
          type: 'string',
        },
        input4: {
          title: 'Field D',
          type: 'string',
        },
      },
    },
    nodeWidget: 'customLLMNodeWidget',
  },
  {
    title: 'Event',
    type: '_group',
    items: [
      {
        title: 'Start',
        type: 'startEvent',
        description: 'The node where the process starts. A process is only allowed to have one start node',
        icon: {
          type: 'icon-start',
          bgColor: '#17B26A',
        },
        targetHandleHidden: true,
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            string: {
              title: 'string',
              description: 'With clear x button',
              type: 'string',
              default: 'hello world',
              props: {
                allowClear: true,
              },
            },
            string2: {
              title: 'Complex verification',
              description: 'Usage of pattern and message',
              type: 'string',
              rules: [
                {
                  pattern: '^[A-Za-z0-9]+$',
                  message: 'Please enter numbers or English letters',
                },
              ],
              placeholder: 'Please enter a number or English',
            },
            string3: {
              title: 'Length Control',
              description: 'Length is between 5-15 characters',
              type: 'string',
              minLength: 5,
              maxLength: 15,
            },
            string4: {
              title: 'pre/post tags',
              type: 'string',
              props: {
                addonBefore: 'length',
                addonAfter: 'px',
              },
            },
            string5: {
              title: 'prefix and suffix',
              type: 'string',
              rules: [
                {
                  pattern: '^[0-9]+$',
                  message: 'Please enter a number',
                },
              ],
              props: {
                prefix: '￥',
                suffix: 'RMB',
              },
            },
            string6: {
              title: 'Grayed input box',
              type: 'string',
              disabled: true,
              default: 'hello world',
            },
            string7: {
              title: 'Text box',
              description: 'Fixed height',
              type: 'string',
              format: 'textarea',
              props: {
                row: 4,
              },
            },
          },
          required: ['string4', 'string5'],
        },
      },
      {
        title: 'End',
        type: 'endEvent',
        description: 'Indicates the end node of the process, there can be multiple end nodes',
        icon: {
          type: 'icon-end',
          bgColor: '#F79009',
        },
        sourceHandleHidden: true,
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            nodeDesc: {
              title: 'End description',
              type: 'string',
              format: 'textarea',
              placeholder: 'Scale according to content',
              props: {
                autoSize: {
                  minRows: 3,
                  maxRows: 5,
                },
              },
              readOnlyWidget: 'ReadOnlyPanel',
            },
          },
        },
      },
    ],
  },
  {
    title: 'Logic',
    type: '_group',
    items: [
      {
        title: 'Conditional branch',
        type: 'Switch',
        description: 'Allows you to split the workflow into two branches based on if/else conditions',
        icon: {
          type: 'icon-fenzhi',
          bgColor: '#6172F3',
        },
        nodePanel: {
          width: 550,
        },
        hideDesc: true,
        switchExtra: {
          hideElse: true,
          titleKey: 'name',
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            list: {
              // title: 'Advanced properties',
              type: 'array',
              widget: 'simpleList',
              props: {
                hideCopy: true,
                hideMove: true,
              },
              className: 'switch-list',
              items: {
                type: 'object',
                properties: {
                  name: {
                    title: 'Condition name', // Condition description
                    type: 'string',
                    props: {
                      allowClear: true,
                    },
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  type: {
                    title: 'Conditional Type',
                    type: 'string',
                    widget: 'select',
                    props: {
                      allowClear: true,
                    },
                    enum: ['Type 1'],
                    enumNames: ['Type 1'],
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  value: {
                    title: 'Conditional Statements',
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
        },
        nodeWidget: 'showSwitchNode',
      },
      {
        title: 'Parallel Events',
        type: 'Parallel',
        description: 'Support multiple branches to execute simultaneously',
        icon: {
          type: 'icon-parallel',
          bgColor: '#06aed4',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        parallelExtra: {
          titleKey: 'name',
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            properties: {
              title: 'Properties',
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
                    title: 'attribute name',
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
            list: {
              title: 'Parallel Events',
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
                    title: 'Event name',
                    type: 'string',
                    props: {
                      allowClear: true,
                    },
                    className: 'child-title',
                    readOnlyWidget: 'ReadOnlyPanel',
                  },
                  value: {
                    title: 'Event description',
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
        },
      },
    ],
  },
  {
    title: 'Tools',
    type: '_group',
    items: [
      {
        title: 'Knowledge Retrieval',
        type: 'serviceTask',
        description: 'Allows you to query the knowledge base for text content related to user questions',
        icon: {
          type: 'icon-knowledge',
          bgColor: '#fa541c',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...settingSchema,
          },
        },
      },
      {
        title: 'Question Classifier',
        type: 'receiveTask',
        description: 'Define the classification conditions of the problem',
        icon: {
          type: 'icon-prompt',
          bgColor: '#875BF7',
        },
        hideDesc: true,
        nodePanel: {
          width: 510,
        },
        settingSchema: {
          type: 'object',
          className: 'settingSchemaStyle',
          properties: {
            ...settingSchema,
          },
        },
      },
      {
        title: 'Code Execution',
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
            ...settingSchema,
          },
        },
      },
      {
        title: 'HTTP Request',
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
            ...settingSchema,
          },
        },
      },
    ],
  },
];

 */
