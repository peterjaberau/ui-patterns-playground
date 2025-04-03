import { createMeta, getNotInputPropsBasic } from '../utils';

export default createMeta('Switch', {
  title: 'Switch',
  priority: 993,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getNotInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'BoolSetter'
      })
    },
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.checkedChildren',
          title: { label: 'Selected content', tip: 'checkedChildren | Selected content' },
          setter: 'StringSetter',
        },
        {
          name: 'props.unCheckedChildren',
          title: { label: 'Unchecked content', tip: 'unCheckedChildren | Unchecked content' },
          setter: 'StringSetter',
        }
      ]
    }
  ],
  snippets: [
    {
      label: 'switch',
      screenshot: 'icon-switch',
      schema: {
        componentName: 'Switch',
        props: {
          title: 'Switch',
          type: 'boolean'
        }
      }
    }
  ]
});
