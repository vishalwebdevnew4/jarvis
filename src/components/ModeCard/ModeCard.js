import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function ModeCard({ title, subtitle, preview, notDo, accentColor }) {
  return (
    <View style={[styles.card, { borderColor: accentColor || colors.accent }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.preview}>{preview}</Text>
      <Text style={styles.notDo}>{notDo}</Text>
      <Text style={[styles.status, { color: accentColor || colors.accent }]}>Toggle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
    lineHeight: 16,
  },
  preview: {
    color: colors.textPrimary,
    fontSize: 11,
    marginTop: 8,
  },
  notDo: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 6,
  },
  status: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
  },
});
