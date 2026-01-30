import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/Settings/SettingsScreen';
import { PrivacyScreen } from '../screens/Settings/PrivacyScreen';
import { VoicePersonalityScreen } from '../screens/Voice/VoicePersonalityScreen';
import { AboutScreen } from '../screens/Settings/AboutScreen';

const Stack = createNativeStackNavigator();

export function SettingsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsHome" component={SettingsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="VoiceControls" component={VoicePersonalityScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
