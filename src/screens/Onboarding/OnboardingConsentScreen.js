import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const permissionCards = [
  {
    title: 'Microphone access',
    why: 'Hear your voice commands through earphones.',
    not: 'No silent listening or stored audio.',
  },
  {
    title: 'Bluetooth audio',
    why: 'Connect and respond through earphones.',
    not: 'No access to unrelated devices.',
  },
  {
    title: 'AI processing',
    why: 'Understand your requests and respond.',
    not: 'No advertising or data resale.',
  },
];

export function OnboardingConsentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subheading}>Your personal voice assistant, in your ear.</Text>
      <Text style={styles.caption}>You decide when it listens.</Text>

      <View style={styles.carousel}>
        <View style={styles.carouselCard}>
          <Text style={styles.carouselTitle}>🎧 Works with any earphones</Text>
          <Text style={styles.carouselBody}>Use the Bluetooth gear you already own.</Text>
        </View>
        <View style={styles.carouselCard}>
          <Text style={styles.carouselTitle}>🗣️ Tap or say the wake word</Text>
          <Text style={styles.carouselBody}>Push-to-talk and wake word both supported.</Text>
        </View>
        <View style={styles.carouselCard}>
          <Text style={styles.carouselTitle}>🔒 Nothing records without permission</Text>
          <Text style={styles.carouselBody}>Explicit consent for every permission.</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Consent & Permissions</Text>
      {permissionCards.map((card) => (
        <View key={card.title} style={styles.permissionCard}>
          <Text style={styles.permissionTitle}>{card.title}</Text>
          <Text style={styles.permissionDetail}>Why: {card.why}</Text>
          <Text style={styles.permissionDetail}>We don’t: {card.not}</Text>
          <Text style={styles.permissionToggle}>Toggle (required)</Text>
        </View>
      ))}

      <View style={styles.ahaCard}>
        <Text style={styles.ahaTitle}>First-time success</Text>
        <Text style={styles.ahaText}>“Try saying: Help me respond politely.”</Text>
        <Text style={styles.ahaText}>Auto-start listening → response → whisper.</Text>
        <Text style={styles.ahaFootnote}>You’re in control. Always.</Text>
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
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  subheading: {
    color: colors.textPrimary,
    fontSize: 16,
    marginTop: 8,
  },
  caption: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  carousel: {
    marginTop: 16,
    gap: 12,
  },
  carouselCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 18,

    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
  },
  carouselTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  carouselBody: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  sectionTitle: {
    marginTop: 18,
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  permissionCard: {
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 18,

    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
  },
  permissionTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  permissionDetail: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  permissionToggle: {
    color: colors.accent,
    fontSize: 12,
    marginTop: 10,
  },
  ahaCard: {
    marginTop: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 18,

    backgroundColor: colors.surfaceStrong,
    borderRadius: 16,
    padding: 14,
  },
  ahaTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  ahaText: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  ahaFootnote: {
    color: colors.textPrimary,
    fontSize: 12,
    marginTop: 10,
  },
});
