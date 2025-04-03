import { createMeta, getInputPropsBasic } from '../utils';

export default createMeta('DateRange', {
  title: 'Date selection interval',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
          name: 'defaultValue',
          title: { label: 'Default value', tip: 'defaultValue | Default value'},
          setter: 'CustomDateRangeSetter'
        },
        {
          name: 'props.placeholder',
          title: {
            label: 'prompt text',
            tip: 'placeholder | Input box prompt text',
          },
          setter: 'JsonSetter',
          defaultValue: ['start time', 'end time']
        })
    },
  ],
  snippets: [
    {
      title: 'Date range selection',
      screenshot: 'icon-date',
      schema: {
        componentName: 'DateRange',
        props: {
          title: 'Date range selection',
          type: 'range',
          format: 'date',
        }
      }
    }
  ]
});
