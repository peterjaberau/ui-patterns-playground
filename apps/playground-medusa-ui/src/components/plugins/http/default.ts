import { AuthorizationType, BodyType, Method } from './types';
import type { BodyPayload, HttpNodeType } from './types';

export type PluginDefault<T> = {
  defaultValue: Partial<T>;
  checkValid: (payload: T, t: any, moreDataForCheckValid?: any) => { isValid: boolean; errorMessage?: string };
};

const pluginDefault: PluginDefault<HttpNodeType> = {
  defaultValue: {
    variables: [],
    method: Method.get,
    url: '',
    authorization: {
      type: AuthorizationType.none,
      config: null,
    },
    headers: '',
    params: '',
    body: {
      type: BodyType.none,
      data: [],
    },
    timeout: {
      max_connect_timeout: 0,
      max_read_timeout: 0,
      max_write_timeout: 0,
    },
    retry_config: {
      retry_enabled: true,
      max_retries: 3,
      retry_interval: 100,
    },
  },
  checkValid(payload: HttpNodeType, t: any) {
    let errorMessages = '';

    if (!errorMessages && !payload.url) errorMessages = 'API is required';

    if (
      !errorMessages &&
      payload.body.type === BodyType.binary &&
      (!(payload.body.data as BodyPayload)[0]?.file || (payload.body.data as BodyPayload)[0]?.file?.length === 0)
    )
      errorMessages = 'Binary File Variable is required';

    return {
      isValid: !errorMessages,
      errorMessage: errorMessages,
    };
  },
};

export default pluginDefault;
