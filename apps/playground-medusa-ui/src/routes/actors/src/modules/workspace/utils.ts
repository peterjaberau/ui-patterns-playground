import { createTaskNodeMachine } from './taskNodeMachine';
import { TASK_TYPE } from './types/nodeTaskType';
import { Nodes } from './types/nodeType';
import { Edges, WorkspaceContext } from './types/workspaceType';
import { ethers } from 'ethers';
import { fromDot, NodeRef } from 'ts-graphviz';
import { spawnChild } from 'xstate';

export const getTaskNodeByCustomId = (context: WorkspaceContext, nodeId: string) =>
  context.nodes.tasks.find((taskNode: any) => taskNode.ref.state.context.customId === nodeId);

export const wrapVariable = (input: string) => `$(${input})`;

export const adjustNewSourceNodeHeightByTypeDefault = (
  initialCoords: { x: number; y: number },
  taskType: TASK_TYPE,
  isForwardConnection: boolean = true,
) => {
  // TODO - Take account of task type
  const taskNodeDefaultHeight = 144;

  return adjustNewSourceNodeHeight(initialCoords, taskNodeDefaultHeight, isForwardConnection);
};

export const adjustNewSourceNodeHeight = (
  initialCoords: { x: number; y: number },
  amount: number,
  isForwardConnection: boolean = true,
) => {
  return {
    x: initialCoords.x,
    y: isForwardConnection ? initialCoords.y : initialCoords.y - amount,
  };
};

export const validateAddress = (input: string) => ethers.isAddress(input);

export const validateJobTypeSpecifics = (jobTypeSpecifics: any, event: any) => {
  const { jobType, prop, value } = event;

  let validatedJobTypeSpecifics = { ...jobTypeSpecifics };

  switch (jobType) {
    case 'cron':
      break;
    case 'directrequest':
      validatedJobTypeSpecifics.directrequest.contractAddress.valid = validateAddress(
        validatedJobTypeSpecifics.directrequest.contractAddress.value,
      );
      validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.valid =
        validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.value !== '' &&
        validatedJobTypeSpecifics.directrequest.minContractPaymentLinkJuels.value >= 0;
      validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.valid =
        validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.value !== '' &&
        validatedJobTypeSpecifics.directrequest.minIncomingConfirmations.value >= 1;
  }

  return validatedJobTypeSpecifics;
};

export const getProvider = (network = '') => {
  const networkToUse = 'homestead';

  return ethers.getDefaultProvider(networkToUse, {
    // TODO: Add more services
    alchemy: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  });
};

export const constructTaskNodesAndEdgesFromObsSrc = (currNodes: Nodes, currEdges: Edges, obsSrc: string) => {
  const input = `digraph {\n${obsSrc}\n}`;
  const parsedObservationSrc = fromDot(input);

  const currNumTaskNodes = currNodes.tasks.length;

  const newNodesWithComputedIds = parsedObservationSrc.nodes.map((node, index) => {
    return {
      ...node,
      computedId: `task_${index + currNumTaskNodes}`,
    };
  });

  const totalNodesMapping = [
    ...currNodes.tasks.map((node: any) => ({
      computedId: node.ref.id,
      id: node.ref.state.context.customId,
    })),
    ...newNodesWithComputedIds.map((newNode) => ({
      computedId: newNode.computedId,
      id: newNode.id,
    })),
  ];

  const currEdgesLen = currEdges.length;

  let edgesSplitIntoSingleLengths: Edges = [];

  parsedObservationSrc.edges.forEach((edge) => {
    const numSplits = edge.targets.length - 1;

    for (let i = 0; i < numSplits; i++) {
      const sourceCustomId: string = (edge.targets[i] as NodeRef).id;
      const targetCustomId: string = (edge.targets[i + 1] as NodeRef).id;
      const sourceWithComputedId = totalNodesMapping.find((entry) => entry.id === sourceCustomId);
      const targetWithComputedId = totalNodesMapping.find((entry) => entry.id === targetCustomId);

      edgesSplitIntoSingleLengths.push({
        id: `edge_${edgesSplitIntoSingleLengths.length + currEdgesLen + 1}`,
        source: sourceWithComputedId ? sourceWithComputedId.computedId : '',
        sourceCustomId: sourceCustomId,
        target: targetWithComputedId ? targetWithComputedId.computedId : '',
        targetCustomId: targetCustomId,
      });
    }
  });

  const nodes = newNodesWithComputedIds.map((node, index) => {
    // @ts-ignore
    const taskSpecificNodeAttrs = node.attributes.values.filter((val) => val[0] !== 'type');

    let nodeContext: any = {
      customId: node.id,
      coords: {
        x: 0, // TODO
        y: 0, // TODO
      },
      // @ts-ignore
      taskType: node.attributes.get('type')?.toString().toUpperCase(),
      incomingNodes: [], // TODO
      outgoingNodes: [], // TODO
      taskSpecific: taskSpecificNodeAttrs.reduce((acc: any, [key, value]) => {
        // @ts-ignore
        acc[key] = { raw: value, rich: value }; // TODO - format the 'rich' prop
        return acc;
      }, {}),
      mock: {
        mockResponseDataInput: '',
        mockResponseData: '',
        enabled: false,
      },
      isValid: true,
    };

    return {
      ref: spawnChild(createTaskNodeMachine(nodeContext), {
        id: node.computedId,
      }),
    };
  });

  return { nodes, edges: edgesSplitIntoSingleLengths };
};

export const getNextUniqueTaskId = (tasks: Array<any>) => {
  const tasksCustomIdsWithDefaultFormat = tasks
    .map((task) => task.ref.state.context.customId)
    .filter((customId) => customId.startsWith('task_'));

  let id = 0;

  while (tasksCustomIdsWithDefaultFormat.includes(`task_${id.toString()}`)) {
    id++;
  }

  return id.toString();
};
