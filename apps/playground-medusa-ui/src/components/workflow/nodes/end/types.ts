import type { CommonNodeType, Variable } from '@workflow/types';

export type EndNodeType = CommonNodeType & {
  outputs: Variable[];
};
