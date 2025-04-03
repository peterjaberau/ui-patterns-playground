import React from 'react';
import { Image } from 'antd';
import { combineClass } from '../utils/common';
import './index.less';

/**
 *
 * Image component
 */
export default (props: any) => {
  const { data, className, style, images, preview = false, addons, ...imageProps } = props;

  let src = data;
  if (images) {
    src = images[data] || images.default;
  }

  return (
    <Image
      className={combineClass('dv-image', className)}
      style={style}
      src={src}
      preview={preview}
      {...imageProps}
    />
  );
}
