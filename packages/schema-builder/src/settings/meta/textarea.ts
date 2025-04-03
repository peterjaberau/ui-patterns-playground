import { createMeta, inputPropsBasic } from '../utils';

export default createMeta('TextArea', {
  title: 'Multi-line text',
  priority: 995,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: inputPropsBasic
    },
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.allowClear',
          title: { label: 'Support clearing', tip: 'allowClear | Support clearing' },
          setter: 'BoolSetter'
        },
        {
          name: 'props.showCount',
          title: { label: 'Show word count', tip: 'showCount | Whether to show word count' },
          setter: 'BoolSetter',
        },
        {
          name: 'props.autoSize',
          title: { label: 'Automatic height', tip: 'autoSize | Text field height adaptive content' },
          setter: 'BoolSetter',
        },
        {
          name: 'props.rows',
          title: { label: 'Specify the number of rows', tip: 'minRows | Specify the number of rows to display' },
          setter: 'NumberSetter',
        },
        {
          name: 'props.minLength',
          title: { label: 'Minimum length', tip: 'minLength | minimum content length' },
          setter: 'NumberSetter'
        },
        {
          name: 'props.maxLength',
          title: { label: 'Maximum length', tip: 'maxLength | Maximum content length' },
          setter: 'NumberSetter'
        },
      ]
    }
  ],
  snippets: [
    {
      label: 'Multi-line text',
      screenshot: 'icon-textarea',
      schema: {
        componentName: 'TextArea',
        props: {
          title: 'Multi-line text',
          type: 'string'
        }
      }
    }
  ]
});
