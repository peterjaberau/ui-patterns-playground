import { Tooltip } from '../../components';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import { useSelector } from '@xstate/react';
import empty from '../../examples/empty.json';
import aiPrompt from '../../examples/aiPrompt.json';
import ethCall from '../../examples/ethcall.json';
import getUint256 from '../../examples/getUint256.json';
import median from '../../examples/median.json';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

export interface ExamplesProps {
  className?: string;
}

const reactFlowInstanceSelector = (state: any) => state.context.reactFlowInstance;

export const Examples = ({ className = '' }: ExamplesProps) => {
  const globalServices = useContext(GlobalStateContext);

  const reactFlowInstance = useSelector(globalServices.workspaceService, reactFlowInstanceSelector);

  const handleRehydrate = (json: any) => {
    globalServices.workspaceService.send('RESTORE_STATE', {
      savedContext: json,
    });
    setTimeout(
      () =>
        reactFlowInstance.fitView({
          duration: 500,
          padding: 1,
        }),
      100,
    );
  };

  const handleImportClick = () => {
    globalServices.workspaceService.send('OPEN_MODAL', { name: 'import' });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-6 flex items-center justify-start gap-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Quickstart Templates</h4>
        <Tooltip className="text-muted-foreground text-sm">
          <p>Select from a preconfigured template job spec to get you started.</p>
        </Tooltip>
      </div>
      <div className="grid max-w-[500px] grid-cols-2 gap-3">
        <Button className="basis-1/2" onClick={() => handleRehydrate(empty)}>
          Empty Project
        </Button>
        {/* <Separator orientation="vertical" /> */}
        <Button className="basis-1/2" onClick={() => handleRehydrate(aiPrompt)}>
          AI Prompt
        </Button>
        {/* <Separator orientation="vertical" /> */}
        <Button className="basis-1/2" onClick={() => handleRehydrate(ethCall)}>{`ETH Call`}</Button>
        {/* <Separator orientation="vertical" /> */}
        <Button className="basis-1/2" onClick={() => handleRehydrate(getUint256)}>{`Get -> Uint256`}</Button>
        {/* <Separator orientation="vertical" /> */}
        <Button className="basis-1/2" onClick={() => handleRehydrate(median)}>{`Median Answer`}</Button>
      </div>
      <div className="flex w-full items-center gap-2">
        <Separator orientation="horizontal" className="shrink" />
        <span>OR</span>
        <Separator orientation="horizontal" className="shrink" />
      </div>
      <button
        className="hover:text-foreground text-muted-foreground font-bold hover:underline"
        onClick={handleImportClick}
      >
        Import an existing job spec
      </button>
    </div>
  );
};
