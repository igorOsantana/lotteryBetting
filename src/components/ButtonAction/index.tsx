import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type ButtonActionProps = TouchableOpacityProps & {
  cart?: boolean;
};

export const ButtonAction: React.FC<ButtonActionProps> = ({
  cart,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, cart ? styles.bgCart : null]}
    >
      <View>
        <Text numberOfLines={1} style={styles.button}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
