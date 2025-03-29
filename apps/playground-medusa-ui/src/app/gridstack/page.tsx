import { Simple0 } from './components/000-simple';
import { Simple } from './components/001-simple';
import { Nested } from './components/002-nested';
import { CustomHandle } from './components/003-custom-handle';
import { Advanced } from './components/009-advanced';
import { DragIn } from './components/004-drag-in';

export default function Page() {
  return (
    <div>
      <h2 id="simple0">Simple</h2>
      <p>Render content by GridStackItem with id selector.</p>
      <Simple0 />
      <h2 id="simple">Simple With Toolbar</h2>
      <p>With toolbar</p>
      <Simple />
      <h2 id="nested">Nested</h2>
      <p>Only use gridstack.js native subGridOpts.</p>
      <Nested />
      <h2>Custom Handle</h2>
      <CustomHandle />
      <h2 id="drag-in">Drag In (Copy)</h2>
      <DragIn />
      <h2 id="advanced">Advanced</h2>
      <Advanced />
    </div>
  );
}
