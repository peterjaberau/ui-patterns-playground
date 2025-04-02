'use client';
import { useRouter } from 'next/navigation';
import { Drawer, FocusModal } from '@medusajs/ui';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams, useParams } from 'next/navigation';

interface RendererTypeProps {
  children: React.ReactNode;
  as?: 'modal' | 'drawer' | 'container' | 'page' | 'split';
  title?: string;
  description?: string;
  footer?: string;
  [key: string]: any;
}

const DrawerTypeRenderer = (props: RendererTypeProps) => {
  const { title, description, footer, children, ...rest } = props;
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    router.back();
  };

  return (
    <Drawer open={true} onOpenChange={handleOpenChange}>
      <Drawer.Content>
        <Drawer.Header>
          {title && <FocusModal.Title>{title}</FocusModal.Title>}
          {description && <FocusModal.Description>{description}</FocusModal.Description>}
        </Drawer.Header>
        <Drawer.Body>{children}</Drawer.Body>
        <Drawer.Footer>{footer}</Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
};

const ModalTypeRenderer = (props: RendererTypeProps) => {
  const { title, description, footer, children, ...rest } = props;
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    router.back();
  };

  return (
    <FocusModal open={true} onOpenChange={handleOpenChange}>
      <FocusModal.Content>
        <FocusModal.Header>
          {title && <FocusModal.Title>{title}</FocusModal.Title>}
          {description && <FocusModal.Description>{description}</FocusModal.Description>}
        </FocusModal.Header>
        <FocusModal.Body>{children}</FocusModal.Body>
        <FocusModal.Footer>{footer}</FocusModal.Footer>
      </FocusModal.Content>
    </FocusModal>
  );
};

interface RendererProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function Renderer(props: RendererProps) {
  const { children, ...rest } = props;

  const possibleModes = ['modal', 'drawer', 'container', 'page', 'split'];

  const [mode, setMode]: any = useState('drawer');
  const searchParams: any = useSearchParams();

  useEffect(() => {
    if (searchParams?.has('mode') && possibleModes.includes(searchParams.get('mode'))) {
      setMode(searchParams.get('mode'));
    } else {
      setMode('drawer');
    }
  }, [searchParams]);

  switch (mode) {
    case 'modal':
      return <ModalTypeRenderer {...rest}>{children}</ModalTypeRenderer>;
    case 'drawer':
      return <DrawerTypeRenderer {...rest}>{children}</DrawerTypeRenderer>;
    default:
      return <DrawerTypeRenderer {...rest}>{children}</DrawerTypeRenderer>;
  }
}
