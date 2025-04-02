'use client';
import { ActorInstancesSection } from '@/routes/actor-picker/components/actor-instances-section';
import App from './resource-picker/App';

export const Actors = () => {
  return <App />;
};

/*


 'use client';
 import { ActorInstancesSection } from '@/routes/actors/components/actor-instances-section';
 import { createActor } from 'xstate';
 import { ActorScenePreview, ActorSpecsSection } from '@/routes/actors/components/general';
 import { ActorGeneralSection } from './components/general/actor-general-section';
 import { useLoader, useScenarioById } from './loader';
 import { ActorsContext } from './machine/ActorsContext';
 import { actorsLogic } from './machine/actors.machine';

 export const Actors = () => {
 const scenarios = useLoader();

 const actors = createActor(actorsLogic).start();

 const { scenario, isLoading, isError, error } = useScenarioById('id-default');

 return (
 <ActorsContext.Provider value={{ actors: actors }}>
 <div className="flex w-full flex-col gap-y-3">
 <div className="flex w-full flex-col items-start gap-x-4 gap-y-3 xl:grid xl:grid-cols-4">
 <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
 <ActorInstancesSection />
 <ActorGeneralSection scenario={scenario} />
 </div>

 <div className="col-span-3 flex w-full flex-col gap-y-3 xl:mt-0">
 <div className="flex w-full flex-col items-start gap-x-4 gap-y-3 xl:grid xl:grid-cols-3">
 <div className="col-span-3">
 <ActorScenePreview scenario={scenario} />
 </div>
 <div className="col-span-1">
 <ActorSpecsSection scenario={scenario} />
 </div>
 <div className="col-span-1">
 <ActorSpecsSection scenario={scenario} />
 </div>
 <div className="col-span-1">
 <ActorSpecsSection scenario={scenario} />
 </div>
 </div>
 </div>
 </div>
 </div>
 </ActorsContext.Provider>
 );
 };



 */
