'use client';
import { useRouter } from 'next/navigation';
import { Drawer } from '@medusajs/ui';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <Drawer open={true} onOpenChange={onDismiss}>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body> {children}</Drawer.Body>
        <Drawer.Footer>Footer</Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
