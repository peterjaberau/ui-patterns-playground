import React from 'react';
import classnames from 'classnames';
import 'src/widgets/voidTitle/index.css';

export default ({ schema }) => {
  return (
    <div className={classnames('fr-void-title', { [schema?.className]: !!schema?.className })}>{schema.title}</div>
  );
};
