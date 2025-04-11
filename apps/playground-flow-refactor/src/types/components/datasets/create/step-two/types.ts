import type {
  CrawlOptions,
  CrawlResultItem,
  CustomFile,
  FullDocumentDetail,
  ParentMode,
  createDocumentResponse,
} from '@/models/datasets';
import { DataSourceProvider } from '@/models/common';
import type { NotionPage } from '@/models/common';
import { ChunkingMode, DataSourceType, ProcessMode } from '@/models/datasets';

type StepTwoProps = {
  isSetting?: boolean;
  documentDetail?: FullDocumentDetail;
  isAPIKeySet: boolean;
  onSetting: () => void;
  datasetId?: string;
  indexingType?: IndexingType;
  retrievalMethod?: string;
  dataSourceType: DataSourceType;
  files: CustomFile[];
  notionPages?: NotionPage[];
  websitePages?: CrawlResultItem[];
  crawlOptions?: CrawlOptions;
  websiteCrawlProvider?: DataSourceProvider;
  websiteCrawlJobId?: string;
  onStepChange?: (delta: number) => void;
  updateIndexingTypeCache?: (type: string) => void;
  updateRetrievalMethodCache?: (method: string) => void;
  updateResultCache?: (res: createDocumentResponse) => void;
  onSave?: () => void;
  onCancel?: () => void;
};

export enum IndexingType {
  QUALIFIED = 'high_quality',
  ECONOMICAL = 'economy',
}

type ParentChildConfig = {
  chunkForContext: ParentMode;
  parent: {
    delimiter: string;
    maxLength: number;
  };
  child: {
    delimiter: string;
    maxLength: number;
  };
};
