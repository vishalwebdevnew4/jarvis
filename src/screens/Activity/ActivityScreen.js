import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';

const interactions = [
  { time: '14:22', prompt: 'Summarize meeting', response: 'Summary sent to cloud vault.' },
  { time: '14:05', prompt: 'Battery status', response: '78% - 12h remaining.' },
  { time: '13:58', prompt: 'Next task', response: 'Review Jarvis UI redesign.' },
];

export function ActivityScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>NEURAL LOGS</Text>
      <Text style={styles.subheading}>Self-destructing in 15 minutes.</Text>

      <View style={styles.timeline}>
        {interactions.map((entry, i) => (
          <View key={i} style={styles.logEntry}>
            <View style={styles.timeColumn}>
              <Text style={styles.time}>{entry.time}</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.prompt}>{entry.prompt}</Text>
              <Text style={styles.response}>{entry.response}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
    paddingTop: 60,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  subheading: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 4,
    marginBottom: 40,
  },
  timeline: {
    gap: 0,
  },
  logEntry: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 24,
  },
  timeColumn: {
    alignItems: 'center',
    width: 40,
  },
  time: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '700',
  },
  line: {
    flex: 1,
    width: 1,
    backgroundColor: colors.glassBorder,
    marginTop: 8,
  },
  contentCard: {
    flex: 1,
    backgroundColor: colors.glass,
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  prompt: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  response: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
});
