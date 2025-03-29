'use client';
import { Toolbar } from '@/app/gridstack/components/002-nested';
import { GridStackExampleContainerProps } from '@/app/gridstack/components/common/types';
import { GridStackOptions } from 'gridstack';
import { useState } from 'react';
import { defaultGridOptions } from '../../default-grid-options';
import { GridStackItem, GridStackDragInItem } from '@/ui/gridstack';
import { GridStackContainer } from '@/ui/gridstack/grid-stack-container';
import { ItemContent } from '@/app/gridstack/components/common/ItemContent';
import { Header } from '@/components/common/header';
import { Button, Container } from '@medusajs/ui';

export function DragIn(props: GridStackExampleContainerProps) {
  const [uncontrolledInitialOptions] = useState<GridStackOptions>(() => ({
    ...defaultGridOptions,
    children: [
      { id: '004-item1', h: 2, w: 2, x: 0, y: 0 },
      { id: '004-item2', h: 2, w: 2, x: 2, y: 0 },
    ],
  }));
  const { title, subtitle, id, ...rest } = props;

  return (
    <Container className="p-0" {...rest}>
      <Header id={id} title={title} subtitle={subtitle}>
        <GridStackDragInItem widget={{ h: 2, w: 4 }}>
          <ItemContent className="h-full rounded-md bg-amber-400 p-1">Drag me add to the grid</ItemContent>
        </GridStackDragInItem>
      </Header>

      <GridStackContainer initialOptions={uncontrolledInitialOptions}>
        <GridStackItem id="004-item1">
          <ItemContent>hello</ItemContent>
        </GridStackItem>

        <GridStackItem id="004-item2">
          <ItemContent>grid</ItemContent>
        </GridStackItem>
      </GridStackContainer>
    </Container>
  );
}
