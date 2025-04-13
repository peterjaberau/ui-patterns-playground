'use client';
import { CodeBlock, Label } from '@medusajs/ui';
export function ComponentRenderer(props: any) {
  const snippets: any[] = [
    {
      label: 'ComponentRenderer.tsx',
      code: JSON.stringify(props, null, 2),
      language: 'json',
    },
  ];

  return (
    <>
      <div className="w-full">
        <CodeBlock snippets={snippets}>
          <CodeBlock.Header />
          <CodeBlock.Body />
        </CodeBlock>
      </div>
    </>
  );
}
