export enum InputVarType {
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

export enum SupportUploadFileTypes {
  image = 'image',
  document = 'document',
  audio = 'audio',
  video = 'video',
  custom = 'custom',
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

export enum CodeLanguage {
  python3 = 'python3',
  javascript = 'javascript',
  json = 'json',
}

export enum TransferMethod {
  all = 'all',
  local_file = 'local_file',
  remote_url = 'remote_url',
}

export type FileEntity = {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  transferMethod: TransferMethod;
  supportFileType: string;
  originalFile?: File;
  uploadedId?: string;
  base64Url?: string;
  url?: string;
  isRemote?: boolean;
};

export const FILE_EXTS: Record<string, string[]> = {
  [SupportUploadFileTypes.image]: ['JPG', 'JPEG', 'PNG', 'GIF', 'WEBP', 'SVG'],
  [SupportUploadFileTypes.document]: [
    'TXT',
    'MD',
    'MDX',
    'MARKDOWN',
    'PDF',
    'HTML',
    'XLSX',
    'XLS',
    'DOC',
    'DOCX',
    'CSV',
    'EML',
    'MSG',
    'PPTX',
    'PPT',
    'XML',
    'EPUB',
  ],
  [SupportUploadFileTypes.audio]: ['MP3', 'M4A', 'WAV', 'WEBM', 'AMR', 'MPGA'],
  [SupportUploadFileTypes.video]: ['MP4', 'MOV', 'MPEG', 'MPGA'],
};

export type UploadFileSetting = {
  allowed_file_upload_methods: TransferMethod[];
  allowed_file_types: SupportUploadFileTypes[];
  allowed_file_extensions?: string[];
  max_length: number;
  number_limits?: number;
};

export type ValueSelector = string[]; // [nodeId, key | obj key path]

export type InputVar = {
  type: InputVarType;
  label:
    | string
    | {
        nodeType: BlockEnum;
        nodeName: string;
        variable: string;
        isChatVar?: boolean;
      };
  variable: string;
  max_length?: number;
  default?: string;
  required: boolean;
  hint?: string;
  options?: string[];
  value_selector?: ValueSelector;
} & Partial<UploadFileSetting>;
