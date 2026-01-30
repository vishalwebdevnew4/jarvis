import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme/colors';

export function StateBanner({ title, message, action, onAction }) {
  return (
    <TouchableOpacity onPress={onAction} activeOpacity={0.8} style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.action}>{action}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
  },
  container: {
    backgroundColor: colors.glassStrong,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  message: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  action: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '700',
  },
});
