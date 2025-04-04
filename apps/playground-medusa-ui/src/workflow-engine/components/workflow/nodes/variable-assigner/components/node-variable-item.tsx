import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/utils/classnames';
import { VarBlockIcon } from '@workflow/block-icon';
import { Line3 } from '@base/icons/src/public/common';
import { Variable02 } from '@base/icons/src/vender/solid/development';
import { BubbleX, Env } from '@base/icons/src/vender/line/others';
import Badge from '@base/badge';
import type { Node } from '@workflow/types';

type NodeVariableItemProps = {
  isEnv: boolean;
  isChatVar: boolean;
  node: Node;
  varName: string;
  writeMode?: string;
  showBorder?: boolean;
  className?: string;
  isException?: boolean;
};

const i18nPrefix = 'workflow.nodes.assigner';

const NodeVariableItem = ({
  isEnv,
  isChatVar,
  node,
  varName,
  writeMode,
  showBorder,
  className,
  isException,
}: NodeVariableItemProps) => {
  const { t } = useTranslation();

  const VariableIcon = useMemo(() => {
    if (isEnv) {
      return <Env className="text-util-colors-violet-violet-600 h-3.5 w-3.5 shrink-0" />;
    }

    if (isChatVar) {
      return <BubbleX className="text-util-colors-teal-teal-700 h-3.5 w-3.5 shrink-0" />;
    }

    return <Variable02 className={cn('text-text-accent h-3.5 w-3.5 shrink-0', isException && 'text-text-warning')} />;
  }, [isEnv, isChatVar, isException]);

  const VariableName = useMemo(() => {
    return (
      <div
        className={cn(
          'system-xs-medium text-text-accent ml-0.5 shrink truncate',
          isEnv && 'text-gray-900',
          isException && 'text-text-warning',
          isChatVar && 'text-util-colors-teal-teal-700',
        )}
        title={varName}
      >
        {varName}
      </div>
    );
  }, [isEnv, isChatVar, varName, isException]);
  return (
    <div
      className={cn(
        'bg-workflow-block-parma-bg relative flex items-center gap-1 self-stretch rounded-md p-[3px] pl-[5px]',
        showBorder && '!bg-black/[0.02]',
        className,
      )}
    >
      <div className="flex w-0 grow items-center">
        {node && (
          <>
            <div className="shrink-0 p-[1px]">
              <VarBlockIcon className="!text-gray-900" type={node.data.type} />
            </div>
            <div className="mx-0.5 shrink-[1000] truncate text-xs font-medium text-gray-700" title={node?.data.title}>
              {node?.data.title}
            </div>
            <Line3 className="mr-0.5 shrink-0"></Line3>
          </>
        )}
        {VariableIcon}
        {VariableName}
      </div>
      {writeMode && <Badge className="shrink-0" text={t(`${i18nPrefix}.operations.${writeMode}`)} />}
    </div>
  );
};

export default memo(NodeVariableItem);
