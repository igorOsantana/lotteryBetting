import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 32,
    marginHorizontal: 15,
  },
  defaultColor: {
    color: theme.colors.green_app,
  },
  grayColor: {
    color: theme.colors.gray_dark,
  },
});
