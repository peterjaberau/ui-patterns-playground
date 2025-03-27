'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function useIsEditorOpen() {
  const pathname = usePathname();
  return pathname.includes('/edit') ? 'Editor is open' : 'Editor is closed';
}

export default function RenderParentPage() {
  const pathname = usePathname();

  // Usage:
  const isEditorOpen = useIsEditorOpen();
  console.log('Is editor open?', isEditorOpen);

  return (
    <div>
      <p>RenderParentPage</p>
      <p>Current Editor State: {isEditorOpen}</p>
      <Link href={`${pathname}/edit`} className="button">
        Open Editor
      </Link>
    </div>
  );
}
