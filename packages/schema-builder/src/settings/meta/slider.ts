import { createMeta, getNotInputPropsBasic } from '../utils';

export default createMeta('Slider', {
  title: 'Slider',
  priority: 991,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getNotInputPropsBasic({
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
          name: 'props.hideInput',
          title: {label: 'Hide input box', tip: 'Hide input box'},
          setter: 'BoolSetter',
        }
      ]
    }
  ],
  snippets: [
    {
      label: 'Slider',
      screenshot: 'icon-slider',
      schema: {
        componentName: 'Slider',
        props: {
          title: 'Slider'
        }
      }
    }
  ]
});
