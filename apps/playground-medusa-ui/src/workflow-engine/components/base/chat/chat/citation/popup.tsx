import { Fragment, useState } from 'react';
import type { FC } from 'react';
import Link from 'next/link';

import Tooltip from './tooltip';
import ProgressTooltip from './progress-tooltip';
import type { Resources } from './index';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import FileIcon from '@base/file-icon';
import { Hash02, Target04 } from '@base/icons/src/vender/line/general';
import { ArrowUpRight } from '@base/icons/src/vender/line/arrows';
import { BezierCurve03, TypeSquare } from '@base/icons/src/vender/line/editor';

type PopupProps = {
  data: Resources;
  showHitInfo?: boolean;
};

const Popup: FC<PopupProps> = ({ data, showHitInfo = false }) => {
  const [open, setOpen] = useState(false);
  const fileType = data.dataSourceType !== 'notion' ? /\.([^.]*)$/g.exec(data.documentName)?.[1] || '' : 'notion';

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement="top-start"
      offset={{
        mainAxis: 8,
        crossAxis: -2,
      }}
    >
      <PortalToFollowElemTrigger onClick={() => setOpen((v) => !v)}>
        <div className="bg-components-button-secondary-bg flex h-7 max-w-[240px] items-center rounded-lg px-2">
          <FileIcon type={fileType} className="mr-1 h-4 w-4 shrink-0" />
          <div className="text-text-tertiary truncate text-xs">{data.documentName}</div>
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent style={{ zIndex: 1000 }}>
        <div className="bg-background-section-burn max-w-[360px] rounded-xl shadow-lg">
          <div className="px-4 pb-2 pt-3">
            <div className="flex h-[18px] items-center">
              <FileIcon type={fileType} className="mr-1 h-4 w-4 shrink-0" />
              <div className="system-xs-medium text-text-tertiary truncate">{data.documentName}</div>
            </div>
          </div>
          <div className="bg-components-panel-bg max-h-[450px] overflow-y-auto rounded-lg px-4 py-0.5">
            <div className="w-full">
              {data.sources.map((source, index) => (
                <Fragment key={index}>
                  <div className="group py-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="border-divider-subtle flex h-5 items-center rounded-md border px-1.5">
                        <Hash02 className="text-text-quaternary mr-0.5 h-3 w-3" />
                        <div className="text-text-tertiary text-[11px] font-medium">
                          {source.segment_position || index + 1}
                        </div>
                      </div>
                      {showHitInfo && (
                        <Link
                          href={`/datasets/${source.dataset_id}/documents/${source.document_id}`}
                          className="text-text-accent hidden h-[18px] items-center text-xs group-hover:flex"
                        >
                          {'Link to knowledge'}
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      )}
                    </div>
                    <div className="text-text-secondary break-words text-[13px]">{source.content}</div>
                    {showHitInfo && (
                      <div className="system-xs-medium text-text-quaternary mt-2 flex flex-wrap items-center">
                        <Tooltip
                          text={'Characters'}
                          data={source.word_count}
                          icon={<TypeSquare className="mr-1 h-3 w-3" />}
                        />
                        <Tooltip
                          text={'Retrieval count'}
                          data={source.hit_count}
                          icon={<Target04 className="mr-1 h-3 w-3" />}
                        />
                        <Tooltip
                          text={'Vector hash'}
                          data={source.index_node_hash?.substring(0, 7)}
                          icon={<BezierCurve03 className="mr-1 h-3 w-3" />}
                        />
                        {source.score && <ProgressTooltip data={Number(source.score.toFixed(2))} />}
                      </div>
                    )}
                  </div>
                  {index !== data.sources.length - 1 && <div className="bg-divider-regular my-1 h-[1px]" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default Popup;
