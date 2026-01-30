import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';

const cards = [
  { title: 'Works with any earphones', body: 'Use the Bluetooth gear you already own.' },
  { title: 'Tap or say the wake word', body: 'Push-to-talk and wake word supported.' },
  { title: 'Nothing records without permission', body: 'Explicit consent for each permission.' },
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
    gap: 28,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: '800',
    marginTop: 24,
    letterSpacing: -0.5,
  },
  carousel: {
    gap: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1.5,
    borderColor: 'rgba(6, 182, 212, 0.2)',
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  cardBody: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 10,
    lineHeight: 22,
  },
  ctaButton: {
    marginTop: 20,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 24,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: 'rgba(6, 182, 212, 0.4)',
  },
  cta: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
