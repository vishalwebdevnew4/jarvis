import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ModeCard } from '../../components/ModeCard/ModeCard';
import { colors } from '../../theme/colors';

const modes = [
  {
    title: 'MEETING',
    subtitle: 'Neural summarization active',
    preview: '"Identify key action items."',
    notDo: 'Passive listening only.',
    accent: colors.accentAlt,
  },
  {
    title: 'TRANSIT',
    subtitle: 'Augmented spatial awareness',
    preview: '"Route is safe for walking."',
    notDo: 'No tracking persistence.',
    accent: colors.success,
  },
  {
    title: 'FOCUS',
    subtitle: 'Deep work priority',
    preview: '"Blocking non-essential pings."',
    notDo: 'Urgent bypass allowed.',
    accent: colors.warning,
  },
  {
    title: 'SOCIAL',
    subtitle: 'Contextual social cues',
    preview: '"Vishal is entering the room."',
    notDo: 'Privacy masks enabled.',
    accent: colors.accent,
  },
];

export function ModesScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>NEURAL MODES</Text>
      <Text style={styles.subheading}>Select active cognitive layer.</Text>
      
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
        <Text style={styles.detailTitle}>LAYER PROTOCOL</Text>
        <View style={styles.protocolLine}>
          <Text style={styles.protocolLabel}>ENCRYPTION</Text>
          <Text style={styles.protocolValue}>AES-256-GCM</Text>
        </View>
        <View style={styles.protocolLine}>
          <Text style={styles.protocolLabel}>LATENCY</Text>
          <Text style={styles.protocolValue}>LOW-LE</Text>
        </View>
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
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  detailCard: {
    marginTop: 32,
    backgroundColor: colors.glass,
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  detailTitle: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 16,
  },
  protocolLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  protocolLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
  },
  protocolValue: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '700',
  },
});
