import { NodeRunningStatusEnum } from '@/routes/xyflow/helpers/constants/workflow.constants';
import { memo, useCallback, useMemo, useState } from 'react';
import { intersection } from 'lodash-es';
import type { EdgeProps } from '@xyflow/react';
import { BaseEdge, EdgeLabelRenderer, Position, getBezierPath } from '@xyflow/react';
import { getEdgeColor } from '../../helpers/utils';
import CustomEdgeLinearGradientRender from './custom-edge-linear-gradient-render';
// import {
//   useAvailableBlocks,
//   useNodesInteractions,
// } from './hooks'
// import BlockSelector from './block-selector';
import type { EdgeType, OnSelectBlockType } from '../../types';
// import { NodeRunningStatus } from './types';
// import { getEdgeColor } from './utils';
// import { ITERATION_CHILDREN_Z_INDEX, LOOP_CHILDREN_Z_INDEX } from './constants';
// import CustomEdgeLinearGradientRender from './custom-edge-linear-gradient-render';
// import cn from '@/utils/classnames';
// import { ErrorHandleTypeEnum } from '@/app/components/workflow/nodes/_base/components/error-handle/types';

const CustomEdge = ({
  id,
  data,
  source,
  sourceHandleId,
  target,
  targetHandleId,
  sourceX,
  sourceY,
  targetX,
  targetY,
  selected,
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: sourceX - 8,
    sourceY,
    sourcePosition: Position.Right,
    targetX: targetX + 8,
    targetY,
    targetPosition: Position.Left,
    curvature: 0.16,
  });

  // const [open, setOpen] = useState(false);
  // const { handleNodeAdd } = useNodesInteractions();
  // const { availablePrevBlocks } = useAvailableBlocks(
  //   (data as Edge['data'])!.targetType,
  //   (data as Edge['data'])?.isInIteration,
  //   (data as Edge['data'])?.isInLoop,
  // );
  // const { availableNextBlocks } = useAvailableBlocks(
  //   (data as Edge['data'])!.sourceType,
  //   (data as Edge['data'])?.isInIteration,
  //   (data as Edge['data'])?.isInLoop,
  // );
  // const { _sourceRunningStatus, _targetRunningStatus } = data;

  // const linearGradientId = useMemo(() => {
  //   if (
  //     (_sourceRunningStatus === NodeRunningStatus.Succeeded ||
  //       _sourceRunningStatus === NodeRunningStatus.Failed ||
  //       _sourceRunningStatus === NodeRunningStatus.Exception) &&
  //     (_targetRunningStatus === NodeRunningStatus.Succeeded ||
  //       _targetRunningStatus === NodeRunningStatus.Failed ||
  //       _targetRunningStatus === NodeRunningStatus.Exception ||
  //       _targetRunningStatus === NodeRunningStatus.Running)
  //   )
  //     return id;
  // }, [_sourceRunningStatus, _targetRunningStatus, id]);

  // const handleOpenChange = useCallback((v: boolean) => {
  //   setOpen(v);
  // }, []);

  // const handleInsert = useCallback<OnSelectBlock>(
  //   (nodeType: any, toolDefaultValue: any) => {
  //     handleNodeAdd(
  //       {
  //         nodeType,
  //         toolDefaultValue,
  //       },
  //       {
  //         prevNodeId: source,
  //         prevNodeSourceHandle: sourceHandleId || 'source',
  //         nextNodeId: target,
  //         nextNodeTargetHandle: targetHandleId || 'target',
  //       },
  //     );
  //   },
  //   [handleNodeAdd, source, sourceHandleId, target, targetHandleId],
  // );

  const stroke = useMemo(() => {
    if (selected) return getEdgeColor(NodeRunningStatusEnum.Running);

    // if (linearGradientId) return `url(#${linearGradientId})`;

    if (data?._connectedNodeIsHovering)
      return getEdgeColor(NodeRunningStatusEnum.Running, sourceHandleId === NodeRunningStatusEnum.Failed);

    return getEdgeColor();
  }, [data?._connectedNodeIsHovering, selected, sourceHandleId]);

  return (
    <>
      <CustomEdgeLinearGradientRender
        // id={linearGradientId}
        startColor={getEdgeColor()}
        stopColor={getEdgeColor()}
        position={{
          x1: sourceX,
          y1: sourceY,
          x2: targetX,
          y2: targetY,
        }}
      />
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke,
          strokeWidth: 2,
          opacity: data?._waitingRun ? 0.7 : 1,
        }}
      />
    </>
  );
};

export default memo(CustomEdge);
