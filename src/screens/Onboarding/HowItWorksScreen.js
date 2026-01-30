import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const cards = [
  { title: '🎧 Works with any earphones', body: 'Use the Bluetooth gear you already own.' },
  { title: '🗣️ Tap or say the wake word', body: 'Push-to-talk and wake word supported.' },
  { title: '🔒 Nothing records without permission', body: 'Explicit consent for each permission.' },
];

export function HowItWorksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How it works</Text>
      <View style={styles.carousel}>
        {cards.map((card) => (
          <View key={card.title} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardBody}>{card.body}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.cta}>Continue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    gap: 16,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  carousel: {
    gap: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  cardBody: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 6,
  },
  cta: {
    color: colors.accent,
    fontSize: 14,
  },
});
