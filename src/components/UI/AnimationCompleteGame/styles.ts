import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    width: '40%',
    marginVertical: 10,
  },
  textLimitReached: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
    textAlign: 'center',
    marginTop: 20,
  },
});
