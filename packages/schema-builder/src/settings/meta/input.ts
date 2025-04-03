import { createMeta, inputPropsBasic } from '../utils';

export default createMeta('Input', {
  title: 'Single line text',
  priority: 1000,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: inputPropsBasic
    },
    {
      title: 'Other configurations',
      type: 'group',
      display: 'accordion',
      items: [
        {
          name: 'props.prefix',
          title: { label: 'prefix', tip: 'prefix | prefix' },
          setter: 'StringSetter'
        },
        {
          name: 'props.suffix',
          title: { label: 'suffix', tip: 'suffix | suffix' },
          setter: 'StringSetter'
        },
        {
          name: 'props.addonBefore',
          title: { label: 'Previous label', tip: 'addonBefore | Prev label' },
          setter: 'StringSetter'
        },
        {
          name: 'props.addonAfter',
          title: { label: 'After label', tip: 'addonAfter | After label' },
          setter: 'StringSetter'
        },
        {
          name: 'props.allowClear',
          title: { label: 'Support clearing', tip: 'allowClear | Support clearing' },
          setter: 'BoolSetter'
        }
      ]
    }
  ],
  snippets: [{
    label: 'single line text',
    screenshot: 'icon-input',
    schema: {
      componentName: 'Input',
      props: {
        title: 'Single line text',
        type: 'string'
      }
    }
  }]
});
