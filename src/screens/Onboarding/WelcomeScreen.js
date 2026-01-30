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
    backgroundImage: colors.backgroundGradient,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'center',
  },
  ctaButton: {
    marginTop: 24,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 24,
    backgroundColor: colors.glass,
    borderWidth: 1.5,
    borderColor: 'rgba(6, 182, 212, 0.4)',
    backdropFilter: 'blur(20px)',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  cta: {
    background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentLight} 100%)`,
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
