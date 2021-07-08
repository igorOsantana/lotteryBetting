import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = '@LB-token';

export const isAuthenticated = async () =>
  await AsyncStorage.getItem(TOKEN_KEY);

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const setToken = async (token: string) =>
  await AsyncStorage.setItem(TOKEN_KEY, token);

export const removeToken = async () => await AsyncStorage.removeItem(TOKEN_KEY);
