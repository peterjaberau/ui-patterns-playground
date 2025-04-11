export default async function Page(props: { params: Promise<{ workflow: string }> }) {
  const params = await props.params;

  return (
    <>
      <div>[workflow].page</div>
      <div>workflow: {params.workflow}</div>
    </>
  );
}
