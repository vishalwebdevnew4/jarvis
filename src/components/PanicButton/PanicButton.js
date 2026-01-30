import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { stopAllAudio } from '../../services/audioService';
import { colors } from '../../theme/colors';

export function PanicButton({ onPress }) {
  const handlePress = () => {
    stopAllAudio();
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity accessibilityRole="button" onPress={handlePress} style={styles.button}>
      <Text style={styles.label}>⏻</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '600',
  },
});
