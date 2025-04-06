import { ToolDefaultValueType } from '@/routes/xyflow/types/workflow.types';
import type { CommonNodeType, Memory, ModelConfig, PromptItem, ValueSelector, Variable, VisionSetting } from './index';
import { EmojiType } from './common.type';
import { CollectionTypeEnum } from '../helpers/constants/app.constants';
import { TypeEnum, ArrayTypeEnum, VarTypeEnum } from '../helpers/constants/workflow.constants';

export type CollectionType = {
  id: string;
  name: string;
  author: string;
  description: any;
  icon: string | EmojiType;
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
  tools?: ParamItemType[];
  id: string;
  labels: string[];
};

export type ParamItemType = {
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

export type CustomParamSchemaType = {
  operation_id: string; // name
  summary: string;
  server_url: string;
  method: string;
  parameters: ParamItemType[];
};

export type WorkflowToolProviderParameterType = {
  name: string;
  form: string;
  description: string;
  required?: boolean;
  type?: string;
};

export type WorkflowToolProviderRequestType = {
  name: string;
  icon: EmojiType;
  description: string;
  parameters: WorkflowToolProviderParameterType[];
  labels: string[];
  privacy_policy: string;
};

export type WorkflowToolProviderResponseType = {
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
    parameters: ParamItemType[];
  };
  privacy_policy: string;
};

export type LLMNodeTypeType = CommonNodeType & {
  model: ModelConfig;
  prompt_template: PromptItem[] | PromptItem;
  prompt_config?: {
    jinja2_variables?: Variable[];
  };
  memory?: Memory;
  context: {
    enabled: boolean;
    variable_selector: ValueSelector;
  };
  vision: {
    enabled: boolean;
    configs?: VisionSetting;
  };
  structured_output_enabled?: boolean;
  structured_output?: StructuredOutputType;
};

export type TypeWithArrayType = TypeEnum | ArrayTypeEnum;

type ArrayItemType = Exclude<TypeEnum, TypeEnum.array>;
export type ArrayItemsType = Omit<FieldType, 'type'> & { type: ArrayItemType };

export type SchemaEnumType = string[] | number[];

export type FieldType = {
  type: TypeEnum;
  properties?: {
    // Object has properties
    [key: string]: FieldType;
  };
  required?: string[]; // Key of required properties in object
  description?: string;
  items?: ArrayItemsType; // Array has items. Define the item type
  enum?: SchemaEnumType; // Enum values
  additionalProperties?: false; // Required in object by api. Just set false
};

export type StructuredOutputType = {
  schema: SchemaRootType;
};

export type SchemaRootType = {
  type: TypeEnum.object;
  properties: Record<string, FieldType>;
  required?: string[];
  additionalProperties: false;
};

export type VarGroupItemType = {
  output_type: VarTypeEnum;
  variables: ValueSelector[];
};
export type VariableAssignerNodeType = CommonNodeType &
  VarGroupItemType & {
    advanced_settings: {
      group_enabled: boolean;
      groups: ({
        group_name: string;
        groupId: string;
      } & VarGroupItemType)[];
    };
  };

export type DefaultValueFormType = {
  key: string;
  type: VarTypeEnum;
  value?: any;
};

export type WorkflowRetryConfigType = {
  max_retries: number;
  retry_interval: number;
  retry_enabled: boolean;
};
