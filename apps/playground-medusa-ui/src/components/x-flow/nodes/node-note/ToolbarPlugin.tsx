'use client';

import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, LexicalEditor } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useState } from 'react';
import { $isParentElementRTL } from '@lexical/selection';

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setIsBold(selection.hasFormat('bold'));
          setIsItalic(selection.hasFormat('italic'));
          setIsUnderline(selection.hasFormat('underline'));
          setIsStrikethrough(selection.hasFormat('strikethrough'));
        }
      });
    });
  }, [editor]);

  const format = (type: string) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  return (
    <div className="node-note-braft-control flex gap-1 border-b border-blue-300 bg-white px-2 py-1">
      <button onClick={() => format('bold')} className={isBold ? 'font-bold' : ''}>
        B
      </button>
      <button onClick={() => format('italic')} className={isItalic ? 'italic' : ''}>
        I
      </button>
      <button onClick={() => format('underline')} className={isUnderline ? 'underline' : ''}>
        U
      </button>
      <button onClick={() => format('strikethrough')} className={isStrikethrough ? 'line-through' : ''}>
        S
      </button>
      {/* You can add ordered list, color, etc. here */}
    </div>
  );
};
