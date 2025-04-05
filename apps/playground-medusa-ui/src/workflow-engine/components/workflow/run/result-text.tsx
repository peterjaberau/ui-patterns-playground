'use client';
import type { FC } from 'react';

import { ImageIndentLeft } from '@base/icons/src/vender/line/editor';
import { Markdown } from '@base/markdown';
import LoadingAnim from '@base/chat/chat/loading-anim';
import StatusContainer from '@workflow/run/status-container';
// import { FileList } from '@base/file-uploader';

type ResultTextProps = {
  isRunning?: boolean;
  outputs?: any;
  error?: string;
  onClick?: () => void;
  allFiles?: any[];
};

const ResultText: FC<ResultTextProps> = ({ isRunning, outputs, error, onClick, allFiles }) => {
  return (
    <div className="bg-background-section-burn">
      {isRunning && !outputs && (
        <div className="pl-[26px] pt-4">
          <LoadingAnim type="text" />
        </div>
      )}
      {!isRunning && error && (
        <div className="px-4 py-2">
          <StatusContainer status="failed">{error}</StatusContainer>
        </div>
      )}
      {!isRunning && !outputs && !error && !allFiles?.length && (
        <div className="mt-[120px] flex flex-col items-center px-4 py-2 text-[13px] leading-[18px] text-gray-500">
          <ImageIndentLeft className="h-6 w-6 text-gray-400" />
          <div className="mr-2">{'This run only output JSON format,'}</div>
          <div>
            {'please go to the '}
            <span onClick={onClick} className="text-primary-600 cursor-pointer">
              {'detail panel'}
            </span>
            {' view it.'}
          </div>
        </div>
      )}
      {(outputs || !!allFiles?.length) && (
        <>
          {outputs && (
            <div className="px-4 py-2">
              <Markdown content={outputs} />
            </div>
          )}
          {!!allFiles?.length &&
            allFiles.map((item) => (
              <div key={item.varName} className="system-xs-regular flex flex-col gap-1 px-4 py-2">
                <div className="text-text-tertiary py-1">{item.varName}</div>
                {/* <FileList files={item.list} showDeleteAction={false} showDownloadAction canPreview /> */}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ResultText;
