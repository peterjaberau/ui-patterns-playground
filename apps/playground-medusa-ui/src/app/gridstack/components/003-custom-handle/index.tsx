'use client';
import { Toolbar } from '@/app/gridstack/components/002-nested';
import { GridStackExampleContainerProps } from '@/app/gridstack/components/common/types';
import { GridStackOptions } from 'gridstack';
import { useState } from 'react';
import { CUSTOM_DRAGGABLE_HANDLE_CLASSNAME, defaultGridOptions } from '../../default-grid-options';
import { GridStackHandleReInitializer, GridStackItem, GridStackProvider, GridStackRender } from '@/ui/gridstack';
import { ItemContent } from '@/app/gridstack/components/common/ItemContent';
import { Header } from '@/components/common/header';
import { Button, Container } from '@medusajs/ui';

export function CustomHandle(props: GridStackExampleContainerProps) {
  const [uncontrolledInitialOptions] = useState<GridStackOptions>(() => ({
    ...defaultGridOptions,
    children: [{ id: '003-item1', h: 2, w: 2, x: 0, y: 0 }],
  }));
  const { title, subtitle, id, ...rest } = props;

  return (
    <GridStackProvider initialOptions={uncontrolledInitialOptions}>
      <Container className="p-0" {...rest}>
        <Header id={id} title={title} subtitle={subtitle} />

        <GridStackRender>
          <GridStackItem id="003-item1">
            <ItemContent>Custom Handle</ItemContent>

            {/* Experimental: Render item with custom handle */}
            <GridStackHandleReInitializer>
              <button className={CUSTOM_DRAGGABLE_HANDLE_CLASSNAME}>Handle ONLY HERE</button>
            </GridStackHandleReInitializer>
          </GridStackItem>
        </GridStackRender>
      </Container>
    </GridStackProvider>
  );
}
