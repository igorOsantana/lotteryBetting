import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { scaleFontSize } from '../../services/responsibility';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    paddingHorizontal: 8,
    marginHorizontal: 2,
    borderRadius: 5,
    borderColor: theme.colors.green_app,
    height: 35,
    flex: 1,
  },
  button: {
    color: theme.colors.green_app,
    fontWeight: 'bold',
    fontSize: scaleFontSize(12),
  },
  bgCart: {
    backgroundColor: theme.colors.green_app,
  },
});
