import React, { useState } from 'react';
import { HoshiProps } from 'react-native-textinput-effects';
import { View, TextInputProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { InputDefault } from '../InputDefault';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const InputPassword: React.FC<TextInputProps & HoshiProps> = ({
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => setHidePassword(prevState => !prevState);

  return (
    <View style={styles.container}>
      <InputDefault {...props} secureTextEntry={hidePassword} />
      <TouchableOpacity
        hitSlop={styles.hitSlop}
        style={styles.icon}
        onPress={handleHidePassword}
      >
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
