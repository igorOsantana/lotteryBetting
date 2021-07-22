import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: theme.colors.white,
  },
  wrapper: {
    position: 'relative',
    top: 0,
  },
  label: {
    color: theme.colors.green_app,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
});
