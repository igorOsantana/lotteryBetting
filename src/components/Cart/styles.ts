import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
    position: 'relative',
  },
  iconClose: {
    alignSelf: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
  body: {
    flex: 1,
    position: 'relative',
  },
  centerText: {
    position: 'absolute',
    top: '45%',
    left: '30%',
  },
  cartEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cartEmptyText: {
    color: theme.colors.gray_light,
    fontSize: 20,
    fontWeight: 'bold',
  },
  grayColor: {
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
  totalPrice: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  textTotalPrice: {
    color: theme.colors.gray_light,
    fontSize: 18,
    marginRight: 5,
  },
  price: {
    marginLeft: 'auto',
    fontSize: 18,
  },
  buttonSave: {
    height: 100,
    backgroundColor: theme.colors.gray_border,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
