'use client';

import { useEffect, useState } from 'react';
import { useContext } from 'use-context-selector';
import { useTranslation } from 'react-i18next';
import { RiCloseLine } from '@remixicon/react';
import { useStore as useTagStore } from './store';
import TagItemEditor from './tag-item-editor';
import Modal from '@base/modal';
import { ToastContext } from '@base/toast';
import { createTag, fetchTagList } from '@/service/tag';

type TagManagementModalProps = {
  type: 'knowledge' | 'app';
  show: boolean;
};

const TagManagementModal = ({ show, type }: TagManagementModalProps) => {
  const { t } = useTranslation();
  const { notify } = useContext(ToastContext);
  const tagList = useTagStore((s) => s.tagList);
  const setTagList = useTagStore((s) => s.setTagList);
  const setShowTagManagementModal = useTagStore((s) => s.setShowTagManagementModal);

  const getTagList = async (type: 'knowledge' | 'app') => {
    const res = await fetchTagList(type);
    setTagList(res);
  };

  const [pending, setPending] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const createNewTag = async () => {
    if (!name) return;
    if (pending) return;
    try {
      setPending(true);
      const newTag = await createTag(name, type);
      notify({ type: 'success', message: t('common.tag.created') });
      setTagList([newTag, ...tagList]);
      setName('');
      setPending(false);
    } catch (e: any) {
      notify({ type: 'error', message: t('common.tag.failed') });
      setPending(false);
    }
  };

  useEffect(() => {
    getTagList(type);
  }, [type]);

  return (
    <Modal
      className="!w-[600px] !max-w-[600px] rounded-xl px-8 py-6"
      isShow={show}
      onClose={() => setShowTagManagementModal(false)}
    >
      <div className="text-text-primary relative pb-2 text-xl font-semibold leading-[30px]">
        {t('common.tag.manageTags')}
      </div>
      <div className="absolute right-4 top-4 cursor-pointer p-2" onClick={() => setShowTagManagementModal(false)}>
        <RiCloseLine className="text-text-tertiary h-4 w-4" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <input
          className="border-divider-regular text-text-secondary caret-primary-600 placeholder:text-text-quaternary w-[100px] shrink-0 appearance-none rounded-lg border border-dashed bg-transparent px-2 py-1 text-sm leading-5 outline-none focus:border-solid"
          placeholder={t('common.tag.addNew') || ''}
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.nativeEvent.isComposing && createNewTag()}
          onBlur={createNewTag}
        />
        {tagList.map((tag) => (
          <TagItemEditor key={tag.id} tag={tag} />
        ))}
      </div>
    </Modal>
  );
};

export default TagManagementModal;
