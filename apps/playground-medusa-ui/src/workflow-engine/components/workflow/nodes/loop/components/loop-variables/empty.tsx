import { useTranslation } from 'react-i18next';

const Empty = () => {
  const { t } = useTranslation();

  return (
    <div className="system-xs-regular bg-background-section text-text-tertiary flex h-10 items-center justify-center rounded-[10px]">
      {t('workflow.nodes.loop.setLoopVariables')}
    </div>
  );
};

export default Empty;
