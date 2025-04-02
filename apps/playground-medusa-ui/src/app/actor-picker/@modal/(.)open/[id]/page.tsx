import { Renderer } from './modal';
import { ComponentRenderer } from './ComponentRenderer';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  console.log('params', params);
  return (
    id && (
      <>
        <Renderer title={`Inspect ${id}`}>
          <ComponentRenderer id={id} />
        </Renderer>
      </>
    )
  );
}
