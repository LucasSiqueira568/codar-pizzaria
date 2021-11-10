import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '30%',
    position: 'relative',
  },
  titleBanner: {
    position: 'absolute',
    top: '10%',
    left: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: 26,
    borderColor: COLORS.grey
  },
  textProduct: {
    color: COLORS.red50,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 10
  },

  containerBanner: {
    width: 240,
    height: 220,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginLeft: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  nameProduct: {
    color: COLORS.primary,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16
  }
});