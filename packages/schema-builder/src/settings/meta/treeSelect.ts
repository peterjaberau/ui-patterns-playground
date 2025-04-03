import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('TreeSelect', {
  title: 'Tree Selection',
  category: 'Other',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'JsonSetter'
      })
    },
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.treeData',
          title: { label: 'Data source', tip: 'Data source' },
          setter: 'JsonSetter',
        },
        {
          name: 'props.multiple',
          title: {
            label: 'Support multiple selections',
            tip: 'Supports multiple selection (automatically becomes true when treeCheckable is set)',
          },
          setter: 'BoolSetter',
        },
        {
          name: 'props.allowClear',
          title: { label: 'Supports clearing', tip: 'Is clearing allowed' },
          setter: 'BoolSetter',
        },
        {
          name: 'props.treeCheckable',
          title: { label: 'Show checkbox', tip: 'Show checkbox' },
          setter: 'BoolSetter',
        },
        {
          name: 'props.treeDefaultExpandAll',
          title: { label: 'Expand all tree nodes by default', tip: 'Expand all tree nodes by default' },
          setter: 'BoolSetter',
        }
      ],
    }
  ],
  snippets: [
    {
      label: 'Tree selection',
      screenshot: 'icon-tree',
      schema: {
        componentName: 'TreeSelect',
        props: {
          title: 'Tree Selection',
          props: {
            treeData: [
              {
                value: 'parent 1',
                title: 'parent 1',
                children: [
                  {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                      {
                        value: 'leaf1',
                        title: 'leaf1',
                      },
                      {
                        value: 'leaf2',
                        title: 'leaf2',
                      },
                    ],
                  },
                ]
              }
            ]
          }
        }
      }
    }
  ]
});
