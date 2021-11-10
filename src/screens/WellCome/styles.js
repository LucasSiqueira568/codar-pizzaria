import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    width: '100%',
    height: '100%',
  },
  image: {
      width: '100%',
      height: '100%',

  },
  containerDescription: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  titleDescription: {
    //   fontWeight: 'bold',
      fontSize: 34,
      color: COLORS.primary
    },
    subTitleDescription: {
        fontSize: 20,
        color: COLORS.primary
  },
  button: {
      backgroundColor: COLORS.primary,
      width: '90%',
      borderRadius: 26,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
  },
  text: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 16,
  }
});