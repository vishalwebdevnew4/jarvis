import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/Onboarding/WelcomeScreen';
import { HowItWorksScreen } from '../screens/Onboarding/HowItWorksScreen';
import { ConsentScreen } from '../screens/Onboarding/ConsentScreen';
import { FirstSuccessScreen } from '../screens/Onboarding/FirstSuccessScreen';

const Stack = createNativeStackNavigator();

export function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="HowItWorks" component={HowItWorksScreen} />
      <Stack.Screen name="Consent" component={ConsentScreen} />
      <Stack.Screen name="FirstSuccess" component={FirstSuccessScreen} />
    </Stack.Navigator>
  );
}
