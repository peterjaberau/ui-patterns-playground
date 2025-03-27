'use client';
import { useRouter } from 'next/navigation';

export default function RenderEditorPage() {
  const router = useRouter();

  return (
    <div>
      <h2>RenderEditorPage</h2>
      <button className="absolute right-2 top-2" onClick={() => router.back()}>
        ✖ Close
      </button>
    </div>
  );
}
