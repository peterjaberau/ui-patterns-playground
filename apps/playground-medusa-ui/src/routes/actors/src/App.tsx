import { Flow, Simulator, Configurator, UserProfilePanel, Examples, ImportModal, Chat } from './modules';
import { useState, useContext } from 'react';
import Image from 'next/image';
import { GlobalStateContext } from './context/GlobalStateContext';
import { useSelector } from '@xstate/react';
import { SideMenu, TopMenu } from './components/menu';
import Split from 'react-split';
import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';

// @ts-ignore
// BigInt does not have `toJSON` method
BigInt.prototype.toJSON = function (): string {
  return this.toString();
};

const reactFlowInstanceSelector = (state: any) => state.context.reactFlowInstance;

const isIdleSelector = (state: any) => state.matches('idle');

const isAiWandModeSelector = (state: any) => state.matches('idle.aiWandMode');

const App = () => {
  const [newProjectHeroDisplayed, setNewProjectHeroDisplayed] = useState<boolean>(true);

  const handleEnterApp = () => setNewProjectHeroDisplayed(false);

  const globalServices = useContext(GlobalStateContext);

  const reactFlowInstance = useSelector(globalServices.workspaceService, reactFlowInstanceSelector);

  const isIdle = useSelector(globalServices.workspaceService, isIdleSelector);

  const isAiWandMode = useSelector(globalServices.workspaceService, isAiWandModeSelector);

  const handleRehydrate = (json: any) => {
    globalServices.workspaceService.send('RESTORE_STATE', {
      savedContext: json,
    });
    setNewProjectHeroDisplayed(false);
    setTimeout(
      () =>
        reactFlowInstance.fitView({
          duration: 500,
          padding: 1,
        }),
      100,
    );
  };

  const handleSave = () => {
    globalServices.workspaceService.send('SAVE_JOB_SPEC_VERSION');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState(0);
  const handleSelectedSideMenuItemChange = (newIndex: number) => {
    setSelectedSideMenuItem(newIndex);
  };

  const handleToggleAiWandMode = () => {
    globalServices.workspaceService.send('TOGGLE_AI_WAND');
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="from-background to-muted absolute h-full min-h-[1200px] w-full min-w-[1200px] bg-gradient-to-tl" />
      <ImportModal />
      {newProjectHeroDisplayed && (
        <div className="pointer-events-auto absolute z-50 flex h-full w-full items-center justify-center p-8 backdrop-blur-sm">
          <div className="relative flex h-full max-h-[500px] w-full max-w-[800px] flex-col items-start justify-start gap-8 rounded-lg bg-black">
            <div className="bg-noise absolute inset-0 rounded-lg opacity-20" />
            <div className="absolute right-4 top-4 z-10 h-96 w-96">
              <div className="relative h-96 w-96">
                <Image src="/blob.svg" layout="fill" alt="" />
                <div className="absolute top-12 h-40 w-full">
                  <div className="relative h-full w-full">
                    <Image src="/illustration.svg" layout="fill" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-4 top-4 z-50">
              <Button
                onClick={() => setNewProjectHeroDisplayed(false)}
                variant="outline"
                className="group h-7 w-7 rounded-full border-white p-0 transition-colors hover:bg-white"
              >
                <XMarkIcon className="h-5 w-5 stroke-white group-hover:stroke-black" />
                <span className="sr-only">Close modal</span>
              </Button>
            </div>
            <div className="z-20 flex flex-col items-start justify-center gap-6 p-8">
              <div className="flex flex-col items-start justify-center gap-8 py-4">
                <div className="relative h-20 w-[141px]">
                  <Image src="/linkit.svg" alt="linkit logo" layout="fill" />
                </div>
                <h2 className="max-w-sm text-sm font-bold text-gray-300">
                  Learn, create, and test your next Chainlink job spec —{' '}
                  <span className="text-[#ffeea8]">directly from your web browser</span>
                </h2>
              </div>
              <Separator orientation="horizontal" className="bg-gray-500" />
              <div className="grid grid-cols-4 place-items-start gap-x-6 gap-y-4 text-sm text-white">
                <div className="border-primary flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl">
                  1
                </div>
                <div className="border-primary flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl">
                  2
                </div>
                <div className="border-primary flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl">
                  3
                </div>
                <div className="border-primary flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl">
                  4
                </div>
                <span>Import your existing job spec or pick from a quickstart template.</span>
                <span>
                  Drag, drop, connect tasks and get help from the <span className="text-[#ffeea8]">AI assistant</span>{' '}
                  to tweak your pipeline.
                </span>
                <span>Our simulated environment provides the easiest way to test and debug your pipeline.</span>
                <span>When you&apos;re ready, export the generated TOML and you&apos;re good to go!</span>
              </div>
              <div className="flex w-full items-center justify-end">
                <a
                  href="https://don.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 text-sm text-gray-400 hover:underline"
                >
                  <span>Created by DON Tools</span>
                  <div className="h-8 w-8">
                    <Image src="/don-tools-logo.svg" alt="" width={80} height={80} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="relative h-full w-full">
        <div className="fixed z-0 h-full w-full">
          <Flow />
        </div>
        <div className="bg-background pointer-events-auto visible fixed z-50 grid h-full w-full items-center justify-center md:invisible">
          <div className="bg-muted pointer-events-auto relative flex w-80 flex-col gap-4 rounded-lg p-8">
            <div className="relative h-20 w-[141px]">
              <Image src="/linkit.svg" alt="linkit logo" layout="fill" />
            </div>
            <div className="flex max-w-sm flex-col gap-2 text-xs">
              <p>Mobile support is not implemented. Please use the app on a larger device. Sorry!</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-screen flex-col p-4">
          <div className="flex w-full items-center justify-between">
            <TopMenu lit={isMenuOpen} onToggleClick={handleMenuToggle} />
            {isIdle && (
              <div className="pointer-events-auto relative flex items-center space-x-2">
                <Switch id="ai-mode" checked={isAiWandMode} onCheckedChange={handleToggleAiWandMode} />
                <Label htmlFor="ai-mode">AI Assist</Label>
              </div>
            )}
          </div>
          {isMenuOpen && (
            <div className="pointer-events-none relative flex h-px w-full grow">
              <Split
                minSize={[200, 0]}
                sizes={[34, 66]}
                className="pointer-events-none flex h-full w-full"
                gutter={(index, direction) => {
                  const gutter = document.createElement('div');
                  gutter.innerHTML = `
                <div class="absolute inset-0 bg-split-handle bg-no-repeat bg-center cursor-resize"></div>
                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-25"></div>
                `;
                  gutter.className = `overflow-hidden relative pointer-events-auto gutter gutter-${direction} bg-border dark:bg-gradient-copper rounded-r-lg`;
                  return gutter;
                }}
              >
                <div className="pointer-events-auto relative">
                  <div className="dark:border-accent relative flex h-full w-full grow rounded-bl-lg border">
                    <div className="bg-card absolute inset-0 overflow-hidden rounded-bl-lg">
                      <div className="from-card via-muted/20 absolute h-screen w-screen bg-gradient-to-t to-transparent" />
                      <div className="from-card to-muted/50 absolute h-screen w-screen bg-gradient-to-br" />
                    </div>
                    <div className="bg-noise absolute inset-0 opacity-20 invert dark:invert-0" />
                    <SideMenu
                      selectedIndex={selectedSideMenuItem}
                      onSelectedIndexChange={handleSelectedSideMenuItemChange}
                    />
                    <div className="relative h-full w-full overflow-auto">
                      <div className="relative min-h-full w-full min-w-max">
                        <div className="relative h-full w-full p-4">{renderSideMenuContent(selectedSideMenuItem)}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none"></div>
              </Split>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;

const renderSideMenuContent = (index: number) => {
  switch (index) {
    case 0:
      return <Examples />;
    case 1:
      return <UserProfilePanel />;
    case 2:
      return <Configurator />;
    case 4:
      return <Simulator />;
    default:
      return <Chat />;
  }
};
