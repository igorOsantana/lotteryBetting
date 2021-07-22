import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
  },
  hitSlop: {
    top: 25,
    bottom: 25,
    right: 50,
    left: 50,
  },
});
