import { Tooltip } from '../../components';
import { ChevronRightIcon, ChevronLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from '@xstate/react';
import { SideEffectPrompt } from './SideEffectPrompt';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const isTestModeSelector = (state: any) => state.matches('testMode');
const isTestModeLoadingSelector = (state: any) => state.matches('testModeLoading');
const isSideEffectPromptSelector = (state: any) => state.matches('testMode.sideEffectPrompt');
const taskInstructionsSelector = (state: any) => state.context.parsedTaskOrder;
const currentTaskIndexSelector = (state: any) => state.context.currentTaskIndex;
const taskRunResultsSelector = (state: any) => state.context.taskRunResults;
const parsingErrorSelector = (state: any) => state.context.parsingError;

export interface SimulatorProps {
  className?: string;
}

export const Simulator = ({ className = '' }: SimulatorProps) => {
  const globalServices = useContext(GlobalStateContext);

  const testMode = useSelector(globalServices.workspaceService, isTestModeSelector);

  const testModeLoading = useSelector(globalServices.workspaceService, isTestModeLoadingSelector);

  const isSideEffectPrompt = useSelector(globalServices.workspaceService, isSideEffectPromptSelector);

  const taskInstructions = useSelector(globalServices.workspaceService, taskInstructionsSelector);

  const currentTaskIndex = useSelector(globalServices.workspaceService, currentTaskIndexSelector);

  const taskRunResults = useSelector(globalServices.workspaceService, taskRunResultsSelector);

  const parsingError = useSelector(globalServices.workspaceService, parsingErrorSelector);

  const handleToggleTestMode = () => {
    setProgress(0);
    return globalServices.workspaceService.send('TOGGLE_TEST_MODE');
  };

  const [progress, setProgress] = useState<number>(0);

  const handlePrevIndex = () => {
    const nextCurrentIndex = currentTaskIndex - 1;
    if (nextCurrentIndex >= 0) {
      globalServices.workspaceService.send('SIMULATOR_PREV_TASK');
    }
  };

  const handleNextIndex = () => {
    const nextCurrentIndex = currentTaskIndex + 1;
    if (nextCurrentIndex <= taskInstructions.length) {
      globalServices.workspaceService.send('TRY_RUN_CURRENT_TASK');
    }
  };

  useEffect(() => {
    setProgress(taskInstructions.length > 0 ? (100 / taskInstructions.length) * currentTaskIndex : 0);
  }, [currentTaskIndex]);

  const getTaskId = (index: number) => {
    return taskInstructions[index]?.id;
  };

  const latestTaskRunResult = taskRunResults.length > 0 ? taskRunResults[taskRunResults.length - 1].result : {};

  const handlePersist = () => globalServices.workspaceService.send('PERSIST_STATE');

  const handleRehydrate = () =>
    globalServices.workspaceService.send('RESTORE_STATE', {
      savedContext: JSON.parse(localStorage.getItem('persisted-state') || ''),
    });

  return (
    <>
      <div className="mb-6 flex items-center justify-start gap-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Test</h4>
        <Tooltip className="text-muted-foreground text-sm">
          <p>Enable test mode to parse your pipeline and step through task execution in a simulated environment.</p>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[20rem] flex-col items-start justify-start gap-4">
          <div className="mb-2 mt-3 flex items-center gap-2">
            <Switch id="test-mode" checked={testMode || testModeLoading} onCheckedChange={handleToggleTestMode} />
            <Label htmlFor="test-mode">Test Mode</Label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-row gap-1">
              <Button onClick={handlePrevIndex} disabled={!testMode || currentTaskIndex === 0}>
                <ChevronLeftIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                disabled={!testMode}
                className={`pointer-events-none grow cursor-default normal-case`}
              >
                {testModeLoading ? (
                  'Loading...'
                ) : currentTaskIndex >= taskInstructions.length || !testMode ? (
                  <CheckCircleIcon className="h-5 w-5" />
                ) : (
                  getTaskId(currentTaskIndex)
                )}
              </Button>
              <Button onClick={handleNextIndex} disabled={!testMode || currentTaskIndex >= taskInstructions.length}>
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>
            <Progress className={`w-56 bg-gray-700`} value={testModeLoading ? undefined : progress}></Progress>
          </div>
          {isSideEffectPrompt ? (
            <SideEffectPrompt />
          ) : (
            <div className="flex w-full flex-col gap-1">
              {(latestTaskRunResult.value || latestTaskRunResult.error) && (
                <p className="text-muted-foreground text-xs">Current Result:</p>
              )}
              <div className="flex flex-col gap-1">
                {latestTaskRunResult.value !== undefined && latestTaskRunResult.value.length > 0 && (
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-sm">Value:</p>
                    <p className="text-secondary max-h-[10rem] overflow-auto text-sm">{latestTaskRunResult.value}</p>
                  </div>
                )}
                {latestTaskRunResult.error && (
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-sm">Error:</p>
                    <p className="text-error max-h-[10rem] overflow-auto text-sm">{latestTaskRunResult.error}</p>
                  </div>
                )}
                {parsingError.length > 0 && (
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-sm">Error:</p>
                    <p className="text-error max-h-[10rem] overflow-auto text-sm">{parsingError}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* <button onClick={handlePersist}>persist</button>
        <button onClick={handleRehydrate}>rehydrate</button> */}
      </div>
    </>
  );
};
