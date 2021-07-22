import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 15,
    position: 'relative',
  },
  gameContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    justifyContent: 'center',
  },
  limitReached: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.colors.background,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
});
