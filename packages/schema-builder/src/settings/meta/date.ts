import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('DatePicker', {
  title: 'Date Selection',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'CustomDateSetter'
      })
    },
  ],
  snippets: [
    {
      title: 'Date Selection',
      screenshot: 'icon-date',
      schema: {
        componentName: 'DatePicker',
        props: {
          title: 'Date Selection',
          type: 'string'
        }
      }
    }
  ]
});
