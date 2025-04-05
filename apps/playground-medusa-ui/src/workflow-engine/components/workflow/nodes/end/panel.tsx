import type { FC } from 'react';
import React from 'react';

import useConfig from './use-config';
import type { EndNodeType } from './types';
import VarList from '@workflow/nodes/_base/components/variable/var-list';
import Field from '@workflow/nodes/_base/components/field';
import AddButton from '@base/button/add-button';
import type { NodePanelProps } from '@workflow/types';

const i18nPrefix = 'workflow.nodes.end';

const Panel: FC<NodePanelProps<EndNodeType>> = ({ id, data }) => {
  const { readOnly, inputs, handleVarListChange, handleAddVariable } = useConfig(id, data);

  const outputs = inputs.outputs;
  return (
    <div className="mt-2">
      <div className="space-y-4 px-4 pb-4">
        <Field
          title={t(`${i18nPrefix}.output.variable`)}
          operations={!readOnly ? <AddButton onClick={handleAddVariable} /> : undefined}
        >
          <VarList nodeId={id} readonly={readOnly} list={outputs} onChange={handleVarListChange} />
        </Field>
      </div>
    </div>
  );
};

export default React.memo(Panel);
