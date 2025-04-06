import '@xyflow/react/dist/style.css';
import '../assets/styles/index.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
  ReactFlowProvider,
} from '@xyflow/react';

import { nodes as initialNodes, edges as initialEdges, config } from '../helpers/datasets';

import { nodeTypesMapping, edgeTypesMapping } from '../helpers/mapping';
import DevTools from './tools/dev-tools';

let id = 1;
const getId = () => `${id++}`;

const nodeClassName = (node: any) => node.type;

const Workflow = ({ id }: any) => {
  const [reactFlowBackgroundColor, setReactFlowBackgroundColor] = useState(config.ReactFlow.style.backgroundColor);

  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      proOptions={{ hideAttribution: true }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypesMapping}
      edgeTypes={edgeTypesMapping}
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
    <Workflow />
  </ReactFlowProvider>
);
