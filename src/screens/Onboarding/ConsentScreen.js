import { useState } from 'react';
import { Linking, StyleSheet, Switch, Text, View } from 'react-native';
import { usePermissions } from '../../context/PermissionContext';
import { Linking, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePermissions } from '../../context/PermissionContext';
import { useAppState } from '../../context/AppStateContext';
import { requestMicPermission } from '../../services/permissionService';
import { colors } from '../../theme/colors';

export function ConsentScreen() {
  const { micGranted, setMicGranted } = usePermissions();

  const navigation = useNavigation();
  const { micGranted, setMicGranted } = usePermissions();
  const { setOnboardingComplete } = useAppState();

  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);

  const handleMicToggle = async (enabled) => {
    if (enabled) {
      const granted = await requestMicPermission();
      setMicGranted(granted);
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

      <Text style={readyToContinue ? styles.ctaReady : styles.ctaDisabled}>
        Continue {readyToContinue ? '✓' : ''}
      </Text>
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
    backgroundColor: '#EEF2FF',
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
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 18,
    padding: 14,
    gap: 6,

    backgroundColor: colors.background,
    backgroundImage: colors.backgroundGradient,
    padding: 24,
    gap: 18,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: '800',
    marginTop: 24,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: colors.glass,
    borderRadius: 24,
    padding: 20,
    gap: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(6, 182, 212, 0.2)',
    backdropFilter: 'blur(20px)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
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
    fontSize: 16,
    fontWeight: '700',
  },
  cardBody: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
  cardAction: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '600',
  },
  ctaButtonReady: {
    marginTop: 24,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 24,
    backgroundColor: colors.glass,
    borderWidth: 1.5,
    borderColor: 'rgba(6, 182, 212, 0.4)',
    backdropFilter: 'blur(20px)',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  ctaButtonDisabled: {
    marginTop: 24,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(30, 41, 59, 0.3)',
    borderWidth: 1.5,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  ctaReady: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  ctaDisabled: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
