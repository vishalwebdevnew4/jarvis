import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { JarvisCoreButton } from '../../components/JarvisCoreButton/JarvisCoreButton';
import { PanicButton } from '../../components/PanicButton/PanicButton';
import { StateBanner } from '../../components/StateBanner/StateBanner';
import { useJarvis } from '../../context/JarvisContext';
import { usePermissions } from '../../context/PermissionContext';
import { STATES } from '../../state/jarvisStateMachine';
import { colors } from '../../theme/colors';

const jarvisStateMap = {
  [STATES.IDLE]: 'off',
  [STATES.LISTENING]: 'listening',
  [STATES.PROCESSING]: 'processing',
  [STATES.SPEAKING]: 'speaking',
  [STATES.PAUSED]: 'off',
  [STATES.OFFLINE]: 'off',
  [STATES.ERROR]: 'off',
};

export function HomeScreen() {
  const { state, dispatch, startListening, panicOff } = useJarvis();
  const { micGranted } = usePermissions();

  const handleCorePress = () => {
    if (state.current === STATES.IDLE) {
      if (!micGranted) {
        dispatch({ type: 'ERROR', error: 'Microphone permission required' });
        return;
      }
      startListening();
      return;
    }
    if (state.current === STATES.LISTENING) {
      dispatch({ type: 'PAUSE' });
      return;
    }
    if (state.current === STATES.PAUSED) {
      dispatch({ type: 'RESUME' });
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>JARVIS CORE</Text>
          <Text style={styles.subGreeting}>SECURE VOICE SESSION</Text>
        </View>
        <PanicButton onPress={panicOff} />
      </View>

      <View style={styles.heroSection}>
        <TouchableOpacity onPress={handleCorePress} activeOpacity={0.9}>
          <JarvisCoreButton state={jarvisStateMap[state.current]} />
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>LATENCY</Text>
          <Text style={styles.statValue}>24ms</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>UPTIME</Text>
          <Text style={styles.statValue}>99.9%</Text>
        </View>
      </View>

      {state.current === STATES.ERROR && (
        <StateBanner 
          title="SYSTEM ERROR" 
          message={state.error || 'Unknown failure.'} 
          action="REBOOT" 
          onAction={() => dispatch({ type: 'RESET' })} 
        />
      )}

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>SYSTEM STATUS</Text>
        <View style={styles.statusLine}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Biometric encryption active</Text>
        </View>
        <View style={styles.statusLine}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Neural processing local</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  greeting: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
  },
  subGreeting: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 4,
  },
  heroSection: {
    backgroundColor: colors.glass,
    borderRadius: 40,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.glass,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  statLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statValue: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 4,
  },
  infoSection: {
    backgroundColor: colors.glass,
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  statusLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
    marginRight: 12,
  },
  statusText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
