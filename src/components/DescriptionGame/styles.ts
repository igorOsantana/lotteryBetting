import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  title: {
    color: theme.colors.gray_dark,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: theme.colors.gray_light,
  },
});
