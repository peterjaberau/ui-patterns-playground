import Link from 'next/link';
import { Flow, Simulator, Configurator, UserProfilePanel, Examples, ImportModal, Chat } from './modules';
import React, { useState, useContext, useCallback } from 'react';
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
import { Container, Heading, Text } from '@medusajs/ui';

import {
  Card as CardPolaris,
  Layout as LayoutPolaris,
  Button as ButtonPolaris,
  Tabs as TabsPolaris,
  BlockStack,
  Text as TextPolaris,
  Box as BoxPolaris,
} from '@shopify/polaris';

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

  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState(0);
  const handleSelectedSideMenuItemChange = (newIndex: number) => {
    setSelectedSideMenuItem(newIndex);
  };

  const handleToggleAiWandMode = () => {
    globalServices.workspaceService.send('TOGGLE_AI_WAND');
  };

  return (
    <>
      <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
        <Container className="h-full divide-y p-0">
          <div className="flex items-center justify-between px-6 py-4">
            <Heading>Menu</Heading>
            <div className="flex items-center gap-x-2">
              {isIdle && (
                <ButtonPolaris variant="primary" tone={isAiWandMode && 'critical'} onClick={handleToggleAiWandMode}>
                  {`${isAiWandMode ? 'Disconnect' : 'Connect'} AI`}
                </ButtonPolaris>
              )}
            </div>
          </div>

          <RenderSideTabs />
        </Container>
      </div>

      <div className="col-span-3 flex w-full min-w-0 flex-col gap-y-3">
        <Container className="h-full divide-y p-0">
          <div className="flex items-center justify-between px-6 py-4">
            <Heading>Flow</Heading>
          </div>

          <div className="flex justify-center p-4">
            <div style={{ height: '800px', width: '100%', position: 'relative' }}>
              <Flow />
            </div>
          </div>
        </Container>
      </div>
    </>
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

const RenderSideTabs = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), []);

  const tabs = [
    {
      id: 'start',
      content: 'Start',
      accessibilityLabel: 'Start',
      panelID: 'start',
      children: <Examples />,
    },
    {
      id: 'profile',
      content: 'Profile',
      panelID: 'profile',
      children: <UserProfilePanel />,
    },
    {
      id: 'config',
      content: 'Config',
      panelID: 'config',
      children: <Configurator />,
    },
    {
      id: 'simulator',
      content: 'Simulator',
      panelID: 'simulator',
      children: <Simulator />,
    },
  ];

  return (
    <TabsPolaris tabs={tabs} selected={selected} onSelect={handleTabChange}>
      <BoxPolaris padding="200">{tabs[selected].children}</BoxPolaris>
    </TabsPolaris>
  );
};
