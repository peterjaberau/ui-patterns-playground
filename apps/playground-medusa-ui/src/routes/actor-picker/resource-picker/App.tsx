import { EuiThemeProviderCustom } from '@/components/eui/theme-provider';
import { RootRenderer } from './machines/render-root';

function App() {
  return (
    <EuiThemeProviderCustom>
      <RootRenderer actorOptions={undefined} />
    </EuiThemeProviderCustom>
  );
}

export default App;
