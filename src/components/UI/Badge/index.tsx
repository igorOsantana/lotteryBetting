import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

type BadgeProps = {
  numCart: number;
  animation: boolean;
};

export const Badge: React.FC<BadgeProps> = ({ numCart, animation }) => {
  if (animation)
    return (
      <Animatable.View
        animation='shake'
        duration={500}
        style={styles.container}
      >
        <Text style={styles.text}>{numCart}</Text>
      </Animatable.View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{numCart}</Text>
      </View>
    );
};
