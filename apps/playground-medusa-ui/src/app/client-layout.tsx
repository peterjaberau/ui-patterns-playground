'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// Client Layout for rendering the editor conditionally
export default function ClientLayout() {
  const pathname = usePathname();
  const [showEditor, setShowEditor] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    // Check if the current path is a valid edit path
    setShowEditor(pathname.includes('/render-editor'));

    if (pathname.endsWith('render-editor')) {
      // navigate.push
      // Scroll to top when entering editor
    }
  }, [pathname]);

  if (showEditor) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative h-3/4 w-3/4 rounded-lg bg-white p-6">{children}</div>
      </div>
    );
  }

  return <>{children}</>; // Render normal content if not on edit path
}
