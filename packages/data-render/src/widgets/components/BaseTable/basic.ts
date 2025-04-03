import { get } from 'lodash-es';

// columnObj recursive convenience
const recursionColumn = (result: any, columnObj: any, columnConfig?: any, extraParams?: any) => {
  for (const key of Object.keys(columnObj)) {
    const item = columnObj[key];
    let column: any = {
      key,
      align: 'center',
      dataIndex: key,
      ...columnConfig,
    };

    //Configure item string type
    if (typeof item === 'string') {
      column['title'] = item;
      result.push(column);
      continue;
    }

    // There is a header merge
    if (item.column) {
      column = {
        title: item.title,
        children: [],
      };
      recursionColumn(column.children, item.column, columnConfig, extraParams);
    } else {
      // Normal situation
      column = {
        ...column,
        ...item,
      };
    }

    if (column.title.children) {
      const { fRender } = extraParams || {};
      column.title = fRender({ name: item.title.name }, column.title.children);
    }

    result.push(column);
  }
};

// Generate columns data
export const getColumns = (columnObj: any, columnConfig?: any, extraParams?: any) => {
  const result: any = [];
  // Recursion, format conversion
  recursionColumn(result, columnObj, columnConfig, extraParams);
  return result;
};

// Generate dataSource data
export const getDataSource = (
  columnObj: object,
  dataList: any[] = [],
  extra: { key?: string; that?: any } = {},
) => {
  const dataSource: any[] = [];
  const { key, that } = extra;

  const dealData = (column: any) => {
    for (const code in column) {
      const item = column[code];

      // There is a merged column header
      if (item.column) {
        dealData(item.column);
        continue;
      }

      (dataList || []).forEach((data, index) => {
        let dataItem = dataSource[index];

        if (!dataItem) {
          dataItem = { ...data, key: `${key ? data[key] : index}` };
          dataSource.push(dataItem);
        }

        if (code.includes('x-operate')) {
          dataItem[code] = { ...data, that, dataIndex: index };
        } else {
          dataItem[code] = get(data, code, '');
        }
      });
    }
  };

  // Recursive traversal, mapping data
  dealData(columnObj);
  return dataSource;
};

// Merge table data
export const combineDataSource = (data: any[], field: any) => {
  let count = 0; // first item of duplicates
  let index = 1; // next item
  while (index < data.length) {
    const item = data.slice(count, count + 1)[0]; // Get the first object without comparison
    if (!item.rowSpan) {
      item.rowSpan = 1; // initialize to 1
    }
    if (item[field] === data[index][field]) {
      // When comparing the first object with the following objects, if there are identical items, they are accumulated and the following identical items are set to 0
      item.rowSpan++;
      data[index].rowSpan = 0;
    } else {
      count = index;
    }
    index++;
  }
};
