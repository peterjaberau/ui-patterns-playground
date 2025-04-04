import React, { memo } from 'react';
import { Handle, useStore, Position } from '@xyflow/react';

export default memo(({ id }: any) => {
  const label = useStore((s) => {
    const node: any = s.nodeLookup.get(id);

    if (!node) {
      return null;
    }

    return `Position x:${parseInt(node.position.x)} y:${parseInt(node.position.y)}`;
  });

  return (
    <div>
      <div>{label || 'no node connected'}</div>
      <Handle type="target" position={Position.Left} className="custom-handle" />
    </div>
  );
});
