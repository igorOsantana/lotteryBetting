import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: '40%',
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
    fontSize: 32,
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
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: theme.colors.gray_light,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: theme.colors.gray_light,
    minWidth: 120,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bgDefault: {
    backgroundColor: theme.colors.green_app,
  },
  bgRed: {
    backgroundColor: 'red',
  },
});
