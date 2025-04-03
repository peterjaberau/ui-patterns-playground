import { ToolbarActionConfig } from "@/types";
import omit from 'lodash.omit';

export type Setting = ToolbarActionConfig['columnsSettingValue'];


/**
 * Fix a column
 */
export const fixItem: (setting: Setting, fixKey: string) => Setting = (setting, fixKey) => {
  return setting.map(i => {
    if (i.key === fixKey) {
      const { onFirstPart, preFixed, nextFixed, isFirstOne, isLastOne, index } = getStatus(setting, i.key);
      let fixed;

      if (preFixed && !nextFixed && !isLastOne) {
        fixed = setting[index - 1].fixed
      } else if (!preFixed && nextFixed && !isFirstOne) {
        fixed = setting[index + 1].fixed
      } else if (onFirstPart) {
        fixed = 'left'
      } else {
        fixed = 'right';
      }

      return {
        ...i,
        fixed,
      }
    }
    return i;
  })
}


/**
 * Unpin columns that should not be pinned
 *
 * @param setting The setting array after sorting or fixing
 * @returns newSetting new setting array
 */
export const cancelFixed: (setting: Setting) => Setting = (setting) => {
  return setting.map((i) => {
    if (i.fixed) {
      const { haveBackwardUnFixed, haveForwardUnFixed, isFirstOne, isLastOne } = getStatus(setting, i.key);

      if (haveForwardUnFixed && haveBackwardUnFixed && !isLastOne && !isFirstOne) {
        return omit(i, 'fixed');
      }
    }
    return i;
  })
}


/**
 * Get the position status of the current item
 */
export const getStatus = (setting: Setting, key: string) => {
  const length = setting.length;
  const index = setting.findIndex(i => i.key === key);
  const isFixed = !!setting[index].fixed;
  const isFirstOne = index === 0;
  const isLastOne = index === length - 1;
  const preFixed = !isFirstOne && !!setting[index - 1]?.fixed;
  const nextFixed = !isLastOne && !!setting[index + 1]?.fixed;
  const haveForwardUnFixed = setting.slice(0, index).some(i => !i.fixed);
  const haveBackwardUnFixed = setting.slice(index).some(i => !i.fixed);
  const onFirstPart = index + 1 < (length / 2);

  return {
    index,
    /** The current item is fixed */
    isFixed,
    /** is the first */
    isFirstOne,
    /** is the last one*/
    isLastOne,
    /** The previous one is fixed*/
    preFixed,
    /** The latter one is fixed*/
    nextFixed,
    /** There is an unfixed one in front*/
    haveForwardUnFixed,
    /** There is an unfixed content behind */
    haveBackwardUnFixed,
    /** In the first half*/
    onFirstPart,
  }
}
