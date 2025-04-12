"use client";

import type { FC } from "react";
import { memo, useEffect, useMemo, useRef } from "react";
import { setAutoFreeze } from "immer";
import { useEventListener } from "ahooks";
import ReactFlow, {
  Background,
  ReactFlowProvider,
  SelectionMode,
  useEdgesState,
  useNodesState,
  useOnViewportChange,
  useReactFlow,
  useStoreApi,
} from "reactflow";
import type { Viewport } from "reactflow";
import "reactflow/dist/style.css";
import "./style.css";
import type { Edge, Node } from "./types";
import { ControlMode } from "./types";
import { WorkflowContextProvider } from "./context";
import {
  useDSL,
  useEdgesInteractions,
  useNodesInteractions,
  useNodesReadOnly,
  useNodesSyncDraft,
  usePanelInteractions,
  useSelectionInteractions,
  useShortcuts,
  useWorkflow,
  useWorkflowInit,
  useWorkflowReadOnly,
} from "./hooks";
import CustomNode from "./nodes";
import CustomNoteNode from "./note-node";
import { CUSTOM_NOTE_NODE } from "./note-node/constants";
import CustomIterationStartNode from "./nodes/iteration-start";
import { CUSTOM_ITERATION_START_NODE } from "./nodes/iteration-start/constants";
import CustomLoopStartNode from "./nodes/loop-start";
import { CUSTOM_LOOP_START_NODE } from "./nodes/loop-start/constants";
import CustomSimpleNode from "./simple-node";
import { CUSTOM_SIMPLE_NODE } from "./simple-node/constants";
import Operator from "./operator";
import CustomEdge from "./custom-edge";
import CustomConnectionLine from "./custom-connection-line";
import HelpLine from "./help-line";
import CandidateNode from "./candidate-node";
import NodeContextmenu from "./node-contextmenu";
import { useStore, useWorkflowStore } from "./store";
import { initialEdges, initialNodes } from "./utils";
import { CUSTOM_EDGE, CUSTOM_NODE, ITERATION_CHILDREN_Z_INDEX, WORKFLOW_DATA_UPDATE } from "./constants";
import { WorkflowHistoryProvider } from "./workflow-history-store";
import Loading from "@/app/components/base/loading";
import { useEventEmitterContextContext } from "@/context/event-emitter";

const nodeTypes = {
  [CUSTOM_NODE]: CustomNode,
  [CUSTOM_NOTE_NODE]: CustomNoteNode,
  [CUSTOM_SIMPLE_NODE]: CustomSimpleNode,
  [CUSTOM_ITERATION_START_NODE]: CustomIterationStartNode,
  [CUSTOM_LOOP_START_NODE]: CustomLoopStartNode,
};
const edgeTypes = {
  [CUSTOM_EDGE]: CustomEdge,
};

type WorkflowProps = {
  nodes: Node[];
  edges: Edge[];
  viewport?: Viewport;
};
const Workflow: FC<WorkflowProps> = memo(({ nodes: originalNodes, edges: originalEdges, viewport }) => {
  const workflowContainerRef = useRef<HTMLDivElement>(null);
  const workflowStore = useWorkflowStore();
  const reactflow = useReactFlow();
  const [nodes, setNodes] = useNodesState(originalNodes);
  const [edges, setEdges] = useEdgesState(originalEdges);
  const controlMode = useStore((s: any) => s.controlMode);
  const nodeAnimation = useStore((s: any) => s.nodeAnimation);

  const { setSyncWorkflowDraftHash } = workflowStore.getState();
  const { handleSyncWorkflowDraft, syncWorkflowDraftWhenPageClose } = useNodesSyncDraft();
  const { workflowReadOnly } = useWorkflowReadOnly();
  const { nodesReadOnly } = useNodesReadOnly();

  const { eventEmitter } = useEventEmitterContextContext();

  eventEmitter?.useSubscription((v: any) => {
    if (v.type === WORKFLOW_DATA_UPDATE) {
      setNodes(v.payload.nodes);
      setEdges(v.payload.edges);

      if (v.payload.viewport) reactflow.setViewport(v.payload.viewport);

      if (v.payload.hash) setSyncWorkflowDraftHash(v.payload.hash);
    }
  });

  useEffect(() => {
    setAutoFreeze(false);

    return () => {
      setAutoFreeze(true);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleSyncWorkflowDraft(true, true);
    };
  }, []);

  useEventListener("keydown", (e) => {
    if ((e.key === "d" || e.key === "D") && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === "y" || e.key === "Y") && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === "s" || e.key === "S") && (e.ctrlKey || e.metaKey)) e.preventDefault();
  });
  useEventListener("mousemove", (e) => {
    const containerClientRect = workflowContainerRef.current?.getBoundingClientRect();

    if (containerClientRect) {
      workflowStore.setState({
        mousePosition: {
          pageX: e.clientX,
          pageY: e.clientY,
          elementX: e.clientX - containerClientRect.left,
          elementY: e.clientY - containerClientRect.top,
        },
      });
    }
  });

  const {
    handleNodeDragStart,
    handleNodeDrag,
    handleNodeDragStop,
    handleNodeEnter,
    handleNodeLeave,
    handleNodeClick,
    handleNodeConnect,
    handleNodeConnectStart,
    handleNodeConnectEnd,
    handleNodeContextMenu,
    handleHistoryBack,
    handleHistoryForward,
  } = useNodesInteractions();
  const { handleEdgeEnter, handleEdgeLeave, handleEdgesChange } = useEdgesInteractions();
  const { handleSelectionStart, handleSelectionChange, handleSelectionDrag } = useSelectionInteractions();
  const { handlePaneContextMenu, handlePaneContextmenuCancel } = usePanelInteractions();
  const { isValidConnection } = useWorkflow();

  useOnViewportChange({
    onEnd: () => {
      handleSyncWorkflowDraft();
    },
  });

  useShortcuts();

  const store = useStoreApi();
  if (process.env.NODE_ENV === "development") {
    store.getState().onError = (code, message) => {
      if (code === "002") return;
      console.warn(message);
    };
  }

  return (
    <div
      id="workflow-container"
      className={`
        relative h-full w-full min-w-[960px]
        ${workflowReadOnly && "workflow-panel-animation"}
        ${nodeAnimation && "workflow-node-animation"}
      `}
      ref={workflowContainerRef}
    >
      <CandidateNode />
      <Operator handleRedo={handleHistoryForward} handleUndo={handleHistoryBack} />
      <NodeContextmenu />
      <HelpLine />
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodeDragStart={handleNodeDragStart}
        onNodeDrag={handleNodeDrag}
        onNodeDragStop={handleNodeDragStop}
        onNodeMouseEnter={handleNodeEnter}
        onNodeMouseLeave={handleNodeLeave}
        onNodeClick={handleNodeClick}
        onNodeContextMenu={handleNodeContextMenu}
        onConnect={handleNodeConnect}
        onConnectStart={handleNodeConnectStart}
        onConnectEnd={handleNodeConnectEnd}
        onEdgeMouseEnter={handleEdgeEnter}
        onEdgeMouseLeave={handleEdgeLeave}
        onEdgesChange={handleEdgesChange}
        onSelectionStart={handleSelectionStart}
        onSelectionChange={handleSelectionChange}
        onSelectionDrag={handleSelectionDrag}
        onPaneContextMenu={handlePaneContextMenu}
        connectionLineComponent={CustomConnectionLine}
        // TODO: For LOOP node, how to distinguish between ITERATION and LOOP here? Maybe both are the same?
        connectionLineContainerStyle={{ zIndex: ITERATION_CHILDREN_Z_INDEX }}
        defaultViewport={viewport}
        multiSelectionKeyCode={null}
        deleteKeyCode={null}
        nodesDraggable={!nodesReadOnly}
        nodesConnectable={!nodesReadOnly}
        nodesFocusable={!nodesReadOnly}
        edgesFocusable={!nodesReadOnly}
        panOnDrag={controlMode === ControlMode.Hand && !workflowReadOnly}
        zoomOnPinch={!workflowReadOnly}
        zoomOnScroll={!workflowReadOnly}
        zoomOnDoubleClick={!workflowReadOnly}
        isValidConnection={isValidConnection}
        selectionKeyCode={null}
        selectionMode={SelectionMode.Partial}
        selectionOnDrag={controlMode === ControlMode.Pointer && !workflowReadOnly}
        minZoom={0.25}
      >
        <Background
          gap={[14, 14]}
          size={2}
          className="bg-workflow-canvas-workflow-bg"
          color="var(--color-workflow-canvas-workflow-dot-color)"
        />
      </ReactFlow>
    </div>
  );
});
Workflow.displayName = "Workflow";

const WorkflowWrap = memo(() => {
  const { data, isLoading } = useWorkflowInit();

  const nodesData = useMemo(() => {
    if (data) return initialNodes(data.graph.nodes, data.graph.edges);

    return [];
  }, [data]);
  const edgesData = useMemo(() => {
    if (data) return initialEdges(data.graph.edges, data.graph.nodes);

    return [];
  }, [data]);

  if (!data || isLoading) {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <ReactFlowProvider>
      <WorkflowHistoryProvider nodes={nodesData} edges={edgesData}>
        <Workflow nodes={nodesData} edges={edgesData} viewport={data?.graph.viewport} />
      </WorkflowHistoryProvider>
    </ReactFlowProvider>
  );
});
WorkflowWrap.displayName = "WorkflowWrap";

const WorkflowContainer = () => {
  return (
    <WorkflowContextProvider>
      <WorkflowWrap />
    </WorkflowContextProvider>
  );
};

export default memo(WorkflowContainer);
