import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('InputNumber', {
  title: 'Number Input Box',
  priority: 999,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'NumberSetter'
      })
    },
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.prefix',
          title: { label: 'prefix', tip: 'prefix ｜ prefix' },
          setter: 'StringSetter',
        },
        {
          name: 'props.addonBefore',
          title: { label: 'Previous label', tip: 'addonBefore ｜ Prev label' },
          setter: 'StringSetter',
        },
        {
          name: 'props.addonAfter',
          title: { label: 'After label', tip: 'addonAfter ｜ After label' },
          setter: 'StringSetter',
        },
        {
          name: 'props.precision',
          title: { label: 'Numerical precision', tip: 'precision ｜ numerical precision' },
          setter: 'NumberSetter',
        },
        {
          name: 'props.step',
          title: { label: 'Single step length', tip: 'step | Change the number of steps each time, can be a decimal' },
          setter: ['NumberSetter', 'StringSetter'],
        }
      ]
    }
  ],
  snippets: [
    {
      label: 'Number input box',
      screenshot: 'icon-inputNumber',
      schema: {
        componentName: 'InputNumber',
        props: {
          title: 'Number Input Box',
          type: 'number'
        }
      }
    }
  ]
});

