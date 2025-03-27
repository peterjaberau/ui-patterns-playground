import { ExternalLink } from '@/ui/external-link';
import { Heading } from '@medusajs/ui';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none p-3">
      <Heading className="text-xl font-bold">Layouts</Heading>

      <ul>
        <li>
          A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain
          interactive, and do not re-render. Two or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>

      <div className="flex gap-2 py-3">
        <ExternalLink href="https://nextjs.org/docs/app/getting-started/layouts-and-pages">Docs</ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">Code</ExternalLink>
      </div>
    </div>
  );
}
