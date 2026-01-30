import * as Audio from 'expo-av';
import { Platform } from 'react-native';

export async function requestMicPermission() {
  if (Platform.OS === 'web') {
    return true;
  }
  try {
    const { status } = await Audio.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting mic permission:', error);
    return false;
  }
}

export async function checkMicPermission() {
  if (Platform.OS === 'web') {
    return true;
  }
  try {
    const result = await Audio.getPermissionsAsync?.();
    const status = result?.status || 'undetermined';
    return status === 'granted';
  } catch (error) {
    console.error('Error checking mic permission:', error);
    return false;
  }
}

export function bluetoothSupported() {
  return Platform.OS === 'android';
}
