import { useState } from 'react';

import { RiArrowDownSLine, RiCheckLine } from '@remixicon/react';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import Button from '@base/button';
import { MetadataFilteringModeEnum } from '@workflow/nodes/knowledge-retrieval/types';

type MetadataFilterSelectorProps = {
  value?: MetadataFilteringModeEnum;
  onSelect: (value: MetadataFilteringModeEnum) => void;
};
const MetadataFilterSelector = ({
  value = MetadataFilteringModeEnum.disabled,
  onSelect,
}: MetadataFilterSelectorProps) => {
  const [open, setOpen] = useState(false);
  const options = [
    {
      key: MetadataFilteringModeEnum.disabled,
      value: t('workflow.nodes.knowledgeRetrieval.metadata.options.disabled.title'),
      desc: t('workflow.nodes.knowledgeRetrieval.metadata.options.disabled.subTitle'),
    },
    {
      key: MetadataFilteringModeEnum.automatic,
      value: t('workflow.nodes.knowledgeRetrieval.metadata.options.automatic.title'),
      desc: t('workflow.nodes.knowledgeRetrieval.metadata.options.automatic.subTitle'),
    },
    {
      key: MetadataFilteringModeEnum.manual,
      value: t('workflow.nodes.knowledgeRetrieval.metadata.options.manual.title'),
      desc: t('workflow.nodes.knowledgeRetrieval.metadata.options.manual.subTitle'),
    },
  ];

  const selectedOption = options.find((option) => option.key === value)!;

  return (
    <PortalToFollowElem
      placement="bottom-end"
      offset={{
        mainAxis: 4,
        crossAxis: 0,
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <PortalToFollowElemTrigger
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        asChild
      >
        <Button variant="secondary" size="small">
          {selectedOption.value}
          <RiArrowDownSLine className="h-3.5 w-3.5" />
        </Button>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-10">
        <div className="border-components-panel-border bg-components-panel-bg-blur w-[280px] rounded-xl border-[0.5px] p-1 shadow-lg">
          {options.map((option) => (
            <div
              key={option.key}
              className="hover:bg-state-base-hover flex cursor-pointer rounded-lg p-2 pr-3"
              onClick={() => {
                onSelect(option.key);
                setOpen(false);
              }}
            >
              <div className="w-4 shrink-0">
                {option.key === value && <RiCheckLine className="text-text-accent h-4 w-4" />}
              </div>
              <div className="grow">
                <div className="system-sm-semibold text-text-secondary">{option.value}</div>
                <div className="system-xs-regular text-text-tertiary">{option.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default MetadataFilterSelector;
