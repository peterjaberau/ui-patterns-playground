import { type FC, memo, useMemo } from "react";
import type { NodeProps } from "../../types";
import type { AgentNodeType } from "./types";
import useConfig from "./use-config";
import { useTranslation } from "react-i18next";
import { useRenderI18nObject } from "@/hooks/use-i18n";

const AgentNode: FC<NodeProps<AgentNodeType>> = (props) => {
  const { inputs } = useConfig(props.id, props.data);
  const renderI18nObject = useRenderI18nObject();
  const { t } = useTranslation();

  return <div className="mb-1 space-y-1 px-3 py-1"></div>;
};

AgentNode.displayName = "AgentNode";

export default memo(AgentNode);
