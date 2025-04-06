import { AuthHeaderPrefixEnum, AuthTypeEnum } from '../helpers/constants/auth.constants';

export type CredentialType = {
  auth_type: AuthTypeEnum;
  api_key_header?: string;
  api_key_value?: string;
  api_key_header_prefix?: AuthHeaderPrefixEnum;
};
