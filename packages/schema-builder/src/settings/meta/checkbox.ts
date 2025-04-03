import { createMeta, getNotInputPropsBasic } from '../utils';

export default createMeta('Checkbox', {
  title: 'Select',
  priority: 994,
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: getNotInputPropsBasic({
        name: 'defaultValue',
        title: { label: 'Default value', tip: 'defaultValue | Default value'},
        setter: 'BoolSetter'
      })
    },
  ],
  snippets: [
    {
      title: 'Select',
      screenshot:'icon-isNot',
      schema: {
        componentName: 'Checkbox',
        props: {
          title: 'Select',
          type: 'boolean'
        },
      }
    }
  ],

});
