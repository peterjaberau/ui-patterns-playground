import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('TimePicker', {
  title: 'Time Selection',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'default | Default value'},
        setter: 'CustomTimeSetter'
      })
    }
  ],
  snippets: [
    {
      title: 'Time Selection',
      screenshot: 'icon-time',
      schema: {
        componentName: 'TimePicker',
        props: {
          title: 'Time Selection',
          type: 'string',
          format: 'time'
        }
      }
    }
  ]
});
