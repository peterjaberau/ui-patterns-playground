export enum TabsEnum {
  Blocks = 'blocks',
  Tools = 'tools',
}

export enum ToolTypeEnum {
  All = 'all',
  BuiltIn = 'built-in',
  Custom = 'custom',
  Workflow = 'workflow',
}

export enum BlockClassificationEnum {
  Default = '-',
  QuestionUnderstand = 'question-understand',
  Logic = 'logic',
  Transform = 'transform',
  Utilities = 'utilities',
}

export enum ChatVarTypeEnum {
  Number = 'number',
  String = 'string',
  Object = 'object',
  ArrayString = 'array[string]',
  ArrayNumber = 'array[number]',
  ArrayObject = 'array[object]',
}

export enum VarTypeEnum {
  variable = 'variable',
  constant = 'constant',
  mixed = 'mixed',
}

export enum TypeEnum {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  object = 'object',
  array = 'array',
}

export enum ArrayTypeEnum {
  string = 'array[string]',
  number = 'array[number]',
  boolean = 'array[boolean]',
  object = 'array[object]',
}

export enum ErrorHandleTypeEnum {
  none = 'none',
  failBranch = 'fail-branch',
  defaultValue = 'default-value',
}

export enum BlockEnum {
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

export enum ControlModeEnum {
  Pointer = 'pointer',
  Hand = 'hand',
}
export enum ErrorHandleModeEnum {
  Terminated = 'terminated',
  ContinueOnError = 'continue-on-error',
  RemoveAbnormalOutput = 'remove-abnormal-output',
}

export enum InputVarTypeEnum {
  textInput = 'text-input',
  paragraph = 'paragraph',
  select = 'select',
  number = 'number',
  url = 'url',
  files = 'files',
  json = 'json', // obj, array
  contexts = 'contexts', // knowledge retrieval
  iterator = 'iterator', // iteration input
  singleFile = 'file',
  multiFiles = 'file-list',
  loop = 'loop', // loop input
}

export enum PromptRoleEnum {
  system = 'system',
  user = 'user',
  assistant = 'assistant',
}

export enum EditionTypeEnum {
  basic = 'basic',
  jinja2 = 'jinja2',
}

export enum VarTypeEnum {
  string = 'string',
  number = 'number',
  secret = 'secret',
  boolean = 'boolean',
  object = 'object',
  file = 'file',
  array = 'array',
  arrayString = 'array[string]',
  arrayNumber = 'array[number]',
  arrayObject = 'array[object]',
  arrayFile = 'array[file]',
  any = 'any',
}

export enum ValueTypeEnum {
  variable = 'variable',
  constant = 'constant',
}

export enum WorkflowRunningStatusEnum {
  Waiting = 'waiting',
  Running = 'running',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Stopped = 'stopped',
}

export enum WorkflowVersionEnum {
  Draft = 'draft',
  Latest = 'latest',
}

export enum NodeRunningStatusEnum {
  NotStart = 'not-start',
  Waiting = 'waiting',
  Running = 'running',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Exception = 'exception',
  Retry = 'retry',
}

export enum ChangeTypeEnum {
  changeVarName = 'changeVarName',
  remove = 'remove',
}

export enum SupportUploadFileTypesEnum {
  image = 'image',
  document = 'document',
  audio = 'audio',
  video = 'video',
  custom = 'custom',
}

export enum WorkflowVersionFilterOptionsEnum {
  all = 'all',
  onlyYours = 'onlyYours',
}

export enum VersionHistoryContextMenuOptionsEnum {
  restore = 'restore',
  edit = 'edit',
  delete = 'delete',
}

export enum nodeTypesEnum {
  CUSTOM_NODE = 'custom',
  CUSTOM_ANNOTATION_NODE = 'annotation',
  CUSTOM_TOOLS_NODE = 'tools',
  CUSTOM_RESIZER_NODE = 'resizer',
  CUSTOM_CIRCLE_NODE = 'circle',
  CUSTOM_TEXTINPUT_NODE = 'textinput',
}

export enum edgeTypesEnum {
  CUSTOM_EDGE = 'custom',
  CUSTOM_BUTTON_EDGE = 'button',
}
