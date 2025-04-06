import '@xyflow/react/dist/style.css';
import './assets/styles/index.css'; //from xyflow
// import './assets/styles/style.css'; //from dify

import type { FC } from 'react';
import { WorkflowContextProvider } from './context';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useSWR from 'swr';
import { setAutoFreeze } from 'immer';

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
import DevTools from './components/tools/dev-tools';

import { nodes as initialNodes, edges as initialEdges } from './helpers/datasets';
import { nodeTypes, edgeTypes } from './helpers/registry';

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
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
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
