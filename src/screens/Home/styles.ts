import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: 15,
  },
  hasNoGame: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.gray_light,
    marginTop: 100,
  },
});
