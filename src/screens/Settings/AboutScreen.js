import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Jarvis</Text>
      <Text style={styles.body}>Version 0.1.0</Text>
      <Text style={styles.body}>Privacy-first voice assistant for earphones.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    gap: 8,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  body: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
