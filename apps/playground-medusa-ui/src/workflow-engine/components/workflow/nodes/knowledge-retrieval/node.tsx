import { type FC, useEffect, useState } from 'react';
import React from 'react';
import type { KnowledgeRetrievalNodeType } from './types';
import { Folder } from '@base/icons/src/vender/solid/files';
import type { NodeProps } from '@workflow/types';
import type { DataSet } from '@workflow-app/models/datasets';
import { useDatasetsDetailStore } from '../../datasets-detail-store/store';

const Node: FC<NodeProps<KnowledgeRetrievalNodeType>> = ({ data }) => {
  const [selectedDatasets, setSelectedDatasets] = useState<DataSet[]>([]);
  const datasetsDetail = useDatasetsDetailStore((s) => s.datasetsDetail);

  useEffect(() => {
    if (data.dataset_ids?.length > 0) {
      const dataSetsWithDetail = data.dataset_ids.reduce<DataSet[]>((acc, id) => {
        if (datasetsDetail[id]) acc.push(datasetsDetail[id]);
        return acc;
      }, []);
      setSelectedDatasets(dataSetsWithDetail);
    } else {
      setSelectedDatasets([]);
    }
  }, [data.dataset_ids, datasetsDetail]);

  if (!selectedDatasets.length) return null;

  return (
    <div className="mb-1 px-3 py-1">
      <div className="space-y-0.5">
        {selectedDatasets.map(({ id, name }) => (
          <div
            key={id}
            className="bg-workflow-block-parma-bg flex h-[26px] items-center rounded-md px-1 text-xs font-normal text-gray-700"
          >
            <div className="mr-1 shrink-0 rounded-md border-[0.5px] border-[#E0EAFF] bg-[#F5F8FF] p-1">
              <Folder className="h-3 w-3 text-[#444CE7]" />
            </div>
            <div className="system-xs-regular text-text-secondary w-0 grow truncate">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Node);
