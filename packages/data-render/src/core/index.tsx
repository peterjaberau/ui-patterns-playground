import React from 'react';
import { isFunction } from 'lodash-es';
import RenderCore from './renderer';
import { getRequestParams } from '../utils/common';
import { parseExpression } from '../models/expression';
import { DataVProps } from '../type';
import './index.css';

const defaultConfig = {
  showLevel: 0,
};

export default (props: DataVProps) => {
  const { schema, data, sourceData, widgets, methods = {}, config = {} } = props;

  // Get the top-level data
  const getSourceData = () => {
    return sourceData || data;
  };

  // Get external custom method
  const getMethod = (_name: string) => {
    let name = _name;
    if (name && name.startsWith('method:')) {
      const [_, funcName] = _name.replace(/\s+/g, '').split('method:');
      name = funcName;
    }

    const func = methods[name];
    if (!isFunction(func)) {
      console.warn(`${name}: custom method does not exist or ${name}: is not a function`);
      return () => null;
    }

    return func;
  };

  // Get external custom components
  const getWidget = (widgetName: string) => {
    if (!widgets?.[widgetName]) {
      console.warn(`${widgets} No corresponding component found, please check the protocol configuration`);
      return null;
    }
    return (widgets as any)[widgetName];
  };

  // Get interface configuration
  const getRequestConfig = () => {
    return {
      dataKey: 'module',
      ...config.request,
    };
  };

  // Get the interface input parameters
  const getRequestPrams = (params: any, { insideData }: any) => {
    return getRequestParams(params, data, insideData);
  };

  const getConfig = () => ({
    ...defaultConfig,
    ...config,
  });

  const getDataFromKey = (_key: string, currentData: any, defaultValue: any) => {
    if (!_key) {
      return currentData;
    }
    const key = ['data:', 'source:', 'parent:', '{{'].some((item) => _key.includes(item)) ? _key : `$d.${_key}`;
    return parseExpression(key, { currentData, sourceData: data }) ?? defaultValue;
  };

  const renderer = ({ data, schema, addons }: any) => {
    return <RenderCore schema={schema} data={data} addons={addons} />;
  };

  return (
    <RenderCore
      data={data || {}}
      schema={schema}
      addons={{
        renderer,
        getMethod,
        getWidget,
        getSourceData,
        getRequestConfig,
        getRequestPrams,
        getConfig,
        getDataFromKey,
      }}
    />
  );
};
