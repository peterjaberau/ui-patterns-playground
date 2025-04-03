import { Button, Space } from 'antd';
import React from 'react';

export const Tools = () => {
  return (
    <Space className="tools">
      <Button size="small" className="tools-btn">
        Preview
      </Button>
      <Button size="small" className="tools-btn">
        Save
      </Button>
      <Button type="primary" size="small" className="tools-btn">
        Publish now
      </Button>
    </Space>
  );
};
