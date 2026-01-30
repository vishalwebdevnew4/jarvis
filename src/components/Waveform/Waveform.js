import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';

export function Waveform() {
  return <View style={styles.wave} />;
}

const styles = StyleSheet.create({
  wave: {
    height: 6,
    width: '100%',
    borderRadius: 999,
    backgroundColor: colors.accent,
    opacity: 0.7,
  },
});
