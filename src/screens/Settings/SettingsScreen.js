import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings & Privacy</Text>
      <Text style={styles.subheading}>You’re in complete control.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Master Assistant</Text>
        <Text style={styles.cardDetail}>Currently active • Toggle to disable all listening.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Listening mode</Text>
        <Text style={styles.cardDetail}>Push-to-talk • Wake word • Disabled</Text>
        <Text style={styles.cardDetail}>Wake word editor: “Hey Jarvis”</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Privacy</Text>
        <Text style={styles.cardDetail}>Nothing is recorded without permission.</Text>
        <Text style={styles.cardDetail}>Local vs cloud processing toggle</Text>
        <Text style={styles.cardDetail}>Data retention: 15 min (recommended)</Text>
        <Text style={styles.cardAction}>Export / Delete data</Text>
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
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  cardDetail: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  cardAction: {
    color: colors.accent,
    fontSize: 12,
  },
});
