import { AppStateProvider } from './src/context/AppStateContext';
import { JarvisProvider } from './src/context/JarvisContext';
import { PermissionProvider } from './src/context/PermissionContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <AppStateProvider>
      <PermissionProvider>
        <JarvisProvider>
          <RootNavigator />
        </JarvisProvider>
      </PermissionProvider>
    </AppStateProvider>
  );
}
