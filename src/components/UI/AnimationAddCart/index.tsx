import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import addCart from '../../../global/styles/add-to-cart-shopping.json';

import { styles } from './styles';

export const AnimationAddCart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={addCart}
        resizeMode='contain'
        style={styles.animation}
        autoPlay
      />
    </View>
  );
};
