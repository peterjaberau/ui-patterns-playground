'use client';
import React from 'react';

import { RiAddLine } from '@remixicon/react';
import Button from '@base/button';
import VariableModal from '@workflow/panel/env-panel/variable-modal';
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@base/portal-to-follow-elem';
import type { EnvironmentVariable } from '@workflow/types';

type Props = {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  env?: EnvironmentVariable;
  onClose: () => void;
  onSave: (env: EnvironmentVariable) => void;
};

const VariableTrigger = ({ open, setOpen, env, onClose, onSave }: Props) => {
  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={() => {
        setOpen((v) => !v);
        open && onClose();
      }}
      placement="left-start"
      offset={{
        mainAxis: 8,
        alignmentAxis: -104,
      }}
    >
      <PortalToFollowElemTrigger
        onClick={() => {
          setOpen((v) => !v);
          open && onClose();
        }}
      >
        <Button variant="primary">
          <RiAddLine className="mr-1 h-4 w-4" />
          <span className="system-sm-medium">{t('workflow.env.envPanelButton')}</span>
        </Button>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent className="z-[11]">
        <VariableModal
          env={env}
          onSave={onSave}
          onClose={() => {
            onClose();
            setOpen(false);
          }}
        />
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
};

export default VariableTrigger;
