import { useActorRef } from '@xstate/react';
import { ActorOptions, AnyActorLogic } from 'xstate';
import { rootMachine } from './root.machine';
import { ActorProvider } from './context';
import { ActorRendererPage } from './actor.renderer.page';

interface ActorRendererRootProps {
  children: React.ReactNode;
  actorOptions: ActorOptions<AnyActorLogic> | undefined | any;
}

export const ActorRendererRoot = ({ children, actorOptions }: ActorRendererRootProps) => {
  const rootActorRef = useActorRef(rootMachine, actorOptions);
  return <ActorProvider value={rootActorRef}>{children}</ActorProvider>;
};
