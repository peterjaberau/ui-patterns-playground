import type React from 'react';

import { getCategories } from '@/app/api/categories/getCategories';
import { CounterProvider } from '@/app/context/counter-context';
import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';

import ContextClickCounter from './context-click-counter';

const title = 'Client Context';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <Boundary animateRerendering={false} labels={['Server Component Boundary']} size="small">
      <Boundary
        animateRerendering={false}
        color="blue"
        labels={['Counter Context Provider [Client Component]']}
        size="small"
      >
        <CounterProvider>
          <Boundary animateRerendering={false} labels={['Server Component Boundary']} size="small">
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  items={[
                    {
                      text: 'Home',
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                  path="/context"
                />
              </div>

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}
