import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function VoicePersonalityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Voice Personality</Text>
      <Text style={styles.subheading}>Pick the tone and response style you prefer.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Tone</Text>
        <Text style={styles.value}>Calm • Neutral • Confident</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Response length</Text>
        <Text style={styles.value}>Short • Normal</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Interruption level</Text>
        <Text style={styles.value}>Low • Medium • High</Text>
      </View>

      <View style={styles.previewCard}>
        <Text style={styles.previewTitle}>Preview</Text>
        <Text style={styles.previewBody}>Tap “Hear sample response” to preview voice.</Text>
        <Text style={styles.previewAction}>Hear sample response</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 20,
    gap: 12,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  subheading: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    gap: 6,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 13,
  },
  previewCard: {
    backgroundColor: colors.surfaceStrong,
    borderRadius: 16,
    padding: 14,
    gap: 6,
  },
  previewTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  previewBody: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  previewAction: {
    color: colors.accent,
    fontSize: 12,
    marginTop: 6,
  },
});
