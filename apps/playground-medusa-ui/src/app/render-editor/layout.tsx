export default function RenderEditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      RenderEditorLayout
      <div className="relative h-3/4 w-3/4 rounded-lg bg-white p-6">{children}</div>
    </div>
  );
}
