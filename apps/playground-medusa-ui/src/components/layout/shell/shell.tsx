import { SidebarLeft, TriangleRightMini, XMark } from '@medusajs/icons';
import { IconButton, clx } from '@medusajs/ui';
import { AnimatePresence } from 'motion/react';
import { Dialog as RadixDialog } from 'radix-ui';
import { PropsWithChildren, ReactNode, useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useParams } from 'next/navigation';

import { KeybindProvider } from '../../../providers/keybind-provider';
import { useGlobalShortcuts } from '../../../providers/keybind-provider/hooks';
import { useSidebar } from '../../../providers/sidebar-provider';
import { ProgressBar } from '../../common/progress-bar';

export const Shell = ({ children, sidebar }: { children: ReactNode; sidebar?: ReactNode }) => {
  const globalShortcuts = useGlobalShortcuts();
  const [isPending, startTransition] = useTransition();

  return (
    <KeybindProvider shortcuts={globalShortcuts}>
      <div className="relative flex h-screen flex-col items-start overflow-hidden lg:flex-row">
        <NavigationBar loading={isPending} />
        <div>
          <MobileSidebarContainer sidebar={sidebar} />
          <DesktopSidebarContainer sidebar={sidebar} />
        </div>
        <div className="flex h-screen w-full flex-col overflow-auto">
          <Topbar />
          <main
            className={clx(
              'flex h-full w-full flex-col items-center overflow-y-auto transition-opacity delay-200 duration-200',
              {
                'opacity-25': isPending,
              },
            )}
          >
            <Gutter>{children}</Gutter>
          </main>
        </div>
      </div>
    </KeybindProvider>
  );
};

const NavigationBar = ({ loading }: { loading: boolean }) => {
  const [showBar, setShowBar] = useState(false);

  /**
   * If the loading state is true, we want to show the bar after a short delay.
   * The delay is used to prevent the bar from flashing on quick navigations.
   */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (loading) {
      timeout = setTimeout(() => {
        setShowBar(true);
      }, 200);
    } else {
      setShowBar(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1">
      <AnimatePresence>{showBar ? <ProgressBar /> : null}</AnimatePresence>
    </div>
  );
};

const Gutter = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full max-w-[1600px] flex-col gap-y-2 p-3">{children}</div>;
};

const breadcrumbRegistry: Record<string, (match: { pathname: string }) => string | React.ReactNode> = {};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Simulating `matches` dynamically, similar to `useMatches()`
  const matches = segments.map((_, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;

    return {
      pathname: path,
      handle: {
        breadcrumb: breadcrumbRegistry[path], // Only if defined
      },
    };
  });

  const crumbs = matches
    .filter((match) => match.handle?.breadcrumb) // Only keep routes with a breadcrumb function
    .map((match) => {
      let label: string | React.ReactNode | undefined;

      try {
        label = match.handle.breadcrumb?.(match); // Call the function if it exists
      } catch (error) {
        // noop (same as original logic)
      }

      if (!label) return null; // Ignore if breadcrumb function returns nothing

      return { label, path: match.pathname };
    })
    .filter(Boolean) as { label: string | React.ReactNode; path: string }[];

  // const matches = useMatches() as unknown as UIMatch<
  //   unknown,
  //   {
  //     breadcrumb?: (match?: UIMatch) => string | ReactNode;
  //   }
  // >[];

  // const crumbs = matches
  //   .filter((match) => match.handle?.breadcrumb)
  //   .map((match) => {
  //     const handle = match.handle;
  //
  //     let label: string | ReactNode | undefined = undefined;
  //
  //     try {
  //       label = handle.breadcrumb?.(match);
  //     } catch (error) {
  //       // noop
  //     }
  //
  //     if (!label) {
  //       return null;
  //     }
  //
  //     return {
  //       label: label,
  //       path: match.pathname,
  //     };
  //   })
  //   .filter(Boolean) as { label: string | ReactNode; path: string }[];

  return (
    <ol className={clx('text-ui-fg-muted txt-compact-small-plus flex select-none items-center')}>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        const isSingle = crumbs.length === 1;

        return (
          <li key={index} className={clx('flex items-center')}>
            {!isLast ? (
              <Link className="transition-fg hover:text-ui-fg-subtle" href={crumb.path}>
                {crumb.label}
              </Link>
            ) : (
              <div>
                {!isSingle && <span className="block lg:hidden">...</span>}
                <span
                  key={index}
                  className={clx({
                    'hidden lg:block': !isSingle,
                  })}
                >
                  {crumb.label}
                </span>
              </div>
            )}
            {!isLast && (
              <span className="mx-2">
                <TriangleRightMini />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};

const ToggleSidebar = () => {
  const { toggle } = useSidebar();

  return (
    <div>
      <IconButton className="hidden lg:flex" variant="transparent" onClick={() => toggle('desktop')} size="small">
        <SidebarLeft className="text-ui-fg-muted" />
      </IconButton>
      <IconButton className="hidden max-lg:flex" variant="transparent" onClick={() => toggle('mobile')} size="small">
        <SidebarLeft className="text-ui-fg-muted" />
      </IconButton>
    </div>
  );
};

const Topbar = () => {
  return (
    <div className="grid w-full grid-cols-2 border-b p-3">
      <div className="flex items-center gap-x-1.5">
        <ToggleSidebar />
        <Breadcrumbs />
      </div>
      <div className="flex items-center justify-end gap-x-3">{/* <Notifications /> */}</div>
    </div>
  );
};

const DesktopSidebarContainer = ({ sidebar }: { sidebar?: ReactNode }) => {
  const { desktop } = useSidebar();

  return (
    <div
      className={clx('hidden h-screen w-[220px] border-r', {
        'lg:flex': desktop,
      })}
    >
      {sidebar}
    </div>
  );
};

const MobileSidebarContainer = ({ sidebar }: { sidebar?: ReactNode }) => {
  const { mobile, toggle } = useSidebar();

  return (
    <RadixDialog.Root open={mobile} onOpenChange={() => toggle('mobile')}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={clx(
            'bg-ui-bg-overlay fixed inset-0',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        />
        <RadixDialog.Content
          className={clx(
            'bg-ui-bg-subtle shadow-elevation-modal fixed inset-y-2 left-2 flex w-full max-w-[304px] flex-col overflow-hidden rounded-lg border-r',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 duration-200',
          )}
        >
          <div className="p-3">
            <RadixDialog.Close asChild>
              <IconButton size="small" variant="transparent" className="text-ui-fg-subtle">
                <XMark />
              </IconButton>
            </RadixDialog.Close>
            <RadixDialog.Title className="sr-only">{'Navigation'}</RadixDialog.Title>
            <RadixDialog.Description className="sr-only">
              {'Navigation menu for the dashboard.'}
            </RadixDialog.Description>
          </div>
          {sidebar}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
