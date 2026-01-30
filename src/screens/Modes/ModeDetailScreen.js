import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function ModeDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode Detail</Text>
      <Text style={styles.subtitle}>What Jarvis will do</Text>
      <Text style={styles.body}>Provide concise guidance and summaries.</Text>
      <Text style={styles.subtitle}>What Jarvis will NOT do</Text>
      <Text style={styles.body}>Act without consent or interrupt active speech.</Text>
      <Text style={styles.subtitle}>Example whisper</Text>
      <Text style={styles.body}>“I can draft a polite response.”</Text>
      <Text style={styles.subtitle}>Auto-disable timer</Text>
      <Text style={styles.body}>15m • 30m • 1h • Manual</Text>
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
  subtitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
  },
  body: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
