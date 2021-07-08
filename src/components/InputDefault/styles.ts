import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  label: {
    color: theme.colors.gray_light,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 14,
  },
});
