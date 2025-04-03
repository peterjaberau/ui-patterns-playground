import React, { useEffect } from 'react';
import { Empty, Button } from 'antd';
import { get } from 'lodash-es';

import { useSet } from '../../utils/hooks';
import { getRequestParams } from '../../utils/common';
import BaseTable from '../BaseTable';

import 'src/widgets/components/RequestTable/index.css';

/**
 *
 * Automatically request data-Table
 */
const RequestTable = (props: any) => {
  const { request, pagination: pageConfig, addons, ...tableProps } = props;

  const [state, setState] = useSet({
    total: 0,
    pageSize: pageConfig?.pageSize || 10,
    dataSource: [],
    error: false,
    loading: false,
  });
  const { pageSize, total, dataSource, error, loading } = state;

  let pagination: any = false;
  if (pageConfig) {
    pagination = {
      ...pageConfig,
      total,
      pageSize,
    };
  }

  useEffect(() => {
    getTableList({ pageSize, current: 1 });
  }, []);

  // Get table data
  const getTableList = async (pagination: any) => {
    const { pageSize, current: pageNo } = pagination;
    const { name, api, params: condition, dataKey, listKey = 'list', totalKey = 'count' } = request;

    const params = {
      pageNo,
      pageSize,
      ...getRequestParams(condition, addons.getSourceData()),
    };

    const requestFunc = addons.getMethod(name || 'request');
    const requestConfig = addons.getRequestConfig();

    setState({ loading: true });
    const res = (await requestFunc(api, params, request)) || {};
    const data = res[dataKey || requestConfig.dataKey];

    if (!data) {
      if (pageNo === 1) {
        setState({ error: true, loading: false });
      }
      return;
    }
    setState({
      dataSource: get(data, listKey, []),
      total: get(data, totalKey, 0),
      error: false,
      loading: false,
    });
  };

  if (error) {
    return (
      <Empty
        image="https://img.alicdn.com/imgextra/i2/O1CN01zkSBPx1w25lRyCZz0_!!6000000006249-55-tps-94-61.svg"
        imageStyle={{
          height: 60,
        }}
        description="Data abnormality!"
      >
        <Button type="primary" onClick={() => getTableList({ pageSize, current: 1 })}>
          Click to query
        </Button>
      </Empty>
    );
  }

  return (
    <BaseTable {...tableProps} data={dataSource} pagination={pagination} onChange={getTableList} loading={loading} />
  );
};

export default RequestTable;
