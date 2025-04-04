import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { BezierEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from '@xyflow/react';
import { memo, useContext, useState, FunctionComponent } from 'react';
import { shallow } from 'zustand/shallow';
import { useFlow, useStore, uuid, uuid4 } from '@/.';
import { ConfigContext } from '../../models/context';
import NodeSelectPopover from '../NodesPopover';
import './index.css';

const CustomEdge: FunctionComponent = (edge: any): any => {
  const { id, sourceX, sourceY, targetX, targetY, source, target, sourceHandleId } = edge;

  const reactflow = useReactFlow();
  const [isHovered, setIsHovered] = useState(false);
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const { globalConfig, settingMap, readOnly }: any = useContext(ConfigContext);
  const hideEdgeAddBtn = globalConfig?.edge?.hideEdgeAddBtn ?? false;
  const hideEdgeDelBtn = globalConfig?.edge?.hideEdgeDelBtn ?? false;
  const deletable = globalConfig?.edge?.deletable ?? true;

  const { addEdges, mousePosition, onEdgesChange, layout }: any = useStore(
    (state: any) => ({
      layout: state.layout,
      nodes: state.nodes,
      edges: state.edges,
      mousePosition: state.mousePosition,
      addEdges: state.addEdges,
      onEdgesChange: state.onEdgesChange,
    }),
    shallow,
  );
  const { addNodes } = useFlow();

  const handleAddNode = (data: any) => {
    const { screenToFlowPosition } = reactflow;
    const { x, y } = screenToFlowPosition({
      x: mousePosition.pageX,
      y: mousePosition.pageY,
    });

    const targetId = uuid();
    const title = settingMap[data?._nodeType]?.title || data?._nodeType;

    const newNodes = {
      id: targetId,
      type: 'custom',
      data: {
        title: `${title}_${uuid4()}`,
        ...data,
      },
      position: { x, y },
    };

    const newEdges = [
      {
        id: uuid(),
        source,
        target: targetId,
        deletable: deletable,
        ...(sourceHandleId && { sourceHandle: sourceHandleId }),
      },
      {
        id: uuid(),
        source: targetId,
        deletable: deletable,
        target,
      },
    ];

    addNodes(newNodes as any);
    addEdges(newEdges);
    onEdgesChange([{ id, type: 'remove' }]);
  };

  let edgeExtra: any = {
    sourceX: edge.sourceX - 15,
    targetX: edge.targetX + 15,
  };
  if (layout === 'TB') {
    edgeExtra = {
      sourceY: edge.sourceY - 15,
      targetY: edge.targetY + 13,
    };
  }

  return (
    <g onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <BezierEdge
        {...edge}
        {...edgeExtra}
        edgePath={edgePath}
        label={
          isHovered ? (
            <>
              <EdgeLabelRenderer>
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    pointerEvents: 'all',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                  }}
                >
                  <div
                    style={{ width: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    {!hideEdgeDelBtn && !readOnly && (
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#296dff',
                          visibility: 'visible',
                        }}
                        onClick={() => {
                          if (readOnly) {
                            return;
                          }
                          onEdgesChange([{ id, type: 'remove' }]);
                        }}
                      >
                        <CloseOutlined style={{ color: '#fff', fontSize: 10 }} />
                      </div>
                    )}
                    {!hideEdgeAddBtn && !readOnly && (
                      <NodeSelectPopover placement="right" addNode={handleAddNode}>
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#296dff',
                            visibility: 'visible',
                          }}
                        >
                          <PlusOutlined style={{ color: '#fff', fontSize: 10 }} />
                        </div>
                      </NodeSelectPopover>
                    )}
                  </div>
                </div>
              </EdgeLabelRenderer>
            </>
          ) : (
            (null as any)
          )
        }
      />
    </g>
  );
};

export default memo(CustomEdge);
