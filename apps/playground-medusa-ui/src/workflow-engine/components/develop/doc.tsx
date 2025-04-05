'use client';
import { useEffect, useState } from 'react';
import { useContext } from 'use-context-selector';
import { RiListUnordered } from '@remixicon/react';
import TemplateEn from './template/template.en.mdx';
import TemplateAdvancedChatEn from './template/template_advanced_chat.en.mdx';
import TemplateWorkflowEn from './template/template_workflow.en.mdx';
import TemplateChatEn from './template/template_chat.en.mdx';

type IDocProps = {
  appDetail: any;
};

const Doc = ({ appDetail }: IDocProps) => {
  const [toc, setToc] = useState<Array<{ href: string; text: string }>>([]);
  const [isTocExpanded, setIsTocExpanded] = useState(false);

  const variables = appDetail?.model_config?.configs?.prompt_variables || [];
  const inputs = variables.reduce((res: any, variable: any) => {
    res[variable.key] = variable.name || '';
    return res;
  }, {});

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    setIsTocExpanded(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const extractTOC = () => {
      const article = document.querySelector('article');
      if (article) {
        const headings = article.querySelectorAll('h2');
        const tocItems = Array.from(headings)
          .map((heading) => {
            const anchor = heading.querySelector('a');
            if (anchor) {
              return {
                href: anchor.getAttribute('href') || '',
                text: anchor.textContent || '',
              };
            }
            return null;
          })
          .filter((item): item is { href: string; text: string } => item !== null);
        setToc(tocItems);
      }
    };

    // Run after component has rendered
    setTimeout(extractTOC, 0);
  }, [appDetail]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; text: string }) => {
    e.preventDefault();
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const scrollContainer = document.querySelector('.overflow-auto');
      if (scrollContainer) {
        const headerOffset = 80;
        const elementTop = element.offsetTop - headerOffset;
        scrollContainer.scrollTo({
          top: elementTop,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <div className="flex">
      <div className={`fixed right-8 top-32 z-10 transition-all ${isTocExpanded ? 'w-64' : 'w-10'}`}>
        {isTocExpanded ? (
          <nav className="toc w-full rounded-lg bg-gray-50 p-4 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{'Contents'}</h3>
              <button onClick={() => setIsTocExpanded(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <ul className="space-y-2">
              {toc.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900 hover:underline"
                    onClick={(e) => handleTocClick(e, item)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <button
            onClick={() => setIsTocExpanded(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md transition-colors duration-200 hover:bg-gray-100"
          >
            <RiListUnordered className="h-6 w-6" />
          </button>
        )}
      </div>
      <article className="prose-xl prose">
        {(appDetail?.mode === 'chat' || appDetail?.mode === 'agent-chat') &&
          (() => <TemplateChatEn appDetail={appDetail} variables={variables} inputs={inputs} />)()}
        {appDetail?.mode === 'advanced-chat' &&
          (() => <TemplateAdvancedChatEn appDetail={appDetail} variables={variables} inputs={inputs} />)()}
        {appDetail?.mode === 'workflow' &&
          (() => <TemplateWorkflowEn appDetail={appDetail} variables={variables} inputs={inputs} />)()}
        {appDetail?.mode === 'completion' &&
          (() => <TemplateEn appDetail={appDetail} variables={variables} inputs={inputs} />)()}
      </article>
    </div>
  );
};

export default Doc;
