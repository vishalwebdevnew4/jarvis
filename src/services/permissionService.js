import * as Audio from 'expo-av';
import { Platform } from 'react-native';

export async function requestMicPermission() {
  const { status } = await Audio.requestPermissionsAsync();
  return status === 'granted';
}

export async function checkMicPermission() {
  const { status } = await Audio.getPermissionsAsync();
  return status === 'granted';
}

export function bluetoothSupported() {
  return Platform.OS === 'android';
}
