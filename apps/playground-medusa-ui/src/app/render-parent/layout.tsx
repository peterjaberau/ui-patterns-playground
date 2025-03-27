export default function RenderParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>RenderParentLayout</h1>
      {children}
    </div>
  );
}
