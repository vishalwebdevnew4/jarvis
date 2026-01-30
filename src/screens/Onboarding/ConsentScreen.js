import { useState } from 'react';
import { Linking, StyleSheet, Switch, Text, View } from 'react-native';
import { usePermissions } from '../../context/PermissionContext';
import { requestMicPermission } from '../../services/permissionService';
import { colors } from '../../theme/colors';

export function ConsentScreen() {
  const { micGranted, setMicGranted } = usePermissions();
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);

  const handleMicToggle = async (enabled) => {
    if (enabled) {
      const granted = await requestMicPermission();
      setMicGranted(granted);
      return;
    }
    setMicGranted(false);
  };

  const readyToContinue = micGranted && bluetoothEnabled && aiEnabled;

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

      <Text style={readyToContinue ? styles.ctaReady : styles.ctaDisabled}>
        Continue {readyToContinue ? '✓' : ''}
      </Text>
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
  ctaReady: {
    color: colors.accent,
    fontSize: 14,
    marginTop: 8,
  },
  ctaDisabled: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 8,
  },
});
