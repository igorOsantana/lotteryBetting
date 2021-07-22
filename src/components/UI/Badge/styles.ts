import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 30,
    right: 25,
  },
  text: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
