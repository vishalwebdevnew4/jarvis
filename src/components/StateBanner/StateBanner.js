import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function StateBanner({ title, message, action }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.action}>{action}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceStrong,
    borderRadius: 14,
    padding: 14,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  message: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  action: {
    color: colors.accent,
    fontSize: 12,
    marginTop: 10,
  },
});
