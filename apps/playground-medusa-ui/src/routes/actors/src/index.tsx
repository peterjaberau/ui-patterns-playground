import { GlobalStateProvider } from './context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import App from './App';

function ActorFlow() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: '#000',
              color: '#ccc',
            },
          }}
        />
        <App />
      </GlobalStateProvider>
    </QueryClientProvider>
  );
}

export default ActorFlow;
