import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function ModeCard({ title, subtitle, preview, notDo, accentColor }) {
  return (
    <View style={[styles.card, { borderColor: accentColor || colors.glassBorder }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.divider} />
        <Text style={styles.preview}>{preview}</Text>
        <Text style={styles.notDo}>{notDo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.glass,
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    backdropFilter: 'blur(10px)', // Web only hint
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.glassBorder,
    marginVertical: 12,
  },
  preview: {
    color: colors.accent,
    fontSize: 11,
    fontStyle: 'italic',
  },
  notDo: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 4,
  },
});
