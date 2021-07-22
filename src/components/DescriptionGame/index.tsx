import React from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

type DescriptionGameProps = {
  description?: string;
};

export const DescriptionGame: React.FC<DescriptionGameProps> = ({
  description,
}) => {
  return (
    <Animatable.View animation='fadeIn' style={styles.container}>
      <Text style={styles.title}>Fill your bet</Text>
      <Text style={styles.description}>{description}</Text>
    </Animatable.View>
  );
};
