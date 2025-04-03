import React from 'react';
import { combineClass } from '../utils/common';
import FText from '../FText';

import './index.css';

const FLabel = (props: any) => {
  const { colon = true, label, className, style, labelStyle, contentStyle, ...otherProps } = props;

  return (
    <div className={combineClass('dr-label', className)} style={style}>
      <span className="label" style={labelStyle}>
        {label}
        {colon && '：'}
      </span>
      <span className="content" style={contentStyle}>
        <FText {...otherProps} useType="internal" />
      </span>
    </div>
  );
};

export default FLabel;
