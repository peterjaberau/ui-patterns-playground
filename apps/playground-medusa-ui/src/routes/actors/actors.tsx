'use client';
import { SectionRow } from '@/components/common/section';
import {
  ActorConfigAppearance,
  ActorConfigContent,
  ActorConfigGeneral,
  ActorDesignSchema,
  ActorDesignSchemaRef,
  ActorEditorChildren,
  ActorEditorEventHandler,
  // ActorEditorFlow,
  ActorEditorMetadata,
  ActorEditorRules,
  ActorInstance,
  ActorInstances,
  ActorToolsCommandBar,
  ActorViewerCatalog,
  ActorViewerComponent,
  ActorViewerDependencies,
  ActorViewerHierarchy,
  ActorViewerHistory,
  ActorViewerSpecs,
  ActorViewerState,
  ActorViewerVariants,
} from '@/routes/actors/components';
import { ActorRendererPage } from '@/routes/actors/machine/actor.renderer.page';
import { ActorRendererRoot } from '@/routes/actors/machine/actor.renderer.root';

export const Actors = () => {
  return (
    <>
      <ActorRendererRoot actorOptions={undefined}>
        <ActorRendererPage>
          <div className="flex w-full flex-col gap-y-3">
            <div className="flex w-full flex-col items-start gap-x-4 gap-y-3 xl:grid xl:grid-cols-4">
              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerCatalog />
              </div>
              <div className="col-span-2 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerComponent />
              </div>
              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorToolsCommandBar />
              </div>
              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorInstances />
              </div>

              <div className="col-span-1 flex h-full w-full min-w-0 flex-col gap-y-3">
                <ActorConfigGeneral />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorConfigContent />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorConfigAppearance />
              </div>

              {/* <div className="col-span-4 flex w-full min-w-0 flex-col gap-y-3"> */}
              {/*   <ActorEditorFlow /> */}
              {/* </div> */}

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerState />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerSpecs />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerVariants />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerDependencies />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerHierarchy />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorViewerHistory />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorEditorMetadata />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorEditorChildren />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorEditorEventHandler />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorEditorRules />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorDesignSchema />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorDesignSchemaRef />
              </div>

              <div className="col-span-1 flex w-full min-w-0 flex-col gap-y-3">
                <ActorInstance />
              </div>
            </div>
          </div>
        </ActorRendererPage>
      </ActorRendererRoot>
    </>
  );
};
