import type { CommonNodeType, Variable } from '@workflow/types';

export type TemplateTransformNodeType = CommonNodeType & {
  variables: Variable[];
  template: string;
};
