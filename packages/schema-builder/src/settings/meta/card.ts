import { createMeta } from '../utils';

const props: any = [
  {
    name: 'title',
    title: { label: 'Title', tip: 'title | Card theme' },
    setter: 'StringSetter'
  },
  {
    name: 'code',
    title: { label: 'Field name', tip: 'key | Field name' },
    setter: 'StringSetter',
  },
  {
    name: 'description',
    title: { label: 'Description', tip: 'description ｜ Card description' },
    setter: 'StringSetter'
  },
  {
    name: 'column',
    title: {
      label: 'One row and multiple columns',
      tip: 'column ｜ The form content is displayed in several columns',
    },
    defaultValue: 1,
    sets: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          {
            title: 'One column',
            value: 1,
          },
          {
            title: 'Two columns',
            value: 2,
          },
          {
            title: 'Three columns',
            value: 3,
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
    name: 'widget',
    title: {
      label: 'type',
      tip: 'widget | type',
    },
    defaultValue: 1,
    sets: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          {
            title: 'Card',
            value: 'card',
          },
          {
            title: 'Folding Panel',
            value: 'collapse',
          },
          {
            title: 'Title line',
            value: 'lineTitle',
          },
          {
            title: 'Inline',
            value: 'subInline'
          }
        ]
      }
    }
  },
];

const snippets = [
  {
    title: 'Object',
    screenshot: 'icon-object',
    schema: {
      componentName: 'Card',
      props: {
        title: 'Card theme',
        description: 'This is an object type',
        column: 3,
        type: 'object',
        widget: 'collapse'
      }
    }
  }
]

export default createMeta('Card', {
  title: 'Object',
  category: 'Layout',
  group: 'Basic Components',
  priority: 1,
  props,
  snippets,
  configure: {
    supports: {
      loop: false,
      condition: false
    },
    component: {
      isContainer: true,
      isModal: false,
      nestingRule: {
        parentWhitelist: ['FormRender', 'Card', 'CardList']
      }
    }
  }
});
