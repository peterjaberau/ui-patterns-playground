import { EuiThemeProviderCustom } from '@/components/eui/theme-provider';
import { RootMain, RootRenderer } from './machines/render-root';

function App() {
  return (
    <EuiThemeProviderCustom>
      <RootRenderer actorOptions={undefined}>
        <RootMain />
      </RootRenderer>
    </EuiThemeProviderCustom>
  );
}

export default App;
