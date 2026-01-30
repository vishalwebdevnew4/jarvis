import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppState } from '../../context/AppStateContext';
import { colors } from '../../theme/colors';

export function FirstSuccessScreen() {
  const { setOnboardingComplete } = useAppState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First-time success</Text>
      <Text style={styles.prompt}>"Try saying: Help me respond politely."</Text>
      <Text style={styles.subtitle}>Auto-start listening, response, whisper.</Text>
      <TouchableOpacity onPress={() => setOnboardingComplete(true)} style={styles.ctaButton}>
        <Text style={styles.cta}>You're in control. Always.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  prompt: {
    color: colors.textPrimary,
    fontSize: 14,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  ctaButton: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  cta: {
    color: colors.accent,
    fontSize: 14,
    textAlign: 'center',
  },
});
