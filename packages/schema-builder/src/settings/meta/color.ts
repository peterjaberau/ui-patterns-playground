import { createMeta, notInputPropsBasic } from '../utils';

export default createMeta('Color', {
  title: 'Color selection',
  category: 'Other',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: notInputPropsBasic
    }
  ],
  snippets: [
    {
      title: 'Color selection',
      screenshot:'icon-color',
      schema: {
        componentName: 'Color',
        props: {
          title: 'Color selection',
        }
      }
    }
  ]
});
