
import { createMeta } from '../utils';

export default createMeta('FormRender', {
  title: 'Form',
  group: 'Basic Components',
  category: 'Form',
  props: [
    {
      title: 'Form Layout',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'displayType',
          title: {
            label: 'label position',
            tip: 'displayType | Label display position',
          },
          defaultValue: 'row',
          sets: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'Horizontal left',
                  value: 'row'
                },
                {
                  title: 'Vertical top',
                  value: 'column'
                },
                {
                  title: 'Compact',
                  value: 'inline'
                }
              ]
            }
          }
        },
        {
          name: 'column',
          title: {
            label: 'One row and multiple columns',
            tip: 'column | multiple columns per row',
          },
          defaultValue: 1,
          sets: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'One column',
                  value: 1
                },
                {
                  title: 'Two columns',
                  value: 2
                },
                {
                  title: 'Three columns',
                  value: 3
                },
                {
                  title: 'Four columns',
                  value: 4
                }
              ]
            }
          }
        },
        {
          name: 'labelWidth',
          title: {
            label: 'label width',
            tip: 'labelWidth ｜ Label width',
          },
          setter: 'NumberSetter'
        }
      ]
    },
    {
      title: 'The total number of labels and control grids cannot exceed 24',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'labelCol',
          title: {
            label: 'Number of label grids',
            tip: 'labelCol | number of grid places',
          },
          sets: {
            componentName: 'NumberSetter',
            props: {
              min: 0,
              max: 24
            }
          }
        },
        {
          name: 'fieldCol',
          title: {
            label: 'Number of control grids',
            tip: 'fieldCol | grid placeholder number'
          },
          sets: {
            componentName: 'NumberSetter',
            props: {
              min: 0,
              max: 24
            }
          }
        },
        {
          name: 'maxWidth',
          title: {
            label: 'maximum width',
            tip: 'maxWidth ｜ Maximum width'
          },
          defaultValue: '340px',
          setter: 'StringSetter'
        }
      ]
    }
  ],
  configure: {
    supports: {
      loop: false,
      condition: false
    },
    component: {
      isContainer: true,
      isModal: false
    }
  }
});
