import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const stateLabel = state.current.toLowerCase();

  return (
    <View style={styles.container}>
      <View style={styles.bubbleLarge} />
      <View style={styles.bubbleSmall} />
      <View style={styles.bubbleAccent} />

      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Good morning, Vishal</Text>
        <PanicButton onPress={panicOff} />
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Your Jarvis Core</Text>
        <Text style={styles.heroSubtitle}>Tap to start a private voice session.</Text>
        <TouchableOpacity onPress={handleCorePress} activeOpacity={0.8}>
          <JarvisCoreButton state={jarvisStateMap[state.current]} />
        </TouchableOpacity>
        <Text style={styles.stateLabel}>State: {stateLabel}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.statusPill}>Listening paused</Text>
          <Text style={styles.statusPill}>Session 15m</Text>
        </View>
      </View>

      {state.current === STATES.ERROR ? (
        <StateBanner title="Error" message={state.error || 'Something went wrong.'} action="Tap to retry" />
      ) : null}
      {state.current === STATES.OFFLINE ? (
        <StateBanner title="Offline" message="Using local responses until you reconnect." action="Retry connection" />
      ) : null}
      {state.current === STATES.PAUSED ? (
        <StateBanner title="Paused" message="Listening paused by you." action="Resume" />
      ) : null}

      <View style={styles.cardRow}>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Earphones</Text>
          <Text style={styles.cardValue}>Not connected</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Battery</Text>
          <Text style={styles.cardValue}>--</Text>
        </View>
      </View>

      <View style={styles.controlCard}>
        <Text style={styles.controlTitle}>Quick Controls</Text>
        <View style={styles.toggleRow}>
          <View style={styles.toggleChipActive}>
            <Text style={styles.toggleTextActive}>Push-to-Talk</Text>
          </View>
          <View style={styles.toggleChip}>
            <Text style={styles.toggleText}>Wake Word</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerCard}>
        <View style={styles.progressRing}>
          <Text style={styles.progressValue}>100%</Text>
          <Text style={styles.progressLabel}>Ready</Text>
        </View>
        <View>
          <Text style={styles.footerTitle}>Privacy status</Text>
          <Text style={styles.footerText}>Nothing recorded • You stay in control</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF2FF',
    borderRadius: 28,
    padding: 24,
    gap: 18,
    overflow: 'hidden',
  },
  bubbleLarge: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    top: -40,
    right: -40,
  },
  bubbleSmall: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 217, 255, 0.2)',
    bottom: 60,
    left: 20,
  },
  bubbleAccent: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    top: 120,
    left: -20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#30336B',
    fontSize: 16,
    fontWeight: '600',
  },
  heroCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 24,
    padding: 20,
    gap: 12,
    shadowColor: '#A5B4FC',
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  heroTitle: {
    color: '#312E81',
    fontSize: 18,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: '#6366F1',
    fontSize: 12,
  },
  stateLabel: {
    color: '#6B7280',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statusPill: {
    backgroundColor: '#E0E7FF',
    color: '#4F46E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    fontSize: 11,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 18,
    padding: 14,
  },
  cardTitle: {
    color: '#6B7280',
    fontSize: 11,
  },
  cardValue: {
    color: '#312E81',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '600',
  },
  controlCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 16,
    gap: 10,
  },
  controlTitle: {
    color: '#312E81',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 10,
  },
  toggleChipActive: {
    backgroundColor: '#4F46E5',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  toggleChip: {
    backgroundColor: '#E0E7FF',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  toggleTextActive: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  toggleText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
  },
  footerCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  progressRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#A5B4FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressValue: {
    color: '#312E81',
    fontSize: 14,
    fontWeight: '700',
  },
  progressLabel: {
    color: '#6B7280',
    fontSize: 10,
  },
  footerTitle: {
    color: '#312E81',
    fontSize: 13,
    fontWeight: '600',
  },
  footerText: {
    color: '#6B7280',
    fontSize: 11,
    marginTop: 4,
  },
  toggleValue: {
    color: colors.success,
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
  toggleValueInactive: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
});
