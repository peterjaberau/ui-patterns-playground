import { Heading } from '@medusajs/ui';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none p-3">
      <Heading className="text-xl font-bold">Products Page</Heading>

      <ul>
        <li>column1</li>
        <li>column2</li>
      </ul>
    </div>
  );
}
