import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ModeDetailScreen } from '../screens/Modes/ModeDetailScreen';

const Stack = createNativeStackNavigator();

export function ModeModalNavigator() {
  return (
    <Stack.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
      <Stack.Screen name="ModeDetail" component={ModeDetailScreen} />
    </Stack.Navigator>
  );
}
