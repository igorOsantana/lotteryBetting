import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  header: {
    flex: 2,
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  body: {
    flex: 5,
    marginVertical: 15,
    width: '100%',
  },
  footer: {
    color: theme.colors.gray_dark,
    marginVertical: 15,
  },
  title: {
    color: theme.colors.gray_dark,
    fontSize: 38,
    fontWeight: 'bold',
  },
  logoBrand: {
    color: theme.colors.gray_dark,
    fontSize: 52,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  logoBorder: {
    height: 8,
    backgroundColor: theme.colors.green_app,
    borderRadius: 20,
  },
});
