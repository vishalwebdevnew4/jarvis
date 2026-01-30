import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jarvis</Text>
      <Text style={styles.subtitle}>Initializing secure voice session...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
