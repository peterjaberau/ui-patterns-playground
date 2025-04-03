import React from 'react';
import Encryption from '../components/Encryption';

/**
 *
 * Encryption components
 */
const FEncryption = (props: any) => {
  const { data, method, addons, ...otherProps } = props;

  const sourceData = addons.getSourceData();
  const parentData = addons.getParentData();
  const dataKey = addons.dataKey;
  const encryInfo: any = sourceData?.encryInfo || {};

  let showKey = (method?.showKey ?? '') + dataKey;
  if (method?.extraShowKey) {
    showKey = parentData[dataKey + method.extraShowKey];
  }

  const conent = encryInfo[showKey] || '';

  const handleClick = async (ev: any) => {
    // Pass the external method to implement the button click event
    let funcName = 'getEncryInfo'; // Use this method by default
    if (typeof method === 'string') {
      funcName = method;
    }
    if (method?.name) {
      funcName = method.name;
    }

    const func = addons.getMethod(funcName);
    func({ dataKey, method, data: parentData }, ev);
  };

  return (
    <Encryption
      label={conent ? null : data}
      data={conent}
      onClick={handleClick}
      {...otherProps}
      iconFontUrl={addons.getConfig().iconFontUrl}
    />
  );
};

export default FEncryption;
