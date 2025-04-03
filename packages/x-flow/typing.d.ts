interface Window {
  publicPath: string;
}

declare module 'form-render' {
  import { FC } from 'react';

  export function useForm(): any;

  const FormRender: FC<any>;
  export default FormRender;
}
