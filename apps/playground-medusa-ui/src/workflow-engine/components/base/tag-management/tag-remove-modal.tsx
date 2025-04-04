'use client';

import { RiCloseLine } from '@remixicon/react';
import cn from '@utils/classnames';
import Button from '@base/button';
import Modal from '@base/modal';
import { AlertTriangle } from '@base/icons/src/vender/solid/alertsAndFeedback';
import type { Tag } from '@base/tag-management/constant';

type TagRemoveModalProps = {
  show: boolean;
  tag: Tag;
  onConfirm: () => void;
  onClose: () => void;
};

const TagRemoveModal = ({ show, tag, onConfirm, onClose }: TagRemoveModalProps) => {
  return (
    <Modal className={cn('w-[480px] max-w-[480px] p-8')} isShow={show} onClose={() => {}}>
      <div className="absolute right-4 top-4 cursor-pointer p-2" onClick={onClose}>
        <RiCloseLine className="text-text-tertiary h-4 w-4" />
      </div>
      <div className="border-divider-regular bg-background-default-burn h-12 w-12 rounded-xl border-[0.5px] p-3 shadow-xl">
        <AlertTriangle className="h-6 w-6 text-[rgb(247,144,9)]" />
      </div>
      <div className="text-text-primary mt-3 text-xl font-semibold leading-[30px]">
        {'Delete'}
        <span>{`"${tag.name}"`}</span>
      </div>
      <div className="text-text-tertiary my-1 text-sm leading-5">
        {
          'Please note, once confirmed, as the Owner of any Workspaces, your workspaces will be scheduled in a queue for permanent deletion, and all your user data will be queued for permanent deletion.'
        }
      </div>
      <div className="flex items-center justify-end pt-6">
        <Button className="mr-2" onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button className="border-red-700" variant="warning" onClick={onConfirm}>
          {'Delete'}
        </Button>
      </div>
    </Modal>
  );
};

export default TagRemoveModal;
