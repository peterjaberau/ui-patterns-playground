import { Tooltip } from '../../components';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '../../components/ui/button';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

export interface UserProfilePanelProps {
  className?: string;
}

export const UserProfilePanel = ({ className = '' }: UserProfilePanelProps) => {
  const globalServices = useContext(GlobalStateContext);

  const queryClient = useQueryClient();

  const isLoggedIn = false;

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['getJobSpecs'],
    queryFn: () =>
      fetch('/api/job-specs').then((res) => {
        if (res.status !== 200) {
          throw new Error('An error occurred');
        }

        return res.json();
      }),
    enabled: isLoggedIn,
  });

  const handleSaveJobSpecVersion = () => {
    globalServices.workspaceService.send('SAVE_JOB_SPEC_VERSION');
  };

  const handleLoadJobSpecVersion = (jsonContent: any) => {
    globalServices.workspaceService.send('RESTORE_STATE', {
      savedContext: jsonContent,
    });
  };

  const renderJobSpecs = ({
    data,
    error,
    isLoading,
    isFetching,
  }: {
    data: any;
    error: unknown;
    isLoading: boolean;
    isFetching: boolean;
  }) => {
    if (!isFetching && !data && !error) return null;

    if (isLoading) return <span>Loading...</span>;

    if (error) return <span>An error occurred</span>;

    const hasNoJobSpecs = !isLoading && !error && data.length < 1;
    if (hasNoJobSpecs) return <span>No saved job specs... yet.</span>;

    return data.map((spec: any, index: number) => (
      <ul className="flex flex-row items-center gap-3 py-2" key={index}>
        <span>{spec.job_spec_versions[0].name ?? `Unnamed ${index + 1}`}</span>
        <Button
          onClick={() => handleLoadJobSpecVersion(spec.job_spec_versions[0].content)}
          variant="outline"
          className="hover:bg-foreground group h-6 w-6 rounded-full p-0 transition-colors"
        >
          <PlayCircleIcon className="group-hover:stroke-background h-4 w-4" />
          <span className="sr-only">Load job spec</span>
        </Button>
      </ul>
    ));
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-start gap-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-wider">My profile</h4>
        <Tooltip className="text-muted-foreground text-sm">
          <p>Connect your wallet and sign in to save your job specs and keep them synced across your devices.</p>
        </Tooltip>
      </div>
      <div className="flex w-80 flex-col gap-8">
        <div className="flex justify-start">
          <div className="rounded-lg bg-white/10 p-2">
            <Button>Wallet Connect</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className={`${isLoggedIn ? '' : 'text-muted-foreground'} font-bold`}>My Saved Job Spec Versions</h4>
          {!isLoggedIn && <p className="p-4 text-xs italic">Sign in to save/load your job specs</p>}
          <ul>{renderJobSpecs({ data, error, isLoading, isFetching })}</ul>
          <Button onClick={handleSaveJobSpecVersion}>Save Job Spec</Button>
        </div>
      </div>
    </>
  );
};
