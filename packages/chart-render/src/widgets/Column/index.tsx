import {
  Bar as AntBar,
  Column as AntColumn,
  ColumnConfig,
} from '@ant-design/plots';
import React, { memo } from 'react';
import { DataSource } from '../../utils/type';
import { useChart } from '../../utils/store';
import { splitMeta } from '../../utils';
import ChartContainer from '../../components/ChartContainer';

export interface IColumnProps extends Omit<Partial<ColumnConfig>, 'data'> {
  /** Whether to invert, after inversion, the column chart will appear as a bar chart*/
  inverted?: boolean;
}

export function generateConfig(
  meta: DataSource['meta'],
  data: DataSource['data']
): ColumnConfig {
  const { metaDim, metaInd } = splitMeta(meta);

  if (metaInd.length >= 1 && metaDim.length === 0) {
    // case 1: N indicators, 0 dimensions => indicator name as x-axis, indicator value as y-axis
    const xField = 'type';
    const yField = 'value';
    return {
      xField,
      yField,
      data: data
        .map(item => {
          return metaInd.map(({ id, name }) => {
            return {
              [xField]: id,
              [yField]: item[id],
            };
          });
        })
        .flat(),
      meta: {
        [xField]: {
          formatter: label =>
            meta.find(({ id }) => label === id)?.name || label,
        },
      },
      tooltip: {
        // @ts-ignore
        formatter: ({ [xField]: type, [yField]: value }) => ({
          name: meta.find(({ id }) => type === id)?.name as string,
          value,
        }),
      },
    };
  } else if (metaInd.length === 1 && metaDim.length === 1) {
    // case 2: single indicator, single dimension => dimension as x-axis, indicator as y-axis
    const xField = metaDim.shift()?.id as string;
    const yField = metaInd.shift()?.id as string;
    return {
      data,
      xField,
      yField,
      meta: {
        [yField]: { alias: meta.find(({ id }) => id === yField)?.name },
      },
    };
  } else if (metaInd.length > 1 && metaDim.length === 1) {
    // case 3: multiple indicators, single dimension => dimension as x-axis, indicator name as series, indicator value as y-axis
    const xField = metaDim.shift()?.id as string;
    const yField = 'value';
    const seriesField = 'type';
    return {
      data: data
        .map(item => {
          return metaInd.map(({ id, name }) => {
            return {
              [xField]: item[xField],
              [yField]: item[id],
              [seriesField]: name,
            };
          });
        })
        .flat(),
      xField,
      yField,
      seriesField,
      isGroup: true,
    };
  } else if (metaInd.length === 1 && metaDim.length === 2) {
    // case 3: single indicator, dual dimensions
    return {
      data,
      xField: metaDim.shift()?.id as string,
      yField: metaInd.shift()?.id as string,
      seriesField: metaDim.shift()?.id,
      isGroup: true,
    };
  }
  return { data, xField: '', yField: '' };
}

const Column: React.FC<IColumnProps> = ({
                                          className,
                                          style,
                                          inverted,
                                          ...props
                                        }) => {
  const loading = useChart(state => state.loading);
  const { meta = [], data = [] } = useChart(state => state.dataSource) || {};
  const { xField, yField, ...otherConfig } = generateConfig(meta, data);

  return (
    <ChartContainer className={className} style={style}>
      {inverted ? (
        <AntBar
          loading={loading}
          xField={yField || ''}
          yField={xField || ''}
          {...otherConfig}
          {...props}
        />
      ) : (
        <AntColumn
          loading={loading}
          xField={xField || ''}
          yField={yField || ''}
          {...otherConfig}
          {...props}
        />
      )}
    </ChartContainer>
  );
};

export default memo(Column);
