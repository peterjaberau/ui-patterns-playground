import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('TimeRange', {
  title: 'Time interval selection',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
          name: 'defaultValue',
          title: { label: 'Default value', tip: 'default | Default value'},
          sets: 'CustomTimeRangeSetter'
        },
        {
          name: 'props.placeholder',
          title: {
            label: 'prompt text',
            tip: 'placeholder | Input box prompt text',
          },
          defaultValue: ['start time', 'end time'],
          setter: 'JsonSetter',
        })
    }
  ],
  snippets: [
    {
      title: 'Time interval selection',
      screenshot: 'icon-time',
      schema: {
        componentName: 'TimeRange',
        props: {
          title: 'Time interval',
          type: 'range',
          format: 'time'
        }
      }
    }
  ]
});
