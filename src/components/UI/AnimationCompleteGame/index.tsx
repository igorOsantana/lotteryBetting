import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

import completeGame from '../../../global/styles/game_complete.json';

import { styles } from './styles';

export const AnimationCompleteGame: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={completeGame}
        resizeMode='contain'
        style={styles.animation}
        autoPlay
      />
      <Animatable.Text
        animation='pulse'
        delay={400}
        duration={2000}
        iterationCount='infinite'
        style={styles.textLimitReached}
      >
        GAME COMPLETE
      </Animatable.Text>
    </View>
  );
};
