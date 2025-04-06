import { CollectionTypeEnum, ResolutionEnum } from '../helpers/constants/app.constants';
import { EmojiType } from './common.type';

export type CollectionType = {
  id: string;
  name: string;
  author: string;
  description: any;
  icon: string | any;
  label: any;
  type: CollectionTypeEnum;
  team_credentials: Record<string, any>;
  is_team_authorization: boolean;
  allow_delete: boolean;
  labels: string[];
  plugin_id?: string;
  letter?: string;
};

export type ToolParameterType = {
  name: string;
  label: any;
  human_description: any;
  type: string;
  form: string;
  llm_description: string;
  required: boolean;
  default: string;
  options?: {
    label: any;
    value: string;
  }[];
  min?: number;
  max?: number;
};

// Action
export type ToolType = {
  name: string;
  author: string;
  label: any;
  description: any;
  parameters: ToolParameterType[];
  labels: string[];
  output_schema: Record<string, any>;
};

export type ToolCredentialType = {
  name: string;
  label: any;
  help: any | null;
  placeholder: any;
  type: string;
  required: boolean;
  default: string;
  options?: {
    label: any;
    value: string;
  }[];
};

export type CustomCollectionBackendType = {
  provider: string;
  original_provider?: string;
  credentials: Credential;
  icon: EmojiType;
  schema_type: string;
  schema: string;
  privacy_policy: string;
  custom_disclaimer: string;
  tools?: ParamItem[];
  id: string;
  labels: string[];
};

export type ParamItem = {
  name: string;
  label: any;
  human_description: any;
  llm_description: string;
  type: string;
  form: string;
  required: boolean;
  default: string;
  min?: number;
  max?: number;
  options?: {
    label: any;
    value: string;
  }[];
};

export type CustomParamSchema = {
  operation_id: string; // name
  summary: string;
  server_url: string;
  method: string;
  parameters: ParamItem[];
};

export type WorkflowToolProviderParameter = {
  name: string;
  form: string;
  description: string;
  required?: boolean;
  type?: string;
};

export type WorkflowToolProviderRequest = {
  name: string;
  icon: EmojiType;
  description: string;
  parameters: WorkflowToolProviderParameter[];
  labels: string[];
  privacy_policy: string;
};

export type WorkflowToolProviderResponse = {
  workflow_app_id: string;
  workflow_tool_id: string;
  label: string;
  name: string;
  icon: EmojiType;
  description: string;
  synced: boolean;
  tool: {
    author: string;
    name: string;
    label: any;
    description: any;
    labels: string[];
    parameters: ParamItem[];
  };
  privacy_policy: string;
};
