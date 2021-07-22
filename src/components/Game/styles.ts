import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  borderGame: {
    width: 4,
    height: '100%',
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10,
  },
  contentGame: {
    flex: 1,
  },
  balls: {
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
  infoGameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoGame: {
    marginVertical: 10,
    fontSize: 12,
    color: theme.colors.gray_light,
  },
  typeGame: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hitSlop: {
    top: 25,
    bottom: 25,
    right: 25,
    left: 25,
  },
});
