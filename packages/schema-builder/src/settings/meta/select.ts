import { createMeta, getInputPropsBasic, optionsProp } from '../utils';

export default createMeta('Select', {
  title: 'Drop-down selection',
  priority: 998,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'JsonSetter'
      })
    },
    optionsProp
  ],
  snippets: [
    {
      title: 'Drop-down radio button',
      screenshot: 'icon-select',
      schema: {
        componentName: 'Select',
        props: {
          title: 'Drop-down radio button',
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
              }
            ]
          }
        }
      }
    },
    {
      title: 'Drop-down multiple selection',
      screenshot: 'icon-multiSelect',
      schema: {
        componentName: 'Select',
        props: {
          title: 'Drop-down multiple selection',
          type: 'array',
          widget: 'multiSelect',
          props: {
            options: [
              {
                label: 'A',
                value: 'A'
              },
              {
                label: 'B',
                value: 'B'
              }
            ]
          }
        }
      }
    }
  ]
});




