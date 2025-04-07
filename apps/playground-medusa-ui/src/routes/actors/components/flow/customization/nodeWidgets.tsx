import { Tag } from '@medusajs/icons';
import { Space, Typography } from 'antd';

export const customNodeWidget = ({ data }: any) => {
  return (
    <div style={{ wordWrap: 'break-word' }}>
      <p>Variable 1: {data?.input}</p>
      <p>Variable 2: {data?.select}</p>
    </div>
  );
};

export const customEndNodeWidget = ({ data }: any) => {
  return <div style={{ wordWrap: 'break-word' }}>{data?.input}</div>;
};

export const customLLMNodeWidget = ({ data }: any) => {
  const labels = Object.keys(data) || [];
  return (
    <Space direction="vertical">
      {labels?.map((item: any) => (
        <Tag color="geekblue">
          {/* @ts-ignore */}
          <Typography.Text style={{ maxWidth: 216 }} ellipsis={true}>
            {data[item]}
          </Typography.Text>
        </Tag>
      ))}
    </Space>
  );
};
