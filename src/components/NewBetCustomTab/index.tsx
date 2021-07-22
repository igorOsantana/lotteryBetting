import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

export const NewBetCustomTab: React.FC<TouchableOpacityProps> = ({
  children,
  onPress,
}) => {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', showKeyboard);
    Keyboard.addListener('keyboardDidHide', hideKeyboard);

    return () => {
      Keyboard.removeListener('keyboardDidShow', showKeyboard);
      Keyboard.removeListener('keyboardDidHide', hideKeyboard);
    };
  }, []);

  const hideKeyboard = () => setKeyboardIsShow(false);

  const showKeyboard = () => setKeyboardIsShow(true);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.newBet, { top: keyboardIsShow ? 0 : -30 }]}
      onPress={onPress}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
};
