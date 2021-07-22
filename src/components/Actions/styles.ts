import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  balls: {
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
