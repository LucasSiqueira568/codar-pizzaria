import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 30,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
      width: '80%',
      borderTopLeftRadius: 20,
      borderRadius: 30,
    },
    textInput: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: COLORS.searchInput,
        paddingLeft: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
containerIcon: {
    width: '20%',
    height: 60,
    backgroundColor: COLORS.searchInput,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  }
});