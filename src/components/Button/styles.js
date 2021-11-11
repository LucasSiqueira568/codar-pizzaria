import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS'

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: '50%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.white,
      textAlign: 'center',
      fontWeight: 'bold',

  }
});