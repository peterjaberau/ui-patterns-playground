'use client';
import type { FC } from 'react';
import useTimestamp from '@workflow-app/hooks/use-timestamp';

type Props = {
  status: string;
  executor?: string;
  startTime?: number;
  time?: number;
  tokens?: number;
  steps?: number;
  showSteps?: boolean;
};

const MetaData: FC<Props> = ({ status, executor, startTime, time, tokens, steps = 1, showSteps = true }) => {
  const { formatTime } = useTimestamp();

  return (
    <div className="relative">
      <div className="system-xs-medium-uppercase text-text-tertiary h-6 py-1">{'METADATA'}</div>
      <div className="py-1">
        <div className="flex">
          <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">{'Status'}</div>
          <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
            {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-16 rounded-sm" />}
            {status === 'succeeded' && <span>SUCCESS</span>}
            {status === 'partial-succeeded' && <span>PARTIAL SUCCESS</span>}
            {status === 'exception' && <span>EXCEPTION</span>}
            {status === 'failed' && <span>FAIL</span>}
            {status === 'stopped' && <span>STOP</span>}
          </div>
        </div>
        <div className="flex">
          <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">
            {'Executor'}
          </div>
          <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
            {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-[88px] rounded-sm" />}
            {status !== 'running' && <span>{executor || 'N/A'}</span>}
          </div>
        </div>
        <div className="flex">
          <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">
            {'Start Time'}
          </div>
          <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
            {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-[72px] rounded-sm" />}
            {status !== 'running' && (
              <span>{startTime ? formatTime(startTime, 'MM/DD/YYYY hh:mm A' as string) : '-'}</span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">
            {'Elapsed Time'}
          </div>
          <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
            {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-[72px] rounded-sm" />}
            {status !== 'running' && <span>{time ? `${time.toFixed(3)}s` : '-'}</span>}
          </div>
        </div>
        <div className="flex">
          <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">
            {'Total Tokens'}
          </div>
          <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
            {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-[48px] rounded-sm" />}
            {status !== 'running' && <span>{`${tokens || 0} Tokens`}</span>}
          </div>
        </div>
        {showSteps && (
          <div className="flex">
            <div className="system-xs-regular text-text-tertiary w-[104px] shrink-0 truncate px-2 py-1.5">
              {'Run Steps'}
            </div>
            <div className="system-xs-regular text-text-secondary grow px-2 py-1.5">
              {status === 'running' && <div className="bg-text-quaternary my-1 h-2 w-[24px] rounded-sm" />}
              {status !== 'running' && <span>{steps}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetaData;
