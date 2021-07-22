import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: '35%',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderColor: theme.colors.gray_light,
    borderWidth: 2,
  },
  contentText: {
    flex: 2,
  },
  title: {
    flex: 1,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray_light,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
  description: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  textDescription: {
    color: theme.colors.gray_light,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderColor: theme.colors.gray_light,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.green_app,
    minWidth: 120,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
  },
});
