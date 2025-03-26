'use client';

import { EuiSkeletonRectangle } from '@elastic/eui';
import clsx from 'clsx';

export const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <>
    <EuiSkeletonRectangle isLoading={isLoading} width="100%" height={200} />
  </>
);
