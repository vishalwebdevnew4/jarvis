import { useState } from 'react';
import { Linking, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePermissions } from '../../context/PermissionContext';
import { useAppState } from '../../context/AppStateContext';
import { requestMicPermission } from '../../services/permissionService';
import { colors } from '../../theme/colors';

export function ConsentScreen() {
  const navigation = useNavigation();
  const { micGranted, setMicGranted } = usePermissions();
  const { setOnboardingComplete } = useAppState();
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);

  const handleMicToggle = async (enabled) => {
    if (enabled) {
      try {
        const granted = await requestMicPermission();
        setMicGranted(granted);
      } catch (error) {
        console.error('Error requesting mic permission:', error);
        setMicGranted(false);
      }
      return;
    }
    setMicGranted(false);
  };

  const readyToContinue = micGranted && bluetoothEnabled && aiEnabled;

  const handleContinue = () => {
    if (readyToContinue) {
      setOnboardingComplete(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consent & Permissions</Text>
      <Text style={styles.subtitle}>Continue only after required permissions are enabled.</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>🎙 Microphone access</Text>
          <Switch value={micGranted} onValueChange={handleMicToggle} />
        </View>
        <Text style={styles.cardBody}>Why: Hear your voice commands through earphones.</Text>
        <Text style={styles.cardBody}>We don’t: No silent listening or stored audio.</Text>
        {!micGranted ? (
          <Text style={styles.cardAction} onPress={() => Linking.openSettings()}>
            Open Settings
          </Text>
        ) : null}
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>🎧 Bluetooth audio</Text>
          <Switch value={bluetoothEnabled} onValueChange={setBluetoothEnabled} />
        </View>
        <Text style={styles.cardBody}>Why: Connect and respond through earphones.</Text>
        <Text style={styles.cardBody}>We don’t: No access to unrelated devices.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>🧠 AI processing</Text>
          <Switch value={aiEnabled} onValueChange={setAiEnabled} />
        </View>
        <Text style={styles.cardBody}>Why: Understand your requests and respond.</Text>
        <Text style={styles.cardBody}>We don’t: No advertising or data resale.</Text>
      </View>

      <TouchableOpacity 
        onPress={handleContinue} 
        disabled={!readyToContinue}
        style={readyToContinue ? styles.ctaButtonReady : styles.ctaButtonDisabled}
      >
        <Text style={readyToContinue ? styles.ctaReady : styles.ctaDisabled}>
          Continue {readyToContinue ? '✓' : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  cardBody: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  cardAction: {
    color: colors.accent,
    fontSize: 12,
  },
  ctaButtonReady: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.accent,
  },
  ctaButtonDisabled: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  ctaReady: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  ctaDisabled: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
