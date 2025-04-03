import React from 'react';
import 'src/widgets/Group/index.css';

const prefix = 'frm-widget-group';

export default (props: any) => {
  const { children, title } = props;

  return (
    <div className={prefix}>
      <div className={`${prefix}-title`}>{title}</div>
      {children}
    </div>
  );
};
