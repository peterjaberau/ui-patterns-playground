import { getNotInputPropsBasic, createMeta, optionsProp } from '../utils';

export default createMeta('Radio', {
  title: 'Click single choice',
  priority: 997,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getNotInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'JsonSetter'
      })
    },
    optionsProp,
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.direction',
          title: { label: 'Arrangement direction', tip: 'Option arrangement direction'},
          defaultValue: 'row',
          sets: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'Level',
                  value: 'row',
                },
                {
                  title: 'Vertical',
                  value: 'column'
                },
              ]
            }
          }
        }
      ]
    }
  ],
  snippets: [
    {
      title: 'Click single choice',
      screenshot: 'icon-radio',
      schema: {
        componentName: 'Radio',
        props: {
          title: 'Click single choice',
          type: 'string',
          props: {
            options: [
              {
                label: 'A',
                value: 'A'
              },
              {
                label: 'B',
                value: 'B'
              },
              {
                label: 'C',
                value: 'C'
              }
            ]
          }
        }
      }
    }
  ]
});
