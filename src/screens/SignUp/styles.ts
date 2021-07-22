import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray_border,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  viewButton: {
    margin: 30,
    alignItems: 'center',
  },
  error: {
    textAlign: 'right',
    marginHorizontal: 15,
    color: 'red',
    fontWeight: 'bold',
  },
});
