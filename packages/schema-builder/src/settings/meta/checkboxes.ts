import { createMeta, optionsProp, getNotInputPropsBasic } from '../utils';

export default createMeta('Checkboxes', {
  title: 'Click on the multiple-selection box',
  // priority: 996,
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
                  value: 'column',
                },
              ]
            }
          }
        }
      ]
    }
  ],
  snippets: [{
    title: 'Click to select multiple options',
    screenshot: 'icon-checkbox',
    schema: {
      componentName: 'Checkboxes',
      props: {
        title: 'Click to select multiple options',
        type: 'array',
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
          ],
          direction: 'row'
        }
      }
    }
  }]
});
