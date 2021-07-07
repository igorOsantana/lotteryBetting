import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes';
import { store } from './src/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar style='auto' />
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}
