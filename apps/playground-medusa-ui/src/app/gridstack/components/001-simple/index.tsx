'use client';
import { ItemContent } from '@/app/gridstack/components/common/ItemContent';
import { ItemWrapper } from '@/app/gridstack/components/common/ItemWrapper';
import { Header } from '@/components/common/header';
import { Button, Container } from '@medusajs/ui';
import { GridStackExampleContainerProps } from '../../components/common/types';
import { GridStackOptions } from 'gridstack';
import { useState } from 'react';
import { defaultGridOptions } from '../../default-grid-options';
import { GridStackItem, GridStackProvider, GridStackRender, useGridStackContext } from '@/ui/gridstack';
import { newId } from '../../utils';

export function Simple(props: GridStackExampleContainerProps) {
  const { title, subtitle, id, ...rest } = props;
  const [uncontrolledInitialOptions] = useState<GridStackOptions>(() => ({
    ...defaultGridOptions,
    children: [
      { id: '001-item1', h: 2, w: 2, x: 0, y: 0 },
      { id: '001-item2', h: 2, w: 2, x: 2, y: 0 },
    ],
  }));

  return (
    <GridStackProvider initialOptions={uncontrolledInitialOptions}>
      <Container className="p-0" {...rest}>
        <Header id={id} title={title} subtitle={subtitle}>
          <Toolbar />
        </Header>
        <GridStackRender>
          <GridStackItem wrapper={<ItemWrapper />} id="001-item1">
            <ItemContent>grid</ItemContent>
          </GridStackItem>
          <GridStackItem wrapper={<ItemWrapper />} id="001-item2">
            <ItemContent>grid</ItemContent>
          </GridStackItem>
        </GridStackRender>
      </Container>
    </GridStackProvider>
  );
}

export function Toolbar() {
  const { addWidget } = useGridStackContext();

  function handleAddText(w: number, h: number) {
    const widgetId = newId();
    addWidget({ id: widgetId, w, h, x: 0, y: 0, content: 'text-' + widgetId });
  }

  return (
    <Button
      size="small"
      variant="secondary"
      onClick={() => {
        handleAddText(2, 2);
      }}
    >
      Add Text (2x2)
    </Button>
  );
}
