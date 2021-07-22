import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../services/responsibility';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 15,
    position: 'relative',
    marginVertical: 2,
    marginHorizontal: 5,
    flex: 1,
    maxWidth: 125,
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(12),
  },
  isSelected: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
});
