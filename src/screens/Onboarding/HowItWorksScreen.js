import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';

const cards = [
  { title: '🎧 Works with any earphones', body: 'Use the Bluetooth gear you already own.' },
  { title: '🗣️ Tap or say the wake word', body: 'Push-to-talk and wake word supported.' },
  { title: '🔒 Nothing records without permission', body: 'Explicit consent for each permission.' },
];

export function HowItWorksScreen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Consent');
  };

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
      <TouchableOpacity onPress={handleContinue} style={styles.ctaButton}>
        <Text style={styles.cta}>Continue</Text>
      </TouchableOpacity>
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
  ctaButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.accent,
  },
  cta: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
