import type { ComponentType } from "react";
import { BlockEnum } from "../types";
import StartNode from "./start/node";
import EndNode from "./end/node";
import AnswerNode from "./answer/node";
import LLMNode from "./llm/node";
import KnowledgeRetrievalNode from "./knowledge-retrieval/node";
import QuestionClassifierNode from "./question-classifier/node";
import IfElseNode from "./if-else/node";
import CodeNode from "./code/node";
import TemplateTransformNode from "./template-transform/node";
import HttpNode from "./http/node";
import ToolNode from "./tool/node";
import VariableAssignerNode from "./variable-assigner/node";
import AssignerNode from "./assigner/node";
import ParameterExtractorNode from "./parameter-extractor/node";
import IterationNode from "./iteration/node";
import DocExtractorNode from "./document-extractor/node";
import ListFilterNode from "./list-operator/node";
import AgentNode from "./agent/node";
import { TransferMethod } from "@/types/app";

export const NodeComponentMap: Record<string, ComponentType<any>> = {
  [BlockEnum.Start]: StartNode,
  [BlockEnum.End]: EndNode,
  [BlockEnum.Answer]: AnswerNode,
  [BlockEnum.LLM]: LLMNode,
  [BlockEnum.KnowledgeRetrieval]: KnowledgeRetrievalNode,
  [BlockEnum.QuestionClassifier]: QuestionClassifierNode,
  [BlockEnum.IfElse]: IfElseNode,
  [BlockEnum.Code]: CodeNode,
  [BlockEnum.TemplateTransform]: TemplateTransformNode,
  [BlockEnum.HttpRequest]: HttpNode,
  [BlockEnum.Tool]: ToolNode,
  [BlockEnum.VariableAssigner]: VariableAssignerNode,
  [BlockEnum.Assigner]: AssignerNode,
  [BlockEnum.VariableAggregator]: VariableAssignerNode,
  [BlockEnum.ParameterExtractor]: ParameterExtractorNode,
  [BlockEnum.Iteration]: IterationNode,
  [BlockEnum.DocExtractor]: DocExtractorNode,
  [BlockEnum.ListFilter]: ListFilterNode,
  [BlockEnum.Agent]: AgentNode,
};

export const CUSTOM_NODE_TYPE = "custom";

export const FILE_TYPE_OPTIONS = [
  { value: "image", i18nKey: "image" },
  { value: "document", i18nKey: "doc" },
  { value: "audio", i18nKey: "audio" },
  { value: "video", i18nKey: "video" },
];

export const TRANSFER_METHOD = [
  { value: TransferMethod.local_file, i18nKey: "localUpload" },
  { value: TransferMethod.remote_url, i18nKey: "url" },
];

export const SUB_VARIABLES = ["type", "size", "name", "url", "extension", "mime_type", "transfer_method", "related_id"];
export const OUTPUT_FILE_SUB_VARIABLES = SUB_VARIABLES.filter((key) => key !== "transfer_method");
