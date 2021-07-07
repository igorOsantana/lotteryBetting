import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingBottom: 20,
  },
  form: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray_border,
    borderRadius: 15,
    paddingBottom: 50,
    paddingHorizontal: 40,
  },
  input: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_border,
  },
});
