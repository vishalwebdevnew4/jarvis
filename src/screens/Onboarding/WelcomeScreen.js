import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your personal voice assistant, in your ear.</Text>
      <Text style={styles.subtitle}>You decide when it listens.</Text>
      <Text style={styles.cta}>Get Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  cta: {
    color: colors.accent,
    fontSize: 14,
    marginTop: 16,
  },
});
