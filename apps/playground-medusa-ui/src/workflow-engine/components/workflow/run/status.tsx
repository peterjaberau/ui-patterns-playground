'use client';
import type { FC } from 'react';

import cn from '@utils/classnames';
import Indicator from '@workflow-app/components/header/indicator';
import StatusContainer from '@workflow/run/status-container';

type ResultProps = {
  status: string;
  time?: number;
  tokens?: number;
  error?: string;
  exceptionCounts?: number;
};

const StatusPanel: FC<ResultProps> = ({ status, time, tokens, error, exceptionCounts }) => {
  return (
    <StatusContainer status={status}>
      <div className="flex">
        <div className={cn('max-w-[120px] flex-[33%]', status === 'partial-succeeded' && 'min-w-[140px]')}>
          <div className="system-2xs-medium-uppercase text-text-tertiary mb-1">{'STATUS'}</div>
          <div
            className={cn(
              'system-xs-semibold-uppercase flex items-center gap-1',
              status === 'succeeded' && 'text-util-colors-green-green-600',
              status === 'partial-succeeded' && 'text-util-colors-green-green-600',
              status === 'failed' && 'text-util-colors-red-red-600',
              status === 'stopped' && 'text-util-colors-warning-warning-600',
              status === 'running' && 'text-util-colors-blue-light-blue-light-600',
            )}
          >
            {status === 'running' && (
              <>
                <Indicator color={'blue'} />
                <span>Running</span>
              </>
            )}
            {status === 'succeeded' && (
              <>
                <Indicator color={'green'} />
                <span>SUCCESS</span>
              </>
            )}
            {status === 'partial-succeeded' && (
              <>
                <Indicator color={'green'} />
                <span>PARTIAL SUCCESS</span>
              </>
            )}
            {status === 'exception' && (
              <>
                <Indicator color={'yellow'} />
                <span>EXCEPTION</span>
              </>
            )}
            {status === 'failed' && (
              <>
                <Indicator color={'red'} />
                <span>FAIL</span>
              </>
            )}
            {status === 'stopped' && (
              <>
                <Indicator color={'yellow'} />
                <span>STOP</span>
              </>
            )}
          </div>
        </div>
        <div className="max-w-[152px] flex-[33%]">
          <div className="system-2xs-medium-uppercase text-text-tertiary mb-1">{'ELAPSED TIME'}</div>
          <div className="system-sm-medium text-text-secondary flex items-center gap-1">
            {status === 'running' && <div className="bg-text-quaternary h-2 w-16 rounded-sm" />}
            {status !== 'running' && <span>{time ? `${time?.toFixed(3)}s` : '-'}</span>}
          </div>
        </div>
        <div className="flex-[33%]">
          <div className="system-2xs-medium-uppercase text-text-tertiary mb-1">{'TOTAL TOKENS'}</div>
          <div className="system-sm-medium text-text-secondary flex items-center gap-1">
            {status === 'running' && <div className="bg-text-quaternary h-2 w-20 rounded-sm" />}
            {status !== 'running' && <span>{`${tokens || 0} Tokens`}</span>}
          </div>
        </div>
      </div>
      {status === 'failed' && error && (
        <>
          <div className="bg-divider-subtle my-2 h-[0.5px]" />
          <div className="system-xs-regular text-text-destructive">{error}</div>
          {!!exceptionCounts && (
            <>
              <div className="bg-divider-subtle my-2 h-[0.5px]" />
              <div className="system-xs-regular text-text-destructive">
                {`There are ${exceptionCounts} nodes in the process running abnormally, please go to tracing to check the logs.`}
              </div>
            </>
          )}
        </>
      )}
      {status === 'partial-succeeded' && !!exceptionCounts && (
        <>
          <div className="bg-divider-deep my-2 h-[0.5px]" />
          <div className="system-xs-medium text-text-warning">
            {`There are ${exceptionCounts} nodes in the process running abnormally, please go to tracing to check the logs.`}
          </div>
        </>
      )}
      {status === 'exception' && (
        <>
          <div className="bg-divider-deep my-2 h-[0.5px]" />
          <div className="system-xs-medium text-text-warning">
            {error}
            <a
              href="https://docs.dify.ai/guides/workflow/error-handling/error-type"
              target="_blank"
              className="text-text-accent"
            >
              {'Learn more'}
            </a>
          </div>
        </>
      )}
    </StatusContainer>
  );
};

export default StatusPanel;
