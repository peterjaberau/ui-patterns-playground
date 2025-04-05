'use client';
import type { FC } from 'react';
import React, { useState } from 'react';

import Modal from '@base/modal';
import Button from '@base/button';
import Input from '@base/input';

export type IRenameModalProps = {
  isShow: boolean;
  saveLoading: boolean;
  name: string;
  onClose: () => void;
  onSave: (name: string) => void;
};

const RenameModal: FC<IRenameModalProps> = ({ isShow, saveLoading, name, onClose, onSave }) => {
  const [tempName, setTempName] = useState(name);

  return (
    <Modal title={'Rename conversation'} isShow={isShow} onClose={onClose}>
      <div className={'text-text-primary mt-6 text-sm font-medium leading-[21px]'}>{'Conversation name'}</div>
      <Input
        className="mt-2 h-10 w-full"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        placeholder={'Please input conversation name'}
      />

      <div className="mt-10 flex justify-end">
        <Button className="mr-2 shrink-0" onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button variant="primary" className="shrink-0" onClick={() => onSave(tempName)} loading={saveLoading}>
          {'Save'}
        </Button>
      </div>
    </Modal>
  );
};
export default React.memo(RenameModal);
