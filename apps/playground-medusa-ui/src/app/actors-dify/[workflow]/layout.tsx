export default async function Layout(props: { children: React.ReactNode; params: Promise<{ workflow: string }> }) {
  const params = await props.params;

  const { children } = props;

  return (
    <>
      <div>[workflow].layout</div>
      <div>workflow: {params.workflow}</div>
      {children}
    </>
  );
}
