import type { ActorRefFrom } from 'xstate';
import { createActorReferenceContext } from './hooks';
import { rootMachine, pickerMachine } from './machines';

export const {
  ActorRefProvider: ResourcePickerRefProvider,
  useActorRefContext: useResourcePickerRefContext,
  useActorRefSelector: useResourcePickerRefSelector,
} = createActorReferenceContext<ActorRefFrom<typeof pickerMachine>>();

export const {
  ActorRefProvider: RootProvider,
  useActorRefContext: useRootRef,
  useActorRefSelector: useRootSelector,
} = createActorReferenceContext<ActorRefFrom<typeof rootMachine>>();
