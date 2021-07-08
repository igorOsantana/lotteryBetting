import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  body: {
    width: '100%',
  },
  footer: {
    color: theme.colors.gray_dark,
    margin: 20,
  },
  title: {
    color: theme.colors.gray_dark,
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
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
