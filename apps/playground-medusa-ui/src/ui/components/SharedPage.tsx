import Link from 'next/link';
import { RefreshButton } from './RefreshButton';
import { NavigationGuardToggle } from './NavigationGuardToggle';
import { BackButton } from './BackButton';
import { ForwardButton } from './ForwardButton';
import { Button, Container, Heading } from '@medusajs/ui';

export function SharedPage({ current, mode }: { current: number; mode: 'appRouter' | 'pagesRouter' }) {
  return (
    <Container>
      <Heading>next-navigation-guard Example</Heading>
      <div>
        Current Page: {mode} {current}
      </div>
      <div style={{ display: 'flex', gap: 48 }}>
        <Container>
          <Heading>App Router</Heading>
          <div className="flex flex-col justify-start gap-4 p-3">
            <Link href={'/guard/page1'}>
              <Button size="small" variant="secondary">
                Page1
              </Button>
            </Link>
            <Link href={'/guard/page2'}>
              <Button size="small" variant="secondary">
                Page2
              </Button>
            </Link>
            <Link href={'/guard/page3'}>
              <Button size="small" variant="secondary">
                Page3
              </Button>
            </Link>
          </div>
        </Container>
        <Container>
          <Heading>Pages Router</Heading>
          <div className="flex flex-col justify-start gap-4 p-3">
            <Link href={'/pages-router/page1'}>
              <Button size="small" variant="secondary">
                Page1
              </Button>
            </Link>
            <Link href={'/pages-router/page2'}>
              <Button size="small" variant="secondary">
                Page2
              </Button>
            </Link>
            <Link href={'/pages-router/page3'}>
              <Button size="small" variant="secondary">
                Page3
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      <div>
        <NavigationGuardToggle confirm="You have unsaved changes that will be lost." />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <span>
          <RefreshButton />
        </span>
        <span>
          <BackButton />
        </span>
        <span>
          <ForwardButton />
        </span>
      </div>
    </Container>
  );
}
