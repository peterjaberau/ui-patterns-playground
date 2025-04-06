'use client';
import { Space } from 'antd';
import React from 'react';
import './index.css';
import TextEllipsis from './TextEllipsis';

const showSwitchNode = ({ data, index }: any) => {
  const { type, value } = data;
  if (!type && !value) {
    return <div style={{ minHeight: '40px' }}></div>;
  }

  return (
    <Space style={{ width: '100%' }} direction="vertical" className="switch-custom-node">
      {type && (
        <div className="condition-label">
          <div style={{ fontWeight: 600, minWidth: '70px' }}>Condition type:</div>
          <TextEllipsis text={type} />
        </div>
      )}
      {value && (
        <div className="condition-label">
          <div style={{ fontWeight: 600, minWidth: '70px' }}>Conditional statement: </div>
          <TextEllipsis text={value} />
        </div>
      )}
    </Space>
  );
};

export default showSwitchNode;
