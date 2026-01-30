import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const statusCopy = {
  off: 'Tap to Speak',
  listening: 'Listening...',
  processing: 'Thinking...',
  speaking: 'Speaking...',
};

export function JarvisCoreButton({ state = 'off' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>{statusCopy[state]}</Text>
      <View style={[styles.outer, stateStyles[state]]}>
        <View style={styles.inner} />
      </View>
      {state === 'listening' ? <View style={styles.waveform} /> : null}
    </View>
  );
}

const stateStyles = {
  off: { borderColor: colors.textSecondary },
  listening: { borderColor: colors.accent },
  processing: { borderColor: colors.accentAlt },
  speaking: { borderColor: colors.accent },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
  },
  status: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '600',
  },
  outer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: colors.accentAlt,
    opacity: 0.85,
  },
  waveform: {
    height: 8,
    width: 120,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
});
