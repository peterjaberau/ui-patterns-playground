import { useTranslation } from 'react-i18next';
import { RiCloseLine } from '@remixicon/react';
import AddCondition from './add-condition';
import ConditionList from './condition-list';
import type { MetadataShape } from '@workflow/nodes/knowledge-retrieval/types';

type MetadataPanelProps = {
  onCancel: () => void;
} & MetadataShape;
const MetadataPanel = ({
  metadataFilteringConditions,
  metadataList,
  onCancel,
  handleAddCondition,
  ...restProps
}: MetadataPanelProps) => {
  const { t } = useTranslation();

  return (
    <div className="border-components-panel-border bg-components-panel-bg w-[420px] rounded-2xl border-[0.5px] shadow-2xl">
      <div className="relative px-3 pt-3.5">
        <div className="system-xl-semibold text-text-primary">
          {t('workflow.nodes.knowledgeRetrieval.metadata.panel.title')}
        </div>
        <div
          className="absolute bottom-0 right-2.5 flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={onCancel}
        >
          <RiCloseLine className="text-text-tertiary h-4 w-4" />
        </div>
      </div>
      <div className="px-1 py-2">
        <div className="px-3 py-1">
          <div className="pb-2">
            <ConditionList
              metadataList={metadataList}
              metadataFilteringConditions={metadataFilteringConditions}
              {...restProps}
            />
          </div>
          <AddCondition metadataList={metadataList} handleAddCondition={handleAddCondition} />
        </div>
      </div>
    </div>
  );
};

export default MetadataPanel;
