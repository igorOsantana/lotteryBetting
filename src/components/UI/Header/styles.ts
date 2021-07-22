import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBtnLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogo: {
    paddingHorizontal: 8,
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
  btnLogoBorder: {
    height: 5,
    width: '100%',
    backgroundColor: theme.colors.green_app,
    borderRadius: 20,
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cartButton: {
    position: 'relative',
  },
  iconButton: {
    marginRight: 35,
  },
});
