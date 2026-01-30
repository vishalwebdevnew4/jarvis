import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const interactions = [
  { time: '2 min ago', prompt: 'Summarize the call notes', response: 'Here are the key decisions...' },
  { time: '6 min ago', prompt: 'Draft a polite reply', response: 'Here is a concise response...' },
];

export function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Activity</Text>
      <Text style={styles.subheading}>Auto-clear after 15 minutes • No raw audio stored</Text>

      <View style={styles.timeline}>
        {interactions.map((entry) => (
          <View key={entry.time} style={styles.card}>
            <Text style={styles.time}>{entry.time}</Text>
            <Text style={styles.prompt}>{entry.prompt}</Text>
            <Text style={styles.response}>{entry.response}</Text>
            <View style={styles.actions}>
              <Text style={styles.action}>Repeat</Text>
              <Text style={styles.action}>Copy</Text>
              <Text style={styles.actionDanger}>Delete</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.contextCard}>
        <Text style={styles.contextTitle}>Current Context</Text>
        <View style={styles.contextRow}>
          <Text style={styles.contextChip}>Meeting Mode</Text>
          <Text style={styles.contextChip}>Last topic: Follow-ups</Text>
        </View>
        <Text style={styles.clearAll}>Delete all data</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF2FF',
    borderRadius: 24,
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
  timeline: {
    gap: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 18,
    padding: 14,
    gap: 6,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 11,
  },
  prompt: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  response: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 6,
  },
  action: {
    color: colors.accent,
    fontSize: 12,
  },
  actionDanger: {
    color: colors.error,
    fontSize: 12,
  },
  contextCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 18,
    padding: 14,
    gap: 8,
  },
  contextTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  contextRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  contextChip: {
    color: colors.textSecondary,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.surfaceStrong,
  },
  clearAll: {
    color: colors.error,
    fontSize: 12,
  },
});
