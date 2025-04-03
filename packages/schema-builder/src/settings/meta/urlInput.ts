import { createMeta, inputPropsBasic } from '../utils';

export default createMeta('UrlInput', {
  title: 'Link input box',
  category: 'Other',
  props: [
    {
      title: 'Basic Configuration',
      type: 'group',
      display: 'accordion',
      items: inputPropsBasic
    },
    {
      title: 'Other configurations',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'props.addonText',
          title: { label: 'Button text', tip: 'Jump button text configuration' },
          defaultValue: 'Test link',
          setter: 'StringSetter'
        }
      ]
    }
  ],
  snippets: [
    {
      title: 'Link input box',
      screenshot: 'icon-link',
      schema: {
        componentName: 'UrlInput',
        props: {
          title: 'Link input box',
        },
      }
    }
  ]
});
