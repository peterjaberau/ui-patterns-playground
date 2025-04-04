import type { CommonNodeType, InputVar } from '@workflow/types';

export type StartNodeType = CommonNodeType & {
  variables: InputVar[];
};
