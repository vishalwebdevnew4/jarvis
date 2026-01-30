import * as Audio from 'expo-av';
import { Platform } from 'react-native';

export async function requestMicPermission() {
  // Web platform doesn't have Audio permission APIs
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
  // Web platform doesn't have Audio permission APIs
  if (Platform.OS === 'web') {
    return true;
  }
  try {
    const { status } = await Audio.getPermissionsAsync?.() || { status: 'undetermined' };
    return status === 'granted';
  } catch (error) {
    console.error('Error checking mic permission:', error);
    return false;
  }
}

export function bluetoothSupported() {
  return Platform.OS === 'android';
}
