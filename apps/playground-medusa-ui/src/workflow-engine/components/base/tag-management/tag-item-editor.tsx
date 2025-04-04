import type { FC } from 'react';
import { useState } from 'react';
import { RiDeleteBinLine, RiEditLine } from '@remixicon/react';
import { useDebounceFn } from 'ahooks';
import { useContext } from 'use-context-selector';
import { useStore as useTagStore } from './store';
import Confirm from '@base/confirm';
import cn from '@utils/classnames';
import type { Tag } from '@base/tag-management/constant';
import { ToastContext } from '@base/toast';
// import {
//   deleteTag,
//   updateTag,
// } from '@/service/tag'

type TagItemEditorProps = {
  tag: Tag;
};
const TagItemEditor: FC<TagItemEditorProps> = ({ tag }) => {
  const { notify } = useContext(ToastContext);
  const tagList = useTagStore((s) => s.tagList);
  const setTagList = useTagStore((s) => s.setTagList);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(tag.name);
  const editTag = async (tagID: string, name: string) => {
    if (name === tag.name) {
      setIsEditing(false);
      return;
    }
    if (!name) {
      notify({ type: 'error', message: 'tag name is empty' });
      setName(tag.name);
      setIsEditing(false);
      return;
    }
    try {
      const newList = tagList.map((tag) => {
        if (tag.id === tagID) {
          return {
            ...tag,
            name,
          };
        }
        return tag;
      });
      setTagList([...newList]);
      setIsEditing(false);
      // await updateTag(tagID, name)
      notify({ type: 'success', message: 'Modified successfully' });
      setName(name);
    } catch (e: any) {
      notify({ type: 'error', message: 'Modified successfully' });
      setName(tag.name);
      const recoverList = tagList.map((tag) => {
        if (tag.id === tagID) {
          return {
            ...tag,
            name: tag.name,
          };
        }
        return tag;
      });
      setTagList([...recoverList]);
      setIsEditing(false);
    }
  };
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [pending, setPending] = useState<boolean>(false);
  const removeTag = async (tagID: string) => {
    if (pending) return;
    try {
      setPending(true);
      // await deleteTag(tagID)
      notify({ type: 'success', message: 'Modified successfully' });
      const newList = tagList.filter((tag) => tag.id !== tagID);
      setTagList([...newList]);
      setPending(false);
    } catch (e: any) {
      notify({ type: 'error', message: 'Modified unsuccessfully' });
      setPending(false);
    }
  };
  const { run: handleRemove } = useDebounceFn(
    () => {
      removeTag(tag.id);
    },
    { wait: 200 },
  );

  return (
    <>
      <div
        className={cn(
          'border-components-panel-border text-text-secondary flex shrink-0 items-center gap-0.5 rounded-lg border py-1 pl-2 pr-1 text-sm leading-5',
        )}
      >
        {!isEditing && (
          <>
            <div className="text-text-secondary text-sm leading-5">{tag.name}</div>
            <div className="leading-4.5 text-text-tertiary shrink-0 px-1 text-sm font-medium">{tag.binding_count}</div>
            <div
              className="group/edit hover:bg-state-base-hover shrink-0 cursor-pointer rounded-md p-1"
              onClick={() => setIsEditing(true)}
            >
              <RiEditLine className="text-text-tertiary group-hover/edit:text-text-secondary h-3 w-3" />
            </div>
            <div
              className="group/remove hover:bg-state-base-hover shrink-0 cursor-pointer rounded-md p-1"
              onClick={() => {
                if (tag.binding_count) setShowRemoveModal(true);
                else handleRemove();
              }}
            >
              <RiDeleteBinLine className="text-text-tertiary group-hover/remove:text-text-secondary h-3 w-3" />
            </div>
          </>
        )}
        {isEditing && (
          <input
            className="caret-primary-600 placeholder:text-text-quaternary shrink-0 appearance-none outline-none"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && editTag(tag.id, name)}
            onBlur={() => editTag(tag.id, name)}
          />
        )}
      </div>
      <Confirm
        title={`'Delete tag' "${tag.name}"`}
        isShow={showRemoveModal}
        content={
          'Please note, once confirmed, as the Owner of any Workspaces, your workspaces will be scheduled in a queue for permanent deletion, and all your user data will be queued for permanent deletion.'
        }
        onConfirm={() => {
          handleRemove();
          setShowRemoveModal(false);
        }}
        onCancel={() => setShowRemoveModal(false)}
      />
    </>
  );
};

export default TagItemEditor;
