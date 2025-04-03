import { createMeta, inputPropsBasic } from '../utils';

export default createMeta('ImageInput', {
  title: 'Image URL',
  category: 'Other',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: inputPropsBasic
    },
  ],
  snippets: [
    {
      title: 'Image URL',
      screenshot: 'icon-image',
      schema: {
        componentName: 'ImageInput',
        props: {
          title: 'Image URL',
        },
      }
    }
  ]
});
