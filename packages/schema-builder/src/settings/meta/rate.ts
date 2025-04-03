import { createMeta, getNotInputPropsBasic } from '../utils';

export default createMeta('Rate', {
  title: 'Rating',
  priority: 992,
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
          name: 'props.allowClear',
          title: { label: 'Supports clearing', tip: 'Is clearing allowed' },
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'props.allowHalf',
          title: { label: 'Support half selection', tip: 'Support half selection' },
          setter: 'BoolSetter',
        },
        {
          name: 'props.count',
          title: { label: 'Total', tip: 'Star Total' },
          setter: 'NumberSetter',
          defaultValue: 5,
        },
      ]
    }
  ],
  snippets: [
    {
      label: 'rating',
      screenshot: 'icon-rate',
      schema: {
        componentName: 'Rate',
        props: {
          title: 'Rating'
        }
      }
    }
  ]
});
