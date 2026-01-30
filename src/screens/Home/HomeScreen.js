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

  const handleErrorRetry = () => {
    dispatch({ type: 'RESET' });
    if (micGranted) {
      startListening();
    }
  };

  const stateLabel = state.current.toLowerCase();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Good morning, User</Text>
        <PanicButton onPress={panicOff} />
      </View>

      <TouchableOpacity onPress={handleCorePress} activeOpacity={0.8}>
        <JarvisCoreButton state={jarvisStateMap[state.current]} />
      </TouchableOpacity>
      <Text style={styles.stateLabel}>State: {stateLabel}</Text>

      <View style={styles.trustRow}>
        <Text style={styles.trustLabel}>Listening paused</Text>
        <Text style={styles.trustLabel}>Session expires in 15m</Text>
      </View>
      <Text style={styles.trustFootnote}>Nothing recorded - You stay in control</Text>

      {state.current === STATES.ERROR ? (
        <StateBanner title="Error" message={state.error || 'Something went wrong.'} action="Tap to retry" onAction={handleErrorRetry} />
      ) : null}
      {state.current === STATES.OFFLINE ? (
        <StateBanner title="Offline" message="Using local responses until you reconnect." action="Retry connection" onAction={() => dispatch({ type: 'RESET' })} />
      ) : null}
      {state.current === STATES.PAUSED ? (
        <StateBanner title="Paused" message="Listening paused by you." action="Resume" onAction={() => dispatch({ type: 'RESUME' })} />
      ) : null}

      <View style={styles.toggleRow}>
        <View style={styles.toggleCard}>
          <Text style={styles.toggleLabel}>Push-to-Talk</Text>
          <Text style={styles.toggleValue}>Active</Text>
        </View>
        <View style={styles.toggleCard}>
          <Text style={styles.toggleLabel}>Wake Word</Text>
          <Text style={styles.toggleValueInactive}>Off</Text>
        </View>
      </View>

      <View style={styles.systemRow}>
        <View style={styles.systemCard}>
          <Text style={styles.systemTitle}>Earphones</Text>
          <Text style={styles.systemValue}>Not connected</Text>
        </View>
        <View style={styles.systemCard}>
          <Text style={styles.systemTitle}>Battery</Text>
          <Text style={styles.systemValue}>--</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  stateLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    textAlign: 'center',
  },
  trustRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trustLabel: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  trustFootnote: {
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 12,
  },
  toggleCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
  },
  toggleLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
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
  systemRow: {
    flexDirection: 'row',
    gap: 12,
  },
  systemCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
  },
  systemTitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  systemValue: {
    color: colors.textPrimary,
    fontSize: 14,
    marginTop: 6,
    fontWeight: '600',
  },
});
