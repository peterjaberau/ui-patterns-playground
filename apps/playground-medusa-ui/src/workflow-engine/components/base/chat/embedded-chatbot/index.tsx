import { useEffect, useState } from 'react';
import { useAsyncEffect } from 'ahooks';

import { EmbeddedChatbotContext, useEmbeddedChatbotContext } from './context';
import { useEmbeddedChatbot } from './hooks';
import { isDify } from './utils';
import { useThemeContext } from './theme/theme-context';
import { CssTransform } from './theme/utils';
// import { checkOrSetAccessToken } from '@workflow-app/components/share/utils'
import AppUnavailable from '@base/app-unavailable';
import useBreakpoints, { MediaType } from '@workflow-app/hooks/use-breakpoints';
import Loading from '@base/loading';
// import LogoHeader from '@base/logo/logo-embedded-chat-header';
import Header from '@base/chat/embedded-chatbot/header';
import ChatWrapper from '@base/chat/embedded-chatbot/chat-wrapper';
// import LogoSite from '@base/logo/logo-site';
import cn from '@utils/classnames';

const Chatbot = () => {
  const {
    isMobile,
    appInfoError,
    appInfoLoading,
    appData,
    appChatListDataLoading,
    chatShouldReloadKey,
    handleNewConversation,
    themeBuilder,
  } = useEmbeddedChatbotContext();

  const customConfig = appData?.custom_config;
  const site = appData?.site;

  // const difyIcon = <LogoHeader />;

  useEffect(() => {
    themeBuilder?.buildTheme(site?.chat_color_theme, site?.chat_color_theme_inverted);
    if (site) {
      if (customConfig) document.title = `${site.title}`;
      else document.title = `${site.title} - Powered by Dify`;
    }
  }, [site, customConfig, themeBuilder]);

  if (appInfoLoading) {
    return (
      <>
        {!isMobile && <Loading type="app" />}
        {isMobile && (
          <div className={cn('relative')}>
            <div
              className={cn(
                'border-components-panel-border shadow-xs flex h-[calc(100vh_-_60px)] flex-col rounded-2xl border-[0.5px]',
              )}
            >
              <Loading type="app" />
            </div>
          </div>
        )}
      </>
    );
  }

  if (appInfoError) {
    return (
      <>
        {!isMobile && <AppUnavailable />}
        {isMobile && (
          <div className={cn('relative')}>
            <div
              className={cn(
                'border-components-panel-border shadow-xs flex h-[calc(100vh_-_60px)] flex-col rounded-2xl border-[0.5px]',
              )}
            >
              <AppUnavailable />
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <div className="relative">
      <div
        className={cn(
          'border-components-panel-border-subtle flex flex-col rounded-2xl border',
          isMobile
            ? 'border-components-panel-border shadow-xs h-[calc(100vh_-_60px)] border-[0.5px]'
            : 'bg-chatbot-bg h-[100vh]',
        )}
        style={isMobile ? Object.assign({}, CssTransform(themeBuilder?.theme?.backgroundHeaderColorStyle ?? '')) : {}}
      >
        <Header
          isMobile={isMobile}
          title={site?.title || ''}
          customerIcon={''}
          theme={themeBuilder?.theme}
          onCreateNewChat={handleNewConversation}
        />
        <div
          className={cn(
            'flex grow flex-col overflow-y-auto',
            isMobile && 'bg-chatbot-bg !h-[calc(100vh_-_3rem)] rounded-2xl',
          )}
        >
          {appChatListDataLoading && <Loading type="app" />}
          {!appChatListDataLoading && <ChatWrapper key={chatShouldReloadKey} />}
        </div>
      </div>
      {/* powered by */}
      {isMobile && (
        <div className="flex h-[60px] shrink-0 items-center pl-2">
          {!appData?.custom_config?.remove_webapp_brand && (
            <div className={cn('flex shrink-0 items-center gap-1.5 px-2')}>
              <div className="system-2xs-medium-uppercase text-text-tertiary">{'Powered by'}</div>
              {appData?.custom_config?.replace_webapp_logo && (
                <img src={appData?.custom_config?.replace_webapp_logo} alt="logo" className="block h-5 w-auto" />
              )}
              {/* {!appData?.custom_config?.replace_webapp_logo && <LogoSite className="!h-5" />} */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const EmbeddedChatbotWrapper = () => {
  const media = useBreakpoints();
  const isMobile = media === MediaType.mobile;
  const themeBuilder = useThemeContext();

  // const {
  //   appInfoError,
  //   appInfoLoading,
  //   appData,
  //   appParams,
  //   appMeta,
  //   appChatListDataLoading,
  //   currentConversationId,
  //   currentConversationItem,
  //   appPrevChatList,
  //   pinnedConversationList,
  //   conversationList,
  //   newConversationInputs,
  //   newConversationInputsRef,
  //   handleNewConversationInputsChange,
  //   inputsForms,
  //   handleNewConversation,
  //   handleStartChat,
  //   handleChangeConversation,
  //   handleNewConversationCompleted,
  //   chatShouldReloadKey,
  //   isInstalledApp,
  //   appId,
  //   handleFeedback,
  //   currentChatInstanceRef,
  //   clearChatList,
  //   setClearChatList,
  //   isResponding,
  //   setIsResponding,
  //   currentConversationInputs,
  //   setCurrentConversationInputs,
  // } = useEmbeddedChatbot();

  return (
    <div> chat bot </div>
    // <EmbeddedChatbotContext.Provider
    //   value={{
    //     appInfoError,
    //     appInfoLoading,
    //     appData,
    //     appParams,
    //     appMeta,
    //     appChatListDataLoading,
    //     currentConversationId,
    //     currentConversationItem,
    //     appPrevChatList,
    //     pinnedConversationList,
    //     conversationList,
    //     newConversationInputs,
    //     newConversationInputsRef,
    //     handleNewConversationInputsChange,
    //     inputsForms,
    //     handleNewConversation,
    //     handleStartChat,
    //     handleChangeConversation,
    //     handleNewConversationCompleted,
    //     chatShouldReloadKey,
    //     isMobile,
    //     isInstalledApp,
    //     appId,
    //     handleFeedback,
    //     currentChatInstanceRef,
    //     themeBuilder,
    //     clearChatList,
    //     setClearChatList,
    //     isResponding,
    //     setIsResponding,
    //     currentConversationInputs,
    //     setCurrentConversationInputs,
    //   }}
    // >
    //   <Chatbot />
    // </EmbeddedChatbotContext.Provider>
  );
};

const EmbeddedChatbot = () => {
  const [initialized, setInitialized] = useState(false);
  const [appUnavailable, setAppUnavailable] = useState<boolean>(false);
  const [isUnknownReason, setIsUnknownReason] = useState<boolean>(false);

  useAsyncEffect(async () => {
    if (!initialized) {
      // try {
      //   await checkOrSetAccessToken();
      // } catch (e: any) {
      //   if (e.status === 404) {
      //     setAppUnavailable(true);
      //   } else {
      //     setIsUnknownReason(true);
      //     setAppUnavailable(true);
      //   }
      // }
      setInitialized(true);
    }
  }, []);

  if (!initialized) return null;

  if (appUnavailable) return <AppUnavailable isUnknownReason={isUnknownReason} />;

  return <EmbeddedChatbotWrapper />;
};

export default EmbeddedChatbot;
