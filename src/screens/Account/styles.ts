import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
    marginBottom: 15,
  },
  viewUserData: {
    justifyContent: 'center',
  },
  labelUserData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLabelUserData: {
    color: theme.colors.green_app,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
    marginVertical: 10,
  },
  textUserData: {
    color: theme.colors.gray_dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  formView: {
    marginVertical: 30,
  },
  form: {
    marginVertical: 10,
    paddingBottom: 40,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray_border,
    borderRadius: 10,
  },
  viewButton: {
    alignItems: 'flex-end',
    marginBottom: 50,
  },
  buttonUpdate: {
    fontSize: 24,
  },
  error: {
    textAlign: 'right',
    marginHorizontal: 15,
    color: 'red',
    fontWeight: 'bold',
  },
});
