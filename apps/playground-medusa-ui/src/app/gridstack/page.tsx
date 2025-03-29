import { Header } from '@/components/common/header';
import { Simple0 } from './components/000-simple';
import { Simple } from './components/001-simple';
import { Nested } from './components/002-nested';
import { CustomHandle } from './components/003-custom-handle';
import { Advanced } from './components/009-advanced';
import { DragIn } from './components/004-drag-in';
import { Badge, Container, Heading, Text } from '@medusajs/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Container className={'col-span-2 p-0'}>
        <Header title="Advanced" id="advanced" />
        <Advanced />
      </Container>

      <Simple0 title="Gridstack" subtitle={'Render content by GridStackItem with id selector.'} id="simple0" />

      <Simple title="With toolbar" id="simple" />

      <Nested title="Nested" subtitle={'Only use gridstack.js native subGridOpts.'} id="nested" />

      <CustomHandle title="Custom Handle" id="custom-handle" />

      <DragIn title="Drag In (Copy)" id="drag-in" />
    </div>
  );
}
