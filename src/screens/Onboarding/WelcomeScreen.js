import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';

export function WelcomeScreen() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('HowItWorks');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your personal voice assistant, in your ear.</Text>
      <Text style={styles.subtitle}>You decide when it listens.</Text>
      <TouchableOpacity onPress={handleGetStarted} style={styles.ctaButton}>
        <Text style={styles.cta}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
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
