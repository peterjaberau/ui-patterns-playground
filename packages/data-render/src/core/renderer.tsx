import React from 'react';
import { Empty, Skeleton } from 'antd';
import { get } from 'lodash-es';
import decorator from '../models/resolver';

// Process the schema
const transformSchema = (schema: any, data: any) => {
  if (!schema || typeof schema !== 'object') {
    return [];
  }

  const arrayList = Array.isArray(schema) ? schema : [schema];

  // Handle the repeat component to display data multiple times
  const result: any[] = [];
  arrayList.forEach((widget: any) => {
    const { repeat, ...ohterProps } = widget;

    // If there is no multiple display, return directly
    if (!repeat) {
      result.push(widget);
      return;
    }

    // If repeat is an array, display directly according to the repeat data
    if (Array.isArray(repeat)) {
      repeat.forEach((item: any) => {
        result.push({ ...ohterProps, ...item });
      });
      return;
    }

    if (repeat.dataKey) {
      const array = get(data, repeat.dataKey, []);
      array.forEach((item: any) => {
        result.push({ ...ohterProps, data: item });
      });
    }

    if (Array.isArray(data)) {
      data.forEach((_, index: number) => {
        result.push({ ...ohterProps, repeatIndex: index });
      });
    }
  });

  return result;
};

/**
 * Renderer
 */
export default (props: any): any => {
  const { schema, data, addons, showEmpty } = props;
  const List = transformSchema(schema, data);

  const componentList = List.map((item: any, index: number) => {
    let currData = data;
    if ((data && item.repeatIndex) || item.repeatIndex === 0) {
      currData = data[item.repeatIndex];
    }
    const componentInfo = decorator(item, currData, addons);

    if (!componentInfo) {
      return;
    }

    const { component: Component, componentData, componentProps, asyncComptProps } = componentInfo;

    return (
      <Component
        key={index}
        {...componentProps}
        data={componentData}
        {...asyncComptProps}
        addons={{
          ...addons,
          dataKey: item.dataKey,
          getParentData: () => {
            return currData;
          }
        }}
      />
    );
  });

  if (componentList.length === 0) {
    if (showEmpty) {
      return (
        <Skeleton active loading={!addons.getSourceData()}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Skeleton>
      );
    }
    return null;
  }

  return componentList;
};
