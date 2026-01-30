import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StateBanner } from '../components/StateBanner/StateBanner';
import { useAppState } from '../context/AppStateContext';
import { useJarvis } from '../context/JarvisContext';
import { STATES } from '../state/jarvisStateMachine';
import { colors } from '../theme/colors';
import { SplashScreen } from '../screens/Splash/SplashScreen';
import { OnboardingNavigator } from './OnboardingNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { ModeModalNavigator } from './ModeModalNavigator';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  const { onboardingComplete } = useAppState();
  const { state } = useJarvis();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showPaused = state?.current === STATES.PAUSED;
  const showOffline = state?.current === STATES.OFFLINE;
  const showError = state?.current === STATES.ERROR;

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!onboardingComplete ? (
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
          ) : (
            <Stack.Screen name="MainApp" component={MainTabNavigator} />
          )}
          <Stack.Screen name="ModeModal" component={ModeModalNavigator} options={{ presentation: 'modal' }} />
        </Stack.Navigator>
        <View style={styles.overlay}>
          {showPaused ? (
            <StateBanner title="Paused" message="Listening paused by you." action="Resume" />
          ) : null}
          {showOffline ? (
            <StateBanner title="Offline" message="Using local responses until you reconnect." action="Retry" />
          ) : null}
          {showError ? (
            <StateBanner title="Error" message={state?.error || 'Something went wrong.'} action="Try again" />
          ) : null}
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  overlay: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    gap: 8,
  },
});
