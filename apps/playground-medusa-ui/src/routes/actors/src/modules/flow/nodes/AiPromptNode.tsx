import { Handle, NodeProps, Position } from 'reactflow';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from '@xstate/react';
import { GlobalStateContext } from '../../../context/GlobalStateContext';
import { TrashIcon } from '@heroicons/react/24/solid';
import { TextArea } from './fields';
import { Button } from '../../../components/ui/button';

const nodesSelector = (state: any) => state.context.nodes;

const customIdSelector = (state: any) => state.context.customId;
const outgoingNodesSelector = (state: any) => state.context.outgoingNodes;
const incomingNodesSelector = (state: any) => state.context.incomingNodes;
const tomlSelector = (state: any) => state.context.toml;
const isConnectingSelector = (state: any) => state.context.isConnecting;
const testModeSelector = (state: any) => state.matches('testModeLoading') || state.matches('testMode');

const promptSelector = (state: any) => state.context.prompt;

const isIdleSelector = (state: any) => {
  return state.matches('idle');
};
const isRunningSelector = (state: any) => {
  return state.matches('running');
};
const isSuccessSelector = (state: any) => {
  return state.matches('success');
};
const isErrorSelector = (state: any) => {
  return state.matches('error');
};

type AiPromptNodeProps = NodeProps & {
  useDefaultHandles?: boolean;
  children?: React.ReactNode;
};

export const AiPromptNode = ({ id, data, useDefaultHandles = true, children }: AiPromptNodeProps) => {
  const { machine, deletable, numNodes } = data;

  const isIdle = useSelector(machine, isIdleSelector);
  const isRunning = useSelector(machine, isRunningSelector);
  const isSuccess = useSelector(machine, isSuccessSelector);
  const isError = useSelector(machine, isErrorSelector);

  const outgoingNodeIds = useSelector(machine, outgoingNodesSelector);
  const incomingNodeIds = useSelector(machine, incomingNodesSelector);

  const prompt = useSelector(machine, promptSelector);

  const globalServices = useContext(GlobalStateContext);
  const nodesFromMachine = useSelector(globalServices.workspaceService, nodesSelector);

  const toml = useSelector(globalServices.workspaceService, tomlSelector);

  const isConnecting = useSelector(globalServices.workspaceService, isConnectingSelector);

  const testMode = useSelector(globalServices.workspaceService, testModeSelector);

  const reactFlowInstanceSelector = (state: any) => state.context.reactFlowInstance;

  const getNodeById = (nodeId: string) => nodesFromMachine.ai.find((node: any) => node.ref.id === nodeId);

  const handleDeleteNode = () => {
    globalServices.workspaceService.send('DELETE_NODE', {
      nodeId: machine.id,
    });
  };

  const handleSubmit = () => {
    machine.send('PROCESS_PROMPT', { toml });
  };

  return (
    <div className="relative isolate overflow-visible">
      {/* width divisible by grid snap size */}
      <div className="bg-background ring-accent/60 relative flex w-[300px] cursor-default flex-col items-center justify-center rounded-lg p-1 shadow-lg ring">
        {isIdle && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="bg-gradient-conic from-secondary-light via-secondary via-secondary-dark via-secondary to-secondary-light absolute h-[2000px] w-[2000px] animate-spin"></div>
          </div>
        )}
        {isRunning && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="bg-gradient-conic from-background to-secondary absolute h-[2000px] w-[2000px] animate-spin"></div>
          </div>
        )}
        {isSuccess && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="bg-gradient-conic from-success-light via-success via-success-dark via-success to-success-light absolute h-[2000px] w-[2000px] animate-spin"></div>
          </div>
        )}
        {isError && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="bg-gradient-conic from-error-light via-error via-error-dark via-error to-error-light absolute h-[2000px] w-[2000px] animate-spin"></div>
          </div>
        )}
        <div className="bg-background relative z-10 h-full w-full rounded-md p-3">
          <div className="bg-gradient-radial-top dark:from-foreground/[.06] from-foreground/[.15] to-transarent absolute inset-0 rounded-md" />
          <div className="bg-gradient-radial-bottom dark:from-foreground/[.06] from-foreground/[.15] absolute inset-0 rounded-md to-transparent" />
          <div className="bg-noise absolute inset-0 rounded-md opacity-20 invert dark:invert-0" />
          <Button
            onClick={handleDeleteNode}
            variant="outline"
            className="hover:bg-foreground group absolute right-[38px] top-[14px] z-30 h-6 w-6 rounded-full p-0 transition-colors"
          >
            <TrashIcon className="group-hover:stroke-background h-4 w-4" />
            <span className="sr-only">Delete node</span>
          </Button>
          <div className="custom-drag-handle absolute right-2 top-2 z-30 flex h-10 w-6 cursor-grab items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" height="28" viewBox="0 0 24 24" width="28">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
          <div className="relative flex flex-col gap-2">
            <p className="text-xl font-bold">AI Wizard</p>
            <TextArea
              textAreaClassName="h-60"
              placeholder={`What would you like this task to do?\n\ne.g. now parse the payload and extract the 'price' value. The format from the previous task response is { data: [{ price: 125.43 }]}
              `}
              value={prompt}
              onChange={(newValue) => machine.send('SET_PROMPT', { value: newValue })}
            />
            <Button onClick={handleSubmit}>Generate</Button>
          </div>
        </div>
        {useDefaultHandles && (
          <>
            <Handle
              id={`${id}-top`}
              type="target"
              position={Position.Top}
              className="!bg-foreground !border-background !-top-3 z-30 !h-6 !w-6 !border-2"
            />
            <Handle
              id={`${id}-bottom`}
              type="source"
              position={Position.Bottom}
              className="!bg-foreground !border-background shadow-widget !-bottom-3 z-30 !h-6 !w-6 !border-2"
            />
          </>
        )}
      </div>
    </div>
  );
};
