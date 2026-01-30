import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { PanicButton } from '../components/PanicButton/PanicButton';
import { useJarvis } from '../context/JarvisContext';
import { ActivityScreen } from '../screens/Activity/ActivityScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ModesScreen } from '../screens/Modes/ModesScreen';
import { SettingsNavigator } from './SettingsNavigator';

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  const { panicOff } = useJarvis();

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Modes" component={ModesScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
      <View style={styles.panicOverlay}>
        <PanicButton onPress={panicOff} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panicOverlay: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
