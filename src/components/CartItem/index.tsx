import React from 'react';
import { View } from 'react-native';
import { Bet } from '../../store/slices/cartSlice';

import { Game } from '../Game';

import { styles } from './styles';

export const CartItem: React.FC<Bet> = ({
  bet_id,
  balls,
  color,
  price,
  type,
  date,
}) => {
  return (
    <View style={styles.container}>
      <Game
        id={bet_id}
        balls={balls.join(', ')}
        color={color}
        price={price}
        typeGame={type}
        date={date}
        cart
      />
    </View>
  );
};
