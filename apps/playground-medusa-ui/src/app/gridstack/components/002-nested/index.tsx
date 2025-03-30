'use client';
import { ItemWrapper } from '@/app/gridstack/components/common/ItemWrapper';
import { GridStackOptions } from 'gridstack';
import { useState } from 'react';
import { defaultGridOptions } from '../../default-grid-options';
import { GridStackItem, GridStackProvider, GridStackRender, useGridStackContext } from '@/ui/gridstack';
import { newId } from '../../utils';
import { ItemContent } from '@/app/gridstack/components/common/ItemContent';
import { Header } from '@/components/common/header';
import { Button, Container } from '@medusajs/ui';
import { GridStackExampleContainerProps } from '../../components/common/types';

export function Nested(props: GridStackExampleContainerProps) {
  const [uncontrolledInitialOptions] = useState<GridStackOptions>(() => ({
    ...defaultGridOptions,
    children: [
      { id: '002-item1', h: 2, w: 2, x: 0, y: 0 },
      { id: '002-item2', h: 2, w: 2, x: 2, y: 0 },
      {
        id: '002-sub-grid-1',
        h: 5,
        sizeToContent: true,
        subGridOpts: {
          children: [
            {
              id: '002-sub-grid-1-title',
              locked: true,
              noMove: true,
              noResize: true,
              w: 12,
              x: 0,
              y: 0,
              content: 'Sub Grid 1',
            },
            { id: '002-item3', h: 2, w: 2, x: 0, y: 1 },
            { id: '002-item4', h: 2, w: 2, x: 2, y: 0 },
          ],
        },
        w: 12,
        x: 0,
        y: 2,
      },
    ],
  }));
  const { title, subtitle, id, ...rest } = props;

  return (
    <GridStackProvider initialOptions={uncontrolledInitialOptions}>
      <Container className="p-0" {...rest}>
        <Header id={id} title={title} subtitle={subtitle}>
          <Toolbar />
        </Header>

        <GridStackRender>
          <GridStackItem wrapper={<ItemWrapper />} id="002-item1">
            <ItemContent>grid</ItemContent>
          </GridStackItem>
          <GridStackItem wrapper={<ItemWrapper />} id="002-item2">
            <ItemContent>grid</ItemContent>
          </GridStackItem>
          <GridStackItem wrapper={<ItemWrapper />} id="002-item3">
            <ItemContent>nested one</ItemContent>
          </GridStackItem>
          <GridStackItem wrapper={<ItemWrapper />} id="002-item4">
            <ItemContent>nested two</ItemContent>
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

  function handleAddSubGrid() {
    const subGridId = newId();
    const item1Id = newId();
    const item2Id = newId();
    addWidget({
      id: 'sub-grid-' + subGridId,
      h: 5,
      sizeToContent: true,
      subGridOpts: {
        children: [
          {
            id: 'sub-grid-' + subGridId + '-title',
            locked: true,
            noMove: true,
            noResize: true,
            w: 12,
            x: 0,
            y: 0,
            content: 'Sub Grid ' + subGridId,
          },
          { id: item1Id, h: 2, w: 2, x: 0, y: 1, content: 'item' + item1Id },
          { id: item2Id, h: 2, w: 2, x: 2, y: 0, content: 'item' + item2Id },
        ],
      },
      w: 4,
      x: 0,
      y: 0,
    });
  }

  return (
    <div className="flex flex-row items-center justify-start gap-x-4">
      <Button
        size="small"
        variant="secondary"
        onClick={() => {
          handleAddText(2, 2);
        }}
      >
        Add Text (2x2)
      </Button>
      <Button
        size="small"
        variant="secondary"
        onClick={() => {
          handleAddSubGrid();
        }}
      >
        Add Sub Grid (4x5)
      </Button>
    </div>
  );
}
