import '@xyflow/react/dist/style.css';
import './styles/index.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  OnConnect,
  OnConnectStart,
  OnConnectEnd,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
} from '@xyflow/react';

import { nodes as initialNodes, edges as initialEdges, config } from './data';

import { nodeTypesMapping, edgeTypesMapping } from './mapping';
import DevTools from '../DevTools/DevTools';

let id = 1;
const getId = () => `${id++}`;

const nodeClassName = (node: any) => node.type;

const OverviewFlow = () => {
  const [reactFlowBackgroundColor, setReactFlowBackgroundColor] = useState(config.ReactFlow.style.backgroundColor);

  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    // prepare node to be connected on drop
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd: OnConnectEnd = useCallback(
    // add node on Connect
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = (event.target as Partial<Element> | null)?.classList?.contains('react-flow__pane');

      if (targetIsPane && 'clientX' in event && 'clientY' in event) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode: Node = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        const newEdge: Edge = {
          id,
          source: connectingNodeId.current,
          target: id,
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat(newEdge));
      }
    },
    [screenToFlowPosition],
  );

  useEffect(() => {
    const onChange = (event: any) => {
      // to update the custom-node-color-1 node itself
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== 'custom-node-color-1') {
            return node;
          }
          const color = event.target.value;
          setReactFlowBackgroundColor(color);
          return {
            ...node,
            data: {
              ...node.data,
              color,
              onChange,
            },
          };
        }),
      );
    };
  }, []);

  return (
    <ReactFlow
      proOptions={{ hideAttribution: true }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      fitView
      nodeTypes={nodeTypesMapping}
      edgeTypes={edgeTypesMapping}
      style={{ backgroundColor: reactFlowBackgroundColor }}
      // attributionPosition="top-right"
      // style={{ backgroundColor: '#F7F9FB' }}
    >
      <MiniMap
        zoomable
        pannable
        nodeClassName={nodeClassName}
        nodeStrokeColor={(n: any): any => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'colorselector') return reactFlowBackgroundColor;
          if (n.type === 'output') return '#ff0072';
        }}
        nodeColor={(n) => {
          if (n.type === 'selectorNode') return reactFlowBackgroundColor;
          return '#fff';
        }}
      />
      <DevTools />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <OverviewFlow />
  </ReactFlowProvider>
);
