import type { FC } from "react";
import React from "react";
import cn from "classnames";
import type { EndNodeType } from "./types";
import type { NodeProps, Variable } from "@/app/components/workflow/types";
import { useIsChatMode, useWorkflow } from "@/app/components/workflow/hooks";
import { VarBlockIcon } from "@/app/components/workflow/block-icon";
import { Line3 } from "@/app/components/base/icons/src/public/common";
import { Variable02 } from "@/app/components/base/icons/src/vender/solid/development";
import { BubbleX, Env } from "@/app/components/base/icons/src/vender/line/others";
import { BlockEnum } from "@/app/components/workflow/types";

const Node: FC<NodeProps<EndNodeType>> = ({ id, data }) => {
  const { getBeforeNodesInSameBranch } = useWorkflow();
  const availableNodes = getBeforeNodesInSameBranch(id);
  const isChatMode = useIsChatMode();

  const startNode = availableNodes.find((node: any) => {
    return node.data.type === BlockEnum.Start;
  });

  const getNode = (id: string) => {
    return availableNodes.find((node) => node.id === id) || startNode;
  };

  const { outputs } = data;
  const filteredOutputs = (outputs as Variable[]).filter(({ value_selector }) => value_selector.length > 0);

  if (!filteredOutputs.length) return null;

  return (
    <div className="mb-1 space-y-0.5 px-3 py-1">
      {filteredOutputs.map(({ value_selector }, index) => {
        const node = getNode(value_selector[0]);

        return (
          <div
            key={index}
            className="flex h-6 items-center justify-between space-x-1 rounded-md  bg-gray-100 px-1 text-xs font-normal text-gray-700"
          >
            <div className="flex items-center text-xs font-medium text-gray-500">
              <div className="flex items-center text-primary-600"></div>
            </div>
            <div className="text-xs font-normal text-gray-700"></div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Node);
