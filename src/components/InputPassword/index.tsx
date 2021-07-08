import React, { useState } from 'react';
import { HoshiProps } from 'react-native-textinput-effects';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { InputDefault } from '../InputDefault';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const InputPassword = ({ ...rest }: TextInputProps & HoshiProps) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => setHidePassword(prevState => !prevState);

  return (
    <View style={styles.container}>
      <InputDefault {...rest} secureTextEntry={hidePassword} />
      <TouchableOpacity style={styles.icon} onPress={handleHidePassword}>
        {hidePassword ? (
          <Ionicons
            name='eye-outline'
            color={theme.colors.gray_light}
            size={24}
          />
        ) : (
          <Ionicons
            name='eye-off-outline'
            color={theme.colors.green_app}
            size={24}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
