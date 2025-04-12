'use client';

import { memo, useContext } from 'react';
import NodeContainer from '../../components/NodeContainer';
import { ConfigContext } from '../../models/context';

import { VariableIcon, TypeIcon } from 'lucide-react';

export default memo((props: any) => {
  const { onClick, type, data } = props;

  const { settingMap, widgets, iconFontUrl, globalConfig }: any = useContext(ConfigContext);
  const nodeSetting = settingMap[type] || {};
  const NodeWidget = widgets[nodeSetting?.nodeWidget] || undefined;
  const nodeDescription = nodeSetting?.description || '';
  const hideDesc = nodeSetting?.nodePanel?.hideDesc ?? globalConfig?.nodePanel?.hideDesc ?? false;
  const hideTitleTips = globalConfig?.nodeView?.hideTitleTips ?? false;

  //dify
  const { variables } = data;
  if (!variables.length) return null;

  return (
    <>
      <div className="mb-1 px-3 py-1">
        <div className="space-y-0.5">
          {variables.map((variable: any) => (
            <div
              key={variable.variable}
              className="flex h-6 items-center justify-between space-x-1 rounded-md bg-gray-100 px-1 text-xs font-normal text-gray-700"
            >
              <div className="flex w-0 grow items-center space-x-1">
                <VariableIcon className="text-primary-500 h-3.5 w-3.5 shrink-0" />
                <span className="w-0 grow truncate text-xs font-normal text-gray-700">{variable.variable}</span>
              </div>

              <div className="ml-1 flex items-center space-x-1">
                {variable.required && <span className="text-xs font-normal uppercase text-gray-500">{'REQUIRED'}</span>}
                <TypeIcon className="h-3 w-3 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <NodeContainer
        className="custom-node-code"
        title={data?.title || nodeSetting?.title || 'Start'}
        icon={{
          type: nodeSetting?.icon?.type || 'icon-start',
          style: { fontSize: 14, color: '#ffffff' },
          // bgColor: nodeSetting?.icon?.bgColor || '#17b26a',
          background: nodeSetting?.icon?.bgColor || '#17b26a',
        }}
        onClick={onClick}
        hideDesc={hideDesc}
        desc={data?.desc}
        NodeWidget={NodeWidget ? <NodeWidget data={data} /> : undefined}
        iconFontUrl={iconFontUrl}
        description={nodeDescription} // Node description that does not allow users to change
        iconSvg={nodeSetting?.iconSvg}
        hideTitleTips={hideTitleTips}
        nodeSettingTitle={nodeSetting?.title || 'Start'}
      />
    </>
  );
});
