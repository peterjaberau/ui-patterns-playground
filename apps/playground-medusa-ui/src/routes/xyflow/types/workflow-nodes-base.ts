import type { VarType } from './index';

export enum ErrorHandleTypeEnum {
  none = 'none',
  failBranch = 'fail-branch',
  defaultValue = 'default-value',
}

export type DefaultValueForm = {
  key: string;
  type: VarType;
  value?: any;
};

export type WorkflowRetryConfig = {
  max_retries: number;
  retry_interval: number;
  retry_enabled: boolean;
};
