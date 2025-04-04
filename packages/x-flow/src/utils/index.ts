import { customAlphabet } from 'nanoid';
import tinycolor from 'tinycolor2';
export const uuid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16);
export const uuid4 = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 4);

import {
  has as _has,
  cloneDeep,
  get,
  isMatch,
  isNil,
  isUndefined,
  merge,
  mergeWith,
  omitBy,
  set,
  some,
} from 'lodash-es';

const _set = set;
const _get = get;
const _cloneDeep = cloneDeep;
// export const _has = has;
const _merge = merge;
const _mergeWith = mergeWith;
const _isUndefined = isUndefined;
const _omitBy = omitBy;
const _some = some;
const _isMatch = isMatch;

const isObject = (data: any) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf('Object') > -1;
};

const isArray = (data: any) => {
  const str = Object.prototype.toString.call(data);
  return str.indexOf('Array') > -1;
};

const isFunction = (data: any) => typeof data === 'function';

function isUrl(string: string) {
  const protocolRE = /^(?:\w+:)?\/\/(\S+)$/;
  // const domainRE = /^[^\s\.]+\.\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

const isNumber = (str: string | number) => !isNaN(Number(str));

const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

// TODO: to support case that item is not an object
function isObjType(schema: any) {
  //return schema?.type === 'object' && schema.properties && !schema.widget;
  return schema?.type === 'object' && schema?.properties && schema?.widgetType !== 'field';
}

function isListType(schema: any) {
  return schema?.type === 'array' && isObjType(schema?.items) && schema?.enum === undefined;
}

function isCheckBoxType(schema: any, readOnly: boolean) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

const translation = (configCtx: any) => (key: string) => {
  const locale: any = configCtx?.locale.FormRender;
  return locale[key];
};

const hasFuncProperty = (obj: any) => {
  return _some(obj, (value) => {
    if (isFunction(value)) {
      return true;
    }
    if (isObject(value)) {
      return hasFuncProperty(value);
    }
    return false;
  });
};

/**
 * Safely get the value of an object, if the value is null or undefined, return defaultValue.
 *
 * @param {Object} object - The object to get the value of.
 * @param {string|Array} path - The path to get, which can be a string or an array.
 * @param {*} [defaultValue] - If value is null or undefined, returns defaultValue.
 * @returns {*} - Returns the retrieved value, or a default value.
 */
const safeGet = (object: any, path: string, defaultValue: any) => {
  return get(object, path, defaultValue) ?? defaultValue;
};

const isMac = () => {
  return navigator.userAgent.toUpperCase().includes('MAC');
};

const specialKeysNameMap: Record<string, string | undefined> = {
  ctrl: '⌘',
  all: '⌥',
};

const getKeyboardKeyNameBySystem = (key: string) => {
  if (isMac()) return specialKeysNameMap[key] || key;

  return key;
};

const capitalize = (string: string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return string;
  }
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

const transformNodes = (nodes: any[]) => {
  return nodes?.map((item) => {
    const { type, data, ...rest } = item;
    if (type === 'custom') {
      return item;
    }

    if (type === 'Switch' || type === 'Parallel') {
      return {
        type: 'custom',
        data: {
          ...data,
          _nodeType: type,
          ...(data?.list?.length && {
            list: (data?.list || [])?.map((n) => {
              if (n?._id) {
                return n;
              } else {
                return { ...n, _id: `id_${uuid()}` };
              }
            }),
          }),
        },
        ...rest,
      };
    } else {
      return {
        type: 'custom',
        data: {
          ...data,
          _nodeType: type,
        },
        ...rest,
      };
    }
  });
};

const transformSwitchNodes = (nodes: any[]) => {
  return (nodes || [])?.map((item) => {
    if (item?.type === 'Switch' || item?.type === 'Parallel') {
      const { list, ...rest } = item?.data;
      return {
        ...item,
        data: {
          ...rest,
          list: (list || [])?.map((item) => {
            if (item?._id) {
              return item;
            } else {
              return { ...item, _id: `id_${uuid()}` };
            }
          }),
        },
      };
    } else {
      return item;
    }
  });
};

// Deprecated:
// export const getAntdVersion = () => {
//   const majorVersion = parseInt(antdVersion?.split('.')?.[0], 10);
//   if (majorVersion >= 5) {
//     return 'V5';
//   } else if (majorVersion === 4) {
// return 'V4';
//   } else {
// return 'V4';
//   }
// };

// Safe JSON.stringify
export function safeJsonStringify(obj: Object) {
  const seen = new WeakSet();

  function replacer(key, value) {
    // Circular reference
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]';
      }
      seen.add(value);
    }

    // React
    if (value && typeof value === 'object' && value._owner) {
      return '[React Element]';
    }

    // BigInt
    if (typeof value === 'bigint') {
      return value.toString();
    }

    // Other types that cannot be serialized
    if (typeof value === 'function') {
      return `[Function: ${value.name || 'anonymous'}]`;
    }

    return value;
  }

  try {
    return JSON.stringify(obj, replacer, 2);
  } catch (error) {
    console.error('json.stringify error', error);
    return null;
  }
}

export * from './flow';

//Built-in node status
export const NODE_STATUS = {
  success: {
    color: '#52c41a',
    name: 'Success',
  },
  error: {
    color: '#ff4d4f',
    name: 'Failed',
  },
  warning: {
    color: '#faad14',
    name: 'Alarm',
  },
};

export const transformNodeStatus = (statusList = []) => {
  const obj: Record<string, any> = {};
  statusList?.forEach((status: { name: string; color: string; value: string }) => {
    if (isTruthy(status?.value) && status?.color)
      obj[status.value] = {
        color: status.color,
        name: status?.name,
      };
  });

  return {
    ...NODE_STATUS,
    ...obj,
  };
};

// Process the color value
export function getTransparentColor(colorInput: string, alpha: number) {
  const color = tinycolor(colorInput);
  const alphaNum = Number(alpha);
  if (!color.isValid()) {
    return;
  }
  color.setAlpha(alphaNum);
  // Returns a color string in RGBA format
  return color.toRgbString();
}

export function isTruthy(value: any) {
  if (isNil(value)) {
    return false;
  }

  if (isNumber(value) && value === 0) {
    return true;
  }
  return Boolean(value);
}

export {
  isObject,
  isArray,
  isFunction,
  isUrl,
  isNumber,
  getArray,
  getFormat,
  isObjType,
  isListType,
  isCheckBoxType,
  translation,
  hasFuncProperty,
  safeGet,
  isMac,
  getKeyboardKeyNameBySystem,
  capitalize,
  transformNodes,
  transformSwitchNodes,
  _set,
  _get,
  _cloneDeep,
  _has,
  _merge,
  _mergeWith,
  _isUndefined,
  _omitBy,
  _some,
  _isMatch,
};
