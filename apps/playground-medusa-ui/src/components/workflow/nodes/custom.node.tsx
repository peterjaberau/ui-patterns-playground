const CustomNode = (props: NodeProps) => {
  const nodeData = props.data;
  const NodeComponent = NodeComponentMap[nodeData.type];

  return (
    <>
      <BaseNode {...props}>
        <NodeComponent />
      </BaseNode>
    </>
  );
};
CustomNode.displayName = 'CustomNode';

export const Panel = memo((props: Node) => {
  const nodeClass = props.type;
  const nodeData = props.data;
  const PanelComponent = useMemo(() => {
    if (nodeClass === CUSTOM_NODE) return PanelComponentMap[nodeData.type];

    return () => null;
  }, [nodeClass, nodeData.type]);

  if (nodeClass === CUSTOM_NODE) {
    return (
      <BasePanel key={props.id} {...props}>
        <PanelComponent />
      </BasePanel>
    );
  }

  return null;
});

Panel.displayName = 'Panel';

export default memo(CustomNode);
