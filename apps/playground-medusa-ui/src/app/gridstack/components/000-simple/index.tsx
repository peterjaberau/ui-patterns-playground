'use client';
import { GridStackItem } from '@/ui/gridstack';
import { GridStackOptions } from 'gridstack';
import { useState } from 'react';
import { defaultGridOptions } from '../../default-grid-options';
import { GridStackContainer } from '@/ui/gridstack/grid-stack-container';
import { ItemContent } from '@/app/gridstack/components/common/ItemContent';
import { Header } from '@/components/common/header';
import { Container } from '@medusajs/ui';
import { GridStackExampleContainerProps } from '../../components/common/types';

export function Simple0(props: GridStackExampleContainerProps) {
  const { title, subtitle, id, ...rest } = props;

  const [uncontrolledInitialOptions] = useState<GridStackOptions>(() => ({
    ...defaultGridOptions,
    children: [
      { id: '000-item1', h: 2, w: 2, x: 0, y: 0 },
      { id: '000-item2', h: 2, w: 2, x: 2, y: 0 },
    ],
  }));

  return (
    <Container className="p-0" {...rest}>
      <Header id={id} title={title} subtitle={subtitle} />
      <GridStackContainer initialOptions={uncontrolledInitialOptions}>
        <GridStackItem id="000-item1">
          <ItemContent>grid</ItemContent>
        </GridStackItem>
        <GridStackItem id="000-item2">
          <ItemContent>grid</ItemContent>
        </GridStackItem>
      </GridStackContainer>
    </Container>
  );
}
