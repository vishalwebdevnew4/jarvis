import { StyleSheet, Text, View } from 'react-native';
import { useAppState } from '../../context/AppStateContext';
import { colors } from '../../theme/colors';

export function FirstSuccessScreen() {
  const { setOnboardingComplete } = useAppState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First-time success</Text>
      <Text style={styles.prompt}>“Try saying: Help me respond politely.”</Text>
      <Text style={styles.subtitle}>Auto-start listening → response → whisper.</Text>
      <Text style={styles.cta} onPress={() => setOnboardingComplete(true)}>
        You’re in control. Always.
      </Text>
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
  cta: {
    color: colors.accent,
    fontSize: 14,
    marginTop: 12,
  },
});
