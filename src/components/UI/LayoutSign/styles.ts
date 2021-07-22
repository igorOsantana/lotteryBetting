import { StyleSheet } from 'react-native';

import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    position: 'relative',
    width: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
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
