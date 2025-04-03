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
    title: 'Template configuration',
    display: 'block',
    type: 'group',
    items: [
      {
        name: 'widget',
        title: {
          label: 'type',
          tip: 'widget | type',
        },
        sets: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'SimpleList',
                value: 'simpleList',
              },
              {
                title: 'CardList',
                value: 'cardList',
              },
              {
                title: 'DrawerList',
                value: 'drawerList',
              },
              {
                title: 'TableList',
                value: 'tableList'
              },
              {
                title: 'VirtualList',
                value: 'virtualList'
              },
              {
                title: 'TabList',
                value: 'tabList'
              }
            ]
          }
        },
        extraProps: {
          setValue(target: any, value: string) {
            const node = target.getNode();
            if (value !== 'cardList') {
              node.setPropValue('items.widget', undefined);
              node.setPropValue('items.title', undefined);
              node.setPropValue('items.description', undefined);
              node.setPropValue('items.column', undefined);
            }
          }
        }
      },
      {
        name: 'items.widget',
        title: {
          label: 'Style type',
          tip: 'Style type',
        },
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
        },
        condition: (target: any) => target.getProps().getPropValue('widget') === 'cardList'
      },
      {
        name: 'items.title',
        title: { label: 'Title', tip: 'title | Card theme' },
        setter: 'StringSetter',
        condition: (target: any) => target.getProps().getPropValue('widget') === 'cardList'
      },
      {
        name: 'items.description',
        title: { label: 'Description', tip: 'description ｜ Card description' },
        setter: 'StringSetter',
        condition: (target: any) => target.getProps().getPropValue('widget') === 'cardList'
      },
      {
        name: 'items.column',
        title: {
          label: 'One row and multiple columns',
          tip: 'column ｜ Display the form content in several columns',
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
        },
        condition: (target: any) => target.getProps().getPropValue('widget') === 'cardList',
        extraProps: {
          setValue(target: any, value: number) {
            const node = target.getNode();
            let labelSpan = 8;
            let wrapperColSpan = 16;
            if (value === 1) {
              labelSpan = 4;
              wrapperColSpan = 6;
            } else if (value === 2) {
              wrapperColSpan = 10;
            }
            node.setPropValue('labelCol.span', labelSpan);
            node.setPropValue('wrapperCol.span', wrapperColSpan);

            node.mergeChildren(
              (child: any) => {
                let span = 24 / value;
                child.setPropValue('span', span);
                return false;
              },
              () => {},
              () => {},
            );
          }
        }
      }
    ]
  }
];

const snippets = [
  {
    title: 'List',
    screenshot: 'icon-list',
    schema: {
      componentName: 'CardList',
      props: {
        title: 'List',
        description: 'This is a list',
        type: 'array',
        items: {
          title: 'Card theme',
          description: 'This is an object type',
          column: 3,
          type: 'object',
        }
      }
    }
  }
]

export default createMeta('CardList', {
  title: 'List',
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
        parentWhitelist: ['FormRender', 'Card']
      }
    },
  }
});
