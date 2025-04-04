import { ActionMenu } from '@/components/common/action-menu';
import OverviewFlow from '@/routes/xyflow/components/general';
import { PencilSquare, Trash } from '@medusajs/icons';
import { HttpTypes } from '@medusajs/types';
import { Button } from '@medusajs/ui';
import { Container, Heading, Text } from '@medusajs/ui';
import { useSelector } from '@xstate/react';
import Link from 'next/link';

type FlowProps = {
  flow: any;
};

export const XyflowGeneral = ({ flow }: FlowProps) => {
  const handleAction = () => {};

  const { id, props }: any = flow;

  return (
    <>
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <Heading>{'General Flow ' + id}</Heading>
        </div>

        <div className="flex h-[800px] justify-center p-4">
          <OverviewFlow />
        </div>
      </Container>
    </>
  );
};
