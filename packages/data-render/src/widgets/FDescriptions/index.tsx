import React from 'react';
import { Descriptions, Tooltip } from 'antd';
import { isFunction } from 'lodash-es';

import createIconFont from '../utils/createIconFont';
import { combineClass } from '../utils/common';
import InnerHtml from '../components/InnerHtml';
import ReactNode from '../components/ReactNode';
import '@/widgets/FDescriptions/index.css';

const { Item: DescriptionItem } = Descriptions;
const WIDGETNAME = 'dv-descriptions';

const renderItemLabel = (item: any, data: any, addons: any) => {
  const { label, subLabel, labelToolTip } = item;

  // If label is a function
  if (isFunction(label)) {
    return label(item, data);
  }

  // If label is a string function name
  if (typeof label === 'string' && label.includes('method:')) {
    const [_, funcName] = label.split('method:');
    const func = addons.getMethod(funcName);
    return func(item, data);
  }

  // If label does not exist, return label directly
  if (!labelToolTip?.title) {
    return (
      <>
        {label}
        {subLabel && <span className="item-sub-label">({subLabel})</span>}
      </>
    );
  }

  // If there is a label prompt, aggregate it
  let { icon, title, overlayInnerStyle, ...tooltipProps } = labelToolTip || {};
  const Icon = createIconFont(addons.getConfig().iconFontUrl);

  return (
    <>
      <span className="item-label-box">
        {label}
        {labelToolTip && (
          <Tooltip
            color="#fff"
            overlayInnerStyle={{ color: 'black', ...overlayInnerStyle }}
            title={<InnerHtml data={title} />}
            {...tooltipProps}
          >
            <Icon type={icon?.type || 'icon-wenhao'} className="item-label-icon" style={{ ...icon?.style }} />
          </Tooltip>
        )}
      </span>
      {subLabel && <div className="item-sub-label">{subLabel}</div>}
    </>
  );
};

const getDescriptionItems = (items = [], { addons, data, itemShowLevel }) => {
  return items
    .map((_item: any) => {
      const { defaultValue = '', dataKey, metaData, showLevel, hidden } = _item || {};
      const { getDataFromKey, getSourceData, getMethod, getConfig } = addons;
      const config = getConfig();

      let item = _item;
      if (metaData && config?.descriptions?.asyncItemProps) {
        const asyncProps = config.descriptions.asyncItemProps(_item, { parentData: data, metaData: metaData });
        item = {
          ..._item,
          ...asyncProps,
        };
      }

      let _itemData = getDataFromKey(dataKey, data, defaultValue);
      if (metaData && !dataKey) {
        _itemData = item.data;
      }

      const level = showLevel ?? itemShowLevel ?? config?.showLevel;
      // If the description item has no data (including 0), the description item will not be displayed
      if (level === 1 && (!_itemData || _itemData === '0')) {
        return null;
      }

      // If the description item has no data (does not contain 0), the description item will not be displayed
      if (level === 2 && !_itemData && _itemData !== 0) {
        return null;
      }

      if (hidden && typeof hidden === 'boolean') {
        return null;
      }

      const sourceData = getSourceData();
      // If it is a function
      if (typeof hidden === 'function' && hidden(data, sourceData)) {
        return null;
      }

      if (hidden?.includes?.('method:')) {
        const func = getMethod(hidden);
        if (func && func(data, sourceData)) {
          return null;
        }
      }

      return { ...item, _itemData };
    })
    .filter((item) => item);
};

/**
 * Description list
 */
const FDescriptions = (props: any) => {
  const {
    data,
    className,
    itemStyle,
    labelStyle,
    contentStyle,
    itemShowLevel,
    title,
    extra,
    addons,
    items: _items,
    ...restProps
  } = props;

  const items = getDescriptionItems(_items, { data, addons, itemShowLevel });
  let _column = props.column || 3;

  return (
    <Descriptions
      className={combineClass(WIDGETNAME, className, {
        'dv-descriptions-hasbackgournd': restProps?.style?.hasOwnProperty('backgroundColor'),
        'dv-descriptions-hasborder': !!restProps?.bordered,
        'dv-descriptions-no-header': !(title || extra),
      })}
      size="small"
      {...restProps}
      extra={<ReactNode schema={extra} data={data} addons={addons} />}
      title={<ReactNode schema={title} data={data} addons={addons} />}
    >
      {items.map((item, index) => {
        const {
          showLevel,
          _itemData,
          span: _span,
          style: _itemStyle,
          labelStyle: _labelStyle,
          contentHidden,
          label,
          dataKey,
          ...itemProps
        } = item || {};

        const level = showLevel ?? itemShowLevel;
        const leveMap: any = { 3: 1, 4: 2 };

        // Dynamically calculate span
        let span = _span || 1;
        if (items[index + 1]) {
          const nextSpan = items[index + 1].span ?? 1;

          if ((_span || 1) + nextSpan > _column) {
            span = _column;
            _column = props.column;
          } else {
            _column = _column - 1;
          }
        }

        return (
          <DescriptionItem
            key={index}
            label={renderItemLabel(item, data, addons)}
            span={span}
            style={{ ...itemStyle, ..._itemStyle }}
            labelStyle={{ ...labelStyle, ..._labelStyle }}
            contentStyle={{ ...contentStyle, ...item.contentStyle }}
          >
            {addons.renderer({
              data,
              addons,
              schema: {
                widget: 'FText',
                data: _itemData,
                ...itemProps,
                hidden: contentHidden,
                useType: 'internal',
                showLevel: leveMap[level] || null,
              },
            })}
          </DescriptionItem>
        );
      })}
    </Descriptions>
  );
};

export default FDescriptions;
