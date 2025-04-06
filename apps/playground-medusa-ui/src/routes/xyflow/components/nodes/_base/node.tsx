import { FC, ReactElement } from 'react';
import { NodeProps } from '../../../types';

type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({ id, data, children }: any) => {
  return <div>{children}</div>;
};
