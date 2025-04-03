import React from 'react';
import { transformData, isDataEmpty } from '../utils/common';
import classnames from 'classnames';
import { parseAllExpression } from './expression';

const InnerHtml = (props: any) => {
  const { data, style, className } = props;

  if (typeof data === 'object') {
    return null;
  }

  return (
    <span
      className={classnames(null, { [className]: !!className })}
      style={style}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

export default (props: any, parentData: any, addons: any) => {
  const { data, dataKey, defaultValue, children, ...rest } = props;
  const { getDataFromKey, getSourceData, getMethod, getConfig, getWidget } = addons;
  const sourceData = getSourceData();

  // When the component is configured with dataKey, get the corresponding data on the server according to dataKey, otherwise inherit the parent data
  let value = dataKey ? getDataFromKey(dataKey, parentData, defaultValue) : defaultValue ?? parentData;

  // If there is data to be passed, use it directly
  if (data !== undefined) {
    value = data;
  }

  // Parse function expression and replace value
  const restProps = parseAllExpression(rest, {
    parentData,
    sourceData,
    currentData: value,
  });
  // console.log('before:', props, 'after:', restProps);

  const { widget, showLevel: _showLevel, format, getCompProps, hidden, ...componentProps } = restProps;

  if (hidden && typeof hidden === 'boolean') {
    return;
  }

  if (hidden?.includes?.('method:')) {
    // If it is a function declared by the protocol, get the function and execute it
    const func = getMethod(hidden);
    if (func && func(props, { data: value, parentData, sourceData })) {
      return null;
    }
  }

  // Create a corresponding component based on the widget, first obtain it from the outside, if not, then obtain it from the built-in component
  const component = getWidget(widget);

  if (!component) {
    console.warn(widget, 'No corresponding component found, please check whether the configuration item widget is configured correctly');
    return null;
  }

  //Format the data
  if (['html'].includes(format?.type)) {
    value = <InnerHtml data={value} />;
  } else {
    value = transformData(value, format, parentData, addons);
  }

  const showLevel = _showLevel ?? getConfig()?.showLevel;

  // When configuring showLevel, you need to verify whether the data is empty
  if ([1, 2].includes(showLevel) && isDataEmpty(value, showLevel)) {
    return null;
  }

  if (children) {
    componentProps.childSchema = children;
  }

  // Get component configuration information through external methods
  let asyncComptProps = {};
  const getPropsFunc = getCompProps && getMethod(getCompProps);
  if (getPropsFunc) {
    asyncComptProps = getPropsFunc(props, { data: value, parentData, sourceData }) || {};
  }

  return {
    componentProps,
    asyncComptProps,
    componentData: value,
    component
  };
};
