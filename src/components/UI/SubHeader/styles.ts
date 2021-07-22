import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { scaleFontSize } from '../../../services/responsibility';

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingVertical: 5,
  },
  title: {
    color: theme.colors.gray_dark,
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  subtitle: {
    color: theme.colors.gray_light,
    textTransform: 'capitalize',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
