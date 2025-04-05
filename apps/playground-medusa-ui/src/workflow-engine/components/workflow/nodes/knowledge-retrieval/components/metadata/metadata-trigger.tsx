import { useEffect, useState } from 'react';

import { RiFilter3Line } from '@remixicon/react';
import MetadataPanel from './metadata-panel';
import Button from '@base/button';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import type { MetadataShape } from '@workflow/nodes/knowledge-retrieval/types';

const MetadataTrigger = ({
  metadataFilteringConditions,
  metadataList = [],
  handleRemoveCondition,
  selectedDatasetsLoaded,
  ...restProps
}: MetadataShape) => {
  const [open, setOpen] = useState(false);
  const conditions = metadataFilteringConditions?.conditions || [];

  useEffect(() => {
    if (selectedDatasetsLoaded) {
      conditions.forEach((condition) => {
        if (!metadataList.find((metadata) => metadata.name === condition.name)) handleRemoveCondition(condition.id);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metadataList, handleRemoveCondition, selectedDatasetsLoaded]);

  return (
    <PortalToFollowElem placement="left" offset={4} open={open} onOpenChange={setOpen}>
      <PortalToFollowElemTrigger onClick={() => setOpen(!open)}>
        <Button variant="secondary-accent" size="small">
          <RiFilter3Line className="mr-1 h-3.5 w-3.5" />
          {t('workflow.nodes.knowledgeRetrieval.metadata.panel.conditions')}
          <div className="system-2xs-medium-uppercase border-divider-deep text-text-tertiary ml-1 flex items-center rounded-[5px] border px-1">
            {metadataFilteringConditions?.conditions.length || 0}
          </div>
        </Button>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-10">
        <MetadataPanel
          metadataFilteringConditions={metadataFilteringConditions}
          onCancel={() => setOpen(false)}
          metadataList={metadataList}
          handleRemoveCondition={handleRemoveCondition}
          {...restProps}
        />
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default MetadataTrigger;
