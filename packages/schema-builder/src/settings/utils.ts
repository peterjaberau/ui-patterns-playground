import cloneDeep from 'lodash/cloneDeep';

export const inputPropsBasic = [
  {
    name: 'title',
    title: { label: 'Title', tip: 'title | Title' },
    setter: 'StringSetter',
  },
  {
    name: 'code',
    title: { label: 'Field name', tip: 'key | Field name' },
    setter: 'StringSetter',
  },
  {
    name: 'defaultValue',
    title: { label: 'Default value', tip: 'defaultValue | Default value'},
    setter: 'StringSetter'
  },
  {
    name: 'props.placeholder',
    title: { label: 'Prompt copy', tip: 'placeholder | Prompt copy' },
    setter: 'StringSetter'
  },
  {
    name: 'description',
    title: { label: 'Supplementary instructions', tip: 'description | Supplementary instructions' },
    setter: 'StringSetter',
  },
  {
    name: 'tooltip.title',
    title: { label: 'Bubble Tip', tip: 'tooltip.title | Bubble Tip Text' },
    setter: 'StringSetter',
  },
  {
    name: 'extra',
    title: { label: 'Extra Tips', tip: 'extra | Extra Tips'},
    setter: 'StringSetter'
  },
  {
    name: 'disabled',
    title: { label: 'Disabled', tip: 'disabled | Disabled' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'hidden',
    title: { label: 'Hide', tip: 'hidden | Hide' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'readOnly',
    title: { label: 'Read-only', tip: 'readOnly | Read-only' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'readOnlyWidget',
    title: { label: 'Read-only component', tip: 'readOnlyWidget | Read-only component' },
    setter: 'StringSetter',
    condition: (target: any) => !!target.getProps().getPropValue('readOnly')
  }
];

export const notInputPropsBasic = [
  {
    name: 'title',
    title: { label: 'Title', tip: 'title | Title' },
    setter: 'StringSetter',
  },
  {
    name: 'code',
    title: { label: 'Field name', tip: 'key | Field name' },
    setter: 'StringSetter',
  },
  {
    name: 'defaultValue',
    title: { label: 'Default value', tip: 'defaultValue | Default value'},
    setter: 'StringSetter'
  },
  {
    name: 'description',
    title: { label: 'Supplementary instructions', tip: 'description | Supplementary instructions' },
    setter: 'StringSetter',
  },
  {
    name: 'tooltip',
    title: { label: 'Bubble Tip', tip: 'tooltip | Bubble Tip Text' },
    setter: 'StringSetter',
  },
  {
    name: 'extra',
    title: { label: 'Extra Tips', tip: 'extra | Extra Tips'},
    setter: 'StringSetter'
  },
  {
    name: 'disabled',
    title: { label: 'Disabled', tip: 'disabled | Disabled' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'hidden',
    title: { label: 'Hide', tip: 'hidden | Hide' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'readOnly',
    title: { label: 'Read-only', tip: 'readOnly | Read-only' },
    setter: 'FrExpressionSetter'
  },
  {
    name: 'readOnlyWidget',
    title: { label: 'Read-only component', tip: 'readOnlyWidget | Read-only component' },
    setter: 'StringSetter',
    condition: (target: any) => !!target.getProps().getPropValue('readOnly')
  }
];

export const optionsProp = {
  display: 'accordion',
  name: 'props.options',
  title: { label: 'Option Configuration', tip: 'options ｜ Option Configuration' },
  sets: {
    componentName: 'ArraySetter',
    props: {
      itemSetter: {
        componentName: 'ObjectSetter',
        initialValue: () => ({
          label: 'option name',
          value: uuid()
        }),
        props: {
          config: {
            items: [
              {
                name: 'label',
                title: 'option name',
                important: true,
                setter: 'StringSetter',
              },
              {
                name: 'value',
                title: 'option value',
                setter: ['StringSetter', 'NumberSetter'],
                important: true,
              },
              {
                name: 'disabled',
                title: 'Disable',
                setter: 'JsonSetter',
              }
            ]
          }
        }
      }
    }
  }
};

export const getInputPropsBasic = (defaultValueProp: any, placeholder?: any) => {
  const result = cloneDeep(inputPropsBasic);
  result.splice(2, 0, defaultValueProp);
  if (placeholder) {
    result.splice(3, 0, defaultValueProp);
  }
  return result;
}

export const getNotInputPropsBasic = (defaultValueProp: any) => {
  const result = cloneDeep(notInputPropsBasic);
  result.splice(2, 0, defaultValueProp);
  return result;
}

export const uuid = () => {
  return ((Math.random() * 1e6) >> 0).toString(36);
};

export const createMeta = (componentName: string, params: any) => {
  return {
    componentName,
    docUrl: '',
    screenshot: '',
    devMode: 'proCode',
    npm: {
      package: '@ali/form-render-material',
      version: '1.0.0',
      exportName: componentName,
      main: 'src/index.tsx',
      destructuring: true,
      subName: '',
    },
    configure: {
      supports: {
        loop: false,
        condition: false
      },
      component: {
        isContainer: false,
        isModal: false,
        nestingRule: {
          parentWhitelist: ['FormRender', 'Card', 'CardList', 'TableList']
        }
      },
    },
    group: 'Basic Components',
    category: 'Common',
    icon: 'https://img.alicdn.com/imgextra/i4/O1CN01gxzRdT1hm9KXRbZkU_!!6000000004319-2-tps-200-200.png',
    ...params
  };
}
