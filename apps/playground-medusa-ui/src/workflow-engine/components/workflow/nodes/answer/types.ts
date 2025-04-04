import type { CommonNodeType, Variable } from '@workflow/types';

export type AnswerNodeType = CommonNodeType & {
  variables: Variable[];
  answer: string;
};
