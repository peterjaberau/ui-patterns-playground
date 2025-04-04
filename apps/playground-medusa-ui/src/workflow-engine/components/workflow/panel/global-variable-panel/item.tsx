import { memo } from 'react';
import { capitalize } from 'lodash-es';
import { Env } from '@base/icons/src/vender/line/others';
import type { GlobalVariable } from '@workflow/types';
import cn from '@/utils/classnames';

type Props = {
  payload: GlobalVariable;
};

const Item = ({ payload }: Props) => {
  return (
    <div
      className={cn(
        'radius-md border-components-panel-border-subtle bg-components-panel-on-panel-item-bg shadow-xs hover:bg-components-panel-on-panel-item-bg-hover mb-1 border px-2.5 py-2',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex grow items-center gap-1">
          <Env className="text-util-colors-violet-violet-600 h-4 w-4" />
          <div className="system-sm-medium text-text-primary">{payload.name}</div>
          <div className="system-xs-medium text-text-tertiary">{capitalize(payload.value_type)}</div>
        </div>
      </div>
      <div className="system-xs-regular text-text-tertiary truncate">{payload.description}</div>
    </div>
  );
};

export default memo(Item);
