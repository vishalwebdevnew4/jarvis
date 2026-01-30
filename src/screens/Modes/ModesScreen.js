import { StyleSheet, Text, View } from 'react-native';
import { ModeCard } from '../../components/ModeCard/ModeCard';
import { colors } from '../../theme/colors';

const modes = [
  {
    title: 'Meeting',
    subtitle: 'Smart assistance in conversations',
    preview: '“Summarize decision points.”',
    notDo: 'Will NOT interrupt speakers.',
    accent: colors.accentAlt,
  },
  {
    title: 'Shopping',
    subtitle: 'Smarter purchase guidance',
    preview: '“Wait for a better price.”',
    notDo: 'Will NOT auto-buy.',
    accent: colors.success,
  },
  {
    title: 'Navigation',
    subtitle: 'Stay aware on the move',
    preview: '“Traffic is heavy ahead.”',
    notDo: 'Will NOT track without consent.',
    accent: colors.warning,
  },
  {
    title: 'Focus',
    subtitle: 'Minimize distractions',
    preview: '“Only urgent alerts.”',
    notDo: 'Will NOT surface chatter.',
    accent: colors.accent,
  },
];

export function ModesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Assistant Modes</Text>
      <Text style={styles.subheading}>Customize how Jarvis helps you.</Text>
      <View style={styles.grid}>
        {modes.map((mode) => (
          <ModeCard
            key={mode.title}
            title={mode.title}
            subtitle={mode.subtitle}
            preview={mode.preview}
            notDo={mode.notDo}
            accentColor={mode.accent}
          />
        ))}
      </View>
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>Mode detail</Text>
        <Text style={styles.detailItem}>What Jarvis will do: concise guidance.</Text>
        <Text style={styles.detailItem}>What Jarvis will NOT do: act without consent.</Text>
        <Text style={styles.detailItem}>Example whisper: “I can draft a polite reply.”</Text>
        <Text style={styles.detailItem}>Auto-disable timer: 15m / 30m / 1h / Manual</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF2FF',
    borderRadius: 24,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 20,
    gap: 14,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  detailCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 18,

    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    gap: 6,
  },
  detailTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  detailItem: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
