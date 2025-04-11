export const workflowGlossary = {
  nodeCustomTypes: ['custom', 'custom-note', 'custom-simple', 'custom-iteration-start', 'custom-loop-start'],
  nodeBlockNames: [
    'start',
    'end',
    'answer',
    'llm',
    'knowledge-retrieval',
    'question-classifier',
    'if-else',
    'code',
    'template-transform',
    'http-request',
    'variable-assigner',
    'variable-aggregator',
    'tool',
    'parameter-extractor',
    'iteration',
    'document-extractor',
    'list-operator',
    'iteration-start',
    'assigner',
    'agent',
    'loop',
    'loop-start',
    'loop-end',
  ],
  edgeCustomTypes: ['custom'],
  canvasControlModes: ['pointer', 'hand'],
  workflowRuntimeStatus: ['waiting', 'running', 'succeeded', 'failed', 'stopped'],
  nodeRuntimeStatus: ['not-started', 'waiting', 'running', 'succeeded', 'failed', 'exception', 'retry'],
  workflowVersions: ['draft', 'latest'],
};

export enum CanvasControlModeEnum {
  Pointer = 'pointer',
  Hand = 'hand',
}

export enum NodeCustomTypeEnum {
  CUSTOM_NODE = 'custom',
  CUSTOM_NOTE_NODE = 'custom-note',
  CUSTOM_SIMPLE_NODE = 'custom-simple',
  CUSTOM_ITERATION_START_NODE = 'custom-iteration-start',
  CUSTOM_LOOP_START_NODE = 'custom-loop-start',
}

export enum NodeBlockEnum {
  Start = 'start',
  End = 'end',
  Answer = 'answer',
  LLM = 'llm',
  KnowledgeRetrieval = 'knowledge-retrieval',
  QuestionClassifier = 'question-classifier',
  IfElse = 'if-else',
  Code = 'code',
  TemplateTransform = 'template-transform',
  HttpRequest = 'http-request',
  VariableAssigner = 'variable-assigner',
  VariableAggregator = 'variable-aggregator',
  Tool = 'tool',
  ParameterExtractor = 'parameter-extractor',
  Iteration = 'iteration',
  DocExtractor = 'document-extractor',
  ListFilter = 'list-operator',
  IterationStart = 'iteration-start',
  Assigner = 'assigner', // is now named as VariableAssigner
  Agent = 'agent',
  Loop = 'loop',
  LoopStart = 'loop-start',
  LoopEnd = 'loop-end',
}

export enum NodeErrorHandleModeEnum {
  Terminated = 'terminated',
  ContinueOnError = 'continue-on-error',
  RemoveAbnormalOutput = 'remove-abnormal-output',
}

export enum WorkflowRunningStatusEnum {
  Waiting = 'waiting',
  Running = 'running',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Stopped = 'stopped',
}
