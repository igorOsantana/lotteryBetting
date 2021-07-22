import React from 'react';
import { TextInputProps } from 'react-native';
import { Hoshi, HoshiProps } from 'react-native-textinput-effects';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const InputDefault: React.FC<HoshiProps & TextInputProps> = props => {
  return (
    <Hoshi
      {...props}
      labelStyle={styles.label}
      inputStyle={styles.input}
      style={styles.container}
      borderColor={theme.colors.green_app}
    />
  );
};
