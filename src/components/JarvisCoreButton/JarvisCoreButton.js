import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const statusCopy = {
  off: 'IDLE',
  listening: 'LISTENING',
  processing: 'THINKING',
  speaking: 'SPEAKING',
};

export function JarvisCoreButton({ state = 'off' }) {
  return (
    <View style={styles.container}>
      <View style={[styles.glow, state === 'off' ? null : styles[`${state}Glow`]]} />
      <View style={[styles.outer, styles[`${state}Border`]]}>
        <View style={[styles.inner, styles[`${state}Bg`]]} />
      </View>
      <Text style={styles.status}>{statusCopy[state]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  glow: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.2,
  },
  listeningGlow: { backgroundColor: colors.accent },
  processingGlow: { backgroundColor: colors.accentAlt },
  speakingGlow: { backgroundColor: colors.accent },
  
  outer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1.5,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.glass,
  },
  offBorder: { borderColor: colors.glassBorder },
  listeningBorder: { borderColor: colors.accent },
  processingBorder: { borderColor: colors.accentAlt },
  speakingBorder: { borderColor: colors.accent },
  
  inner: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: colors.glassStrong,
  },
  offBg: { backgroundColor: colors.glassStrong },
  listeningBg: { backgroundColor: colors.accent },
  processingBg: { backgroundColor: colors.accentAlt },
  speakingBg: { backgroundColor: colors.accent },
  
  status: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 20,
    letterSpacing: 2,
  },
});
