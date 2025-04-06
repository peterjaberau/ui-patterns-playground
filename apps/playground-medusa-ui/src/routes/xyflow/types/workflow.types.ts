import type { CommonNodeType, ValueSelectorType } from './index';

import { VarTypeEnum } from '../helpers/constants/workflow.constants';
import { CollectionTypeEnum } from '../helpers/constants/app.constants';

export type ToolDefaultValueType = {
  provider_id: string;
  provider_type: string;
  provider_name: string;
  tool_name: string;
  tool_label: string;
  title: string;
  is_team_authorization: boolean;
  params: Record<string, any>;
  paramSchemas: Record<string, any>[];
  output_schema: Record<string, any>;
};

export type ToolValueType = {
  provider_name: string;
  tool_name: string;
  tool_label: string;
  settings?: Record<string, any>;
  parameters?: Record<string, any>;
  enabled?: boolean;
  extra?: Record<string, any>;
};

export type HelpLineHorizontalPositionType = {
  top: number;
  left: number;
  width: number;
};

export type HelpLineVerticalPositionType = {
  top: number;
  left: number;
  height: number;
};

export type ToolVarInputsType = Record<
  string,
  {
    type: VarTypeEnum;
    value?: string | ValueSelectorType | any;
  }
>;

export type ToolNodeType = CommonNodeType & {
  provider_id: string;
  provider_type: CollectionTypeEnum;
  provider_name: string;
  tool_name: string;
  tool_label: string;
  tool_parameters: ToolVarInputsType;
  tool_configurations: Record<string, any>;
  output_schema: Record<string, any>;
  paramSchemas?: Record<string, any>[];
};
