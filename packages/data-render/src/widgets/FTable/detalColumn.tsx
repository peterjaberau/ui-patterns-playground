import React from 'react';

// Process table columns
const detalColumn = (colmnMap: any, { addons, template, renderFRender, repeatIndex }: any) => {
  const column: any = {};

  for (const key of Object.keys(colmnMap || {})) {
    const value = colmnMap[key];
    const item = typeof value === 'string' ? { title: value } : { ...value };
    const {
      column: childColumn,
      children,
      dataEnum,
      leftUnit,
      rightUnit,
      style,
      ...otherItem
    } = item;
    const { render, notRender } = otherItem;

    if (typeof otherItem?.title === 'string' && otherItem?.title?.includes('{index}')) {
      otherItem.title = otherItem.title.replace('{index}', repeatIndex + 1);
    }

    // Recursively process the merged data
    if (childColumn) {
      otherItem.column = detalColumn(childColumn, {
        addons,
        template,
        renderFRender,
        repeatIndex,
      });
    }

    if (dataEnum || style || leftUnit || rightUnit) {
      otherItem.render = (data: any) => {
        let result = data;

        // When configuring dataEnum, perform data conversion according to dataEnum
        if (dataEnum) {
          result = dataEnum[result];
        }

        if (!result && result !== 0) {
          return '';
        }

        // When configuring leftUnit | rightUnit, data conversion is required
        if (leftUnit) {
          result = `${leftUnit} ${result}`;
        }

        if (rightUnit) {
          result = `${result} ${rightUnit}`;
        }

        return <div style={style}>{result}</div>;
      };
    }

    // Direct string declarations need to be translated
    if (typeof children === 'string') {
      otherItem.render = (data: any) => renderFRender(data, [{ widget: children }]);
    } else if (children) {
      otherItem.render = (data: any) => renderFRender(data, children);
    }

    // Table td uses the general template
    if (template && !render && !notRender) {
      otherItem.render = (data: any) => renderFRender(data, template);
    }

    // Configure external render method for rendering
    if (render && typeof render === 'string') {
      const renderFunc = addons.getMethod(render);
      otherItem.render = (data: any, record: any, index: any) =>
        renderFunc(data, item, record, index);
    }

    column[key] = { ...otherItem };
  }

  return column;
};

export default detalColumn;
