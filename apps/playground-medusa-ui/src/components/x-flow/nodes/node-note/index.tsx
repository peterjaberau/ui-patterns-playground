'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $getRoot, $insertNodes } from 'lexical';

import { memo, useCallback, useMemo, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../hooks/useStore';

import { ToolbarPlugin } from './ToolbarPlugin';
import './index.css';

const theme = {
  paragraph: 'text-sm',
};

function EditorInitializer({ initialHTML }: { initialHTML: string }) {
  const [editor]: any = useLexicalComposerContext();

  useEffect(() => {
    if (!initialHTML) return;
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(initialHTML, 'text/html');
      const nodes = $generateNodesFromDOM(editor, dom);
      $getRoot().clear();
      $insertNodes(nodes);
    });
  }, [editor, initialHTML]);

  return null;
}

function ChangeListenerPlugin({ onChange }: { onChange: (html: string) => void }) {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={() => {
        editor.update(() => {
          const html = $generateHtmlFromNodes(editor);
          onChange(html);
        });
      }}
    />
  );
}

export default memo((props: any) => {
  const { id, data } = props;
  const editorRef = useRef(null);

  const { nodes, setNodes } = useStore(
    (s) => ({
      nodes: s.nodes,
      setNodes: s.setNodes,
    }),
    shallow,
  );

  const handleNodeValueChange = useCallback(
    debounce((value: string) => {
      for (let node of nodes as any) {
        if (node.id === id) {
          node.data = {
            ...node?.data,
            value,
          };
          break;
        }
      }
      setNodes([...(nodes as any)], false);
    }, 200),
    [nodes, id, setNodes],
  );

  const initialConfig = useMemo(
    () => ({
      namespace: 'NodeNoteEditor',
      theme,
      onError(error: Error) {
        console.error(error);
      },
    }),
    [],
  );

  const editor = useMemo(
    () => (
      <LexicalComposer initialConfig={initialConfig}>
        <EditorInitializer initialHTML={data?.value || ''} />
        <div
          className="nodrag nopan nowheel node-note-braft"
          style={{
            width: '240px',
            height: '160px',
            background: 'rgb(239, 248, 255)',
            border: '1px solid rgb(132, 202, 255)',
            borderRadius: '8px',
            userSelect: 'text',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'text',
          }}
        >
          <ToolbarPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="node-note-braft-content"
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '6px',
                  outline: 'none',
                }}
              />
            }
            placeholder={<div style={{ padding: '4px', opacity: 0.5 }}>Please enter content...</div>}
            ErrorBoundary={({ children }) => <>{children}</>}
          />
          <HistoryPlugin />
          <ChangeListenerPlugin onChange={handleNodeValueChange} />
        </div>
      </LexicalComposer>
    ),
    [data?.value, initialConfig],
  );

  return (
    <div
      className="node-note-wrap"
      onMouseDown={(e: any) => e.stopPropagation()}
      onClick={(e: any) => e.stopPropagation()}
    >
      {editor}
    </div>
  );
});
