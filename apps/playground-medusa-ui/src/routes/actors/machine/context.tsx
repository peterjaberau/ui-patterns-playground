import type { ActorRefFrom } from 'xstate';
import { createActorReferenceContext } from './hooks';
import { rootMachine } from './root.machine';
import { pickerMachine } from './picker.machine';

export const {
  ActorRefProvider: ResourcePickerRefProvider,
  useActorRefContext: useResourcePickerRefContext,
  useActorRefSelector: useResourcePickerRefSelector,
} = createActorReferenceContext<ActorRefFrom<typeof pickerMachine>>();

export const {
  ActorRefProvider: ActorProvider,
  useActorRefContext: useActorRootRef,
  useActorRefSelector: useActorRootSelector,
} = createActorReferenceContext<ActorRefFrom<typeof rootMachine>>();
