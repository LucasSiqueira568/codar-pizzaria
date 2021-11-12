import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../Theme/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
      marginTop: getStatusBarHeight() + 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  containerProduct: {
      width: '100%',
      height: '100%',
      position: 'relative',
  },
  containerImage: {
      width: '100%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: COLORS.textGreyColor
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    containerDescription: {
        width: '100%',
        height: '70%',
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
      fontSize: 23,
      color: COLORS.primary,
      fontWeight: 'bold',
      marginLeft: 15,
  },
  containerButtons: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 20,
    paddingBottom: 15
  },
  button: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
  },
  number: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  descriptionProduct: {
    width: '100%',
    height: 200,
    marginTop: 10,
    paddingLeft: 15,
    paddingTop: 15
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.black,
  },
  bottomDescription: {
      position: 'absolute',
      width: '100%',
      height: 160,
      bottom: 80,
      justifyContent:'space-between'
  },
  buttonPrice: {
      position: 'absolute',
      bottom: 20,
      left: 15,
      backgroundColor: COLORS.textGreyColor,
      width: '40%',
      height: '50%',
      borderRadius: 10,
      paddingTop: 10,
      paddingLeft: 10,

  },
  priceTitle: {
    fontSize: 18,
    color: COLORS.black
  },
  price: {
      fontSize: 20,
      color: COLORS.black,
      fontWeight: 'bold',
  }
});