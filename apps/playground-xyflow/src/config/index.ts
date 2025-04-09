export let apiPrefix = '';
export let publicApiPrefix = '';

// NEXT_PUBLIC_API_PREFIX=/console/api NEXT_PUBLIC_PUBLIC_API_PREFIX=/api npm run start
if (process.env.NEXT_PUBLIC_API_PREFIX && process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX) {
  apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX;
  publicApiPrefix = process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX;
} else if (
  globalThis.document?.body?.getAttribute('data-api-prefix') &&
  globalThis.document?.body?.getAttribute('data-pubic-api-prefix')
) {
  apiPrefix = globalThis.document.body.getAttribute('data-api-prefix') as string;
  publicApiPrefix = globalThis.document.body.getAttribute('data-pubic-api-prefix') as string;
} else {
  apiPrefix = 'http://localhost:4055/console/api';
  publicApiPrefix = 'http://localhost:4055/api';
}

export const API_PREFIX: string = apiPrefix;
export const PUBLIC_API_PREFIX: string = publicApiPrefix;

export const LOCALE_COOKIE_NAME = 'locale';
