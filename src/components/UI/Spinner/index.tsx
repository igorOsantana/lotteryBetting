import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import { theme } from '../../../global/styles/theme';
import { styles } from './styles';

export const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.green_app} />
      <StatusBar />
    </View>
  );
};
