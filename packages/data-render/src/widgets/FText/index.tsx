import React, { isValidElement, CSSProperties } from 'react';

import { transformData, combineClass, transDataKeyToData } from '../utils/common';
import createIconFont from '../utils/createIconFont';
import { renderText } from '../components/TextView';
import InnerHtml from '../components/InnerHtml';
import 'src/widgets/FText/index.css';

interface IProps {
  className: string;
  style: CSSProperties;
  dataKey: string; // data key
  data: any; // data
  defaultValue: any; // default value
  leftText: string; // left text
  rightText: string; // right text
  leftTextStyle: CSSProperties; // Left text style
  rightTextStyle: CSSProperties; // Right text style
  childSchema: any; // child protocol
  render: string; // Custom rendering function name
  showKey: string | ((a: any, b: any) => boolean); // Get the display result according to showKey, true to display, false not to display
  showLevel: number; // Control display level
  format: any; //Data format configuration
  iconSetting: any; // Icon configuration
  useType: string; // Usage, distinguish whether it is called by other components. If so, you need to format the data yourself
  addons: any; // data-render plugin control
  [key: string]: any;
}

/**
 *
 * Text component
 */
const FText = (props: IProps) => {
  const {
    className,
    style,
    data,
    leftText,
    rightText,
    leftTextStyle,
    rightTextStyle,
    useType,
    childSchema,
    render,
    format,
    iconSetting,
    addons,
  } = props;

  const parentData = addons.getParentData();

  let value = data;

  // Special treatment for Boolean values
  if (typeof value === 'boolean') {
    value = value + '';
  }

  //Called by other components
  if (useType === 'internal') {
    //Format the data
    if (['html'].includes(format?.type)) {
      value = <InnerHtml data={value} />;
    } else {
      value = transformData(value, format, parentData, addons);
    }
  }

  // Custom rendering: configure external render method
  if (render && typeof render === 'string') {
    const renderFunc = addons.getMethod(render);
    return renderFunc(value, props, parentData) || null;
  }

  // Protocol rendering: support protocol nested rendering sub-content
  if (childSchema) {
    let schema = childSchema;
    // Protocol structuring: conversion is required when the protocol is abbreviated
    if (typeof childSchema === 'string') {
      schema = { widget: childSchema };
    }
    return addons.renderer({ schema, data: value, addons });
  }

  // Exception handling, such data does not conform to the rendering rules and will not be rendered
  if (typeof value === 'object' && !isValidElement(value)) {
    return null;
  }

  let ellipsisStyle: any = {};
  if (props.ellipsis && style?.width) {
    ellipsisStyle = { width: 0, flex: 1 };
  }
  if (style?.color || style?.fontSize) {
    ellipsisStyle.color = style.color;
    ellipsisStyle.fontSize = style.fontSize;
  }

  // Support text copy and omission functions
  value = renderText(value, props, ellipsisStyle);

  const content = (
    <>
      {leftText && (
        <span className="content-left-text" style={leftTextStyle}>
          {leftText}
        </span>
      )}
      {value}
      {rightText && (
        <span className="content-right-text" style={rightTextStyle}>
          {rightText}
        </span>
      )}
    </>
  );

  // The component is called by other components and returns directly
  if (useType === 'internal') {
    return content;
  }

  const handleIconClick = (ev: any) => {
    transDataKeyToData(iconSetting, { data: parentData, addons });
    if (iconSetting.href) {
      if (iconSetting.target === '_self') {
        window.location.href = iconSetting.href;
      } else {
        window.open(iconSetting.href);
      }
      return;
    }
    // Pass the external method to implement the button click event
    const func = addons.getMethod(iconSetting?.method?.name || iconSetting?.method);
    func({ dataKey: props.dataKey, method: iconSetting.method, data: parentData }, ev);
  };

  const Icon = createIconFont(addons.getConfig().iconFontUrl);
  const isClick = !!iconSetting?.href || !!iconSetting?.method;
  const iconContent = (
    <Icon
      type={iconSetting?.type}
      style={{ cursor: isClick ? 'pointer' : 'auto', ...iconSetting?.style }}
      onClick={handleIconClick}
    />
  );

  return (
    <div className={combineClass('dv-text', className)} style={style}>
      {iconSetting?.direct === 'left' && <span className="left-icon">{iconContent}</span>}
      {content}
      {iconSetting?.direct !== 'left' && <span className="right-icon">{iconContent}</span>}
    </div>
  );
};

export default FText;
