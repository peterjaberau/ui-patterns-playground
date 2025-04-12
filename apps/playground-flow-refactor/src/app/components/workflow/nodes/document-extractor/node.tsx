import type { FC } from "react";
import React from "react";
import { useNodes } from "reactflow";
import { useTranslation } from "react-i18next";
import type { DocExtractorNodeType } from "./types";
import { BlockEnum, type Node, type NodeProps } from "@/app/components/workflow/types";

const i18nPrefix = "workflow.nodes.docExtractor";

const NodeComponent: FC<NodeProps<DocExtractorNodeType>> = ({ data }) => {
  const { t } = useTranslation();

  const nodes: Node[] = useNodes();
  const { variable_selector: variable } = data;

  if (!variable || variable.length === 0) return null;

  return (
    <div className="relative px-3">
      <div className="system-2xs-medium-uppercase mb-1 text-text-tertiary">{t(`${i18nPrefix}.inputVar`)}</div>
    </div>
  );
};

export default React.memo(NodeComponent);
