import '@xyflow/react/dist/style.css';
import '../assets/styles/index.css';
// import '../assets/styles/workflow.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  OnConnect,
  OnConnectStart,
  OnConnectEnd,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
  ReactFlowProvider,
} from '@xyflow/react';
import DevTools from './tools/dev-tools';

import { nodes as initialNodes, edges as initialEdges } from '../helpers/datasets';

import { nodeTypesMapping, edgeTypesMapping } from '../helpers/mapping';

const nodeClassName = (node: any) => node.type;

const WorkflowComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypesMapping}
      edgeTypes={edgeTypesMapping}
      style={{ backgroundColor: '#F7F9FB' }}
      proOptions={{ hideAttribution: true }}
    >
      <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      <DevTools />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <WorkflowComponent />
  </ReactFlowProvider>
);
