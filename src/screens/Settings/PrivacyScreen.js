import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function PrivacyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy & Data</Text>
      <Text style={styles.body}>Nothing is recorded without permission.</Text>
      <Text style={styles.body}>Local vs cloud processing toggle.</Text>
      <Text style={styles.body}>Data retention: 15 min (recommended).</Text>
      <Text style={styles.action}>Export / Delete data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    gap: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  body: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  action: {
    color: colors.accent,
    fontSize: 12,
  },
});
