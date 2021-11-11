import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerMenu: {
      flexDirection: 'row',
      // marginTop: 20,
      marginBottom: 20,
      height: 50,
      // alignItems: 'center',
  },
  button: {
      backgroundColor: COLORS.primary,
      width: 100,
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15
  },
  text: {
      color: COLORS.white
  }
});