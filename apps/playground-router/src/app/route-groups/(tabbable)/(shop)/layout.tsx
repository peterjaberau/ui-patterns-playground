import { Boundary } from '@/ui/boundary';
import { ClickCounter } from '@/ui/click-counter';
import { GlobalLayoutSection } from '@/ui/global-layout-section';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['shop layout']} color="cyan" animateRerendering={false}>
      <GlobalLayoutSection>
        <div className="space-y-9">
          <div className="flex justify-between">
            <div className="self-start">
              <ClickCounter />
            </div>
          </div>

          <div>{children}</div>
        </div>
      </GlobalLayoutSection>
    </Boundary>
  );
}
