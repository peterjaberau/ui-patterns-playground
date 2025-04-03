import { SyncOutlined } from '@ant-design/icons';
import { createUpdateEffect, useDeepCompareEffect } from 'ahooks';
import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';
import FormRender, { FRProps, useForm } from 'formRenderV1';
import React, {
  CSSProperties,
  FC,
  memo,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { useChart } from '../../utils/store';
import { DataSource, ObjectFilters } from '../../utils/type';
import './index.less';

const useDeepCompareUpdateEffect = createUpdateEffect(useDeepCompareEffect);

export interface ISearchProps
  extends Omit<
    FRProps,
    'form' | 'onFinish' | 'className' | 'style' | 'schema'
  > {
  /** Search for the className of the outermost container of the header */
  className: string;

  /** The style of the outermost container of the search header */
  style: CSSProperties;

  /** Is it hidden? */
  hidden: boolean;

  /** Size */
  size: 'small' | undefined;

  /** Whether to display the query/refresh button, or pass the Button parameter*/
  searchButton: boolean | ButtonProps;

  /** Whether to automatically request data after mounting is completed*/
  searchOnMount: boolean;

  /** Whether to automatically request data after form items change, or specify which fields to automatically request when they change*/
  searchOnChange: boolean | string[];

  /** Request method, please try to use the only universal method*/
  api: (params: {
    // schema: ISearchProps['schema'];
    // dimensions: ISearchProps['dimensions'];
    // indicators: ISearchProps['indicators'];
    filters: ObjectFilters;
    // orders: ObjectOrders;
  }) => DataSource | Promise<DataSource>;

  /** Form filter items*/
  schema: FRProps['schema'];

  /** Dimensions */
  // dimensions: string[];

  /** Indicator */
  // indicators: string[];

  /** Fixed filter items */
  filters: ObjectFilters;

  /** Fixed sorting items */
  // orders: ObjectOrders;
}

const EMPTY_SCHEMA: ISearchProps['schema'] = {
  type: 'object',
  properties: {},
};

const Search: FC<Partial<ISearchProps>> = props => {
  const propsRef = useRef(props);
  propsRef.current = props;
  const {
    className,
    style,
    api,
    schema = EMPTY_SCHEMA,
    filters = {},
    searchButton = true,
    searchOnMount = true,
    searchOnChange = false,
    size,
    watch,
    hidden = false,
    ...restProps
  } = props;

  const loading = useChart(state => state.loading);
  const setChart = useChart(state => state.setChart);

  const form = useForm();

  const refresh = useCallback(async () => {
    setChart({ loading: true });
    try {
      const dataSource = await propsRef.current.api?.({
        filters: { ...propsRef.current.filters, ...form.getValues() },
      });
      setChart({ dataSource });
    } catch { }
    setChart({ loading: false });
  }, []);

  useMemo(() => setChart({ form, refresh }), []);

  useDeepCompareUpdateEffect(() => {
    refresh();
  }, [filters]);

  return (
    <div
      style={{ display: hidden ? 'none' : undefined, ...style }}
      className={classNames('cr-search', className, {
        'cr-search-hidden': !Object.keys(schema.properties || {}).length,
        'cr-search-small': size === 'small',
      })}
      onKeyDown={event => event.key === 'Enter' && form.submit()}
    >
      <FormRender
        displayType="row"
        size={size}
        form={form}
        schema={schema || EMPTY_SCHEMA}
        onFinish={(_: any, errors: any) => !errors.length && refresh()}
        onMount={searchOnMount && !searchOnChange ? form.submit : undefined}
        watch={{
          ...watch,
          ...Object.fromEntries(
            (Array.isArray(searchOnChange)
                ? searchOnChange
                : searchOnChange
                  ? ['#']
                  : []
            ).map(key => [key, refresh!])
          ),
        }}
        {...restProps}
      />

      {searchButton && (
        <Button
          className="cr-search-button"
          icon={<SyncOutlined />}
          onClick={form.submit}
          loading={loading}
          size={size}
          {...(typeof searchButton === 'object' ? searchButton : {})}
        />
      )}
    </div>
  );
};

export default memo(Search);
