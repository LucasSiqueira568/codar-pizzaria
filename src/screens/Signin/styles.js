import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/COLORS';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  form: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
  },
  containerTitle: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    top: '20%',
    left: 15
  },
  title: {
    fontSize: 28,
    color: COLORS.red50,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: COLORS.grey, 
    paddingLeft: 10,
    marginBottom: 15,
    color: COLORS.textColor,
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 26,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16
  }
});