import type { CommonNodeType, ValueSelector } from '@workflow/types';

export type DocExtractorNodeType = CommonNodeType & {
  variable_selector: ValueSelector;
  is_array_file: boolean;
};
