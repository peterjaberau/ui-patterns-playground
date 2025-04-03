import React, { useState, FC } from 'react';
import { Collapse } from 'antd';
import { combineClass } from '../../utils/common';
import { DownOutlined } from '@ant-design/icons';
import './index.css';

const { Panel } = Collapse;
interface IProps {
  className?: any;
  style?: object;
  children: any;
  title?: string;
  header?: any;
  defaultExpand?: boolean;
}

/**
 * Collapse Panel
 */
const BaseCollapse: FC<IProps> = (props) => {
  const { className, style, children, title, header, defaultExpand = true } = props;

  const [activeKey, setActiveKey] = useState<string>(defaultExpand ? 'single' : '');

  const collapseHeader = (
    <>
      {title && <div className="collapse-title">{title}</div>}
      {header && header}
    </>
  );

  const renderExpandIcon = ({ isActive }: any): JSX.Element => {
    return (
      <div className="expand-icon-box">
        <DownOutlined rotate={isActive ? 180 : 0} />
        <span className="expand-icon-desc">{isActive ? 'Collapse' : 'Expand'}</span>
      </div>
    );
  };

  return (
    <Collapse
      className={combineClass('dr-collapse', className)}
      style={style}
      ghost={true}
      activeKey={[activeKey]}
      expandIcon={renderExpandIcon}
      onChange={() => setActiveKey(activeKey ? '' : 'single')}
    >
      <Panel key="single" header={collapseHeader}>
        {children}
      </Panel>
    </Collapse>
  );
};

export default BaseCollapse;
