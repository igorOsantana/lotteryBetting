import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  text: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: 24,
  },
  bgNotSelected: {
    backgroundColor: theme.colors.gray_ball,
  },
  mini: {
    position: 'relative',
    width: 35,
    height: 35,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  icon: {
    position: 'absolute',
    top: 3,
    right: 5,
  },
});
