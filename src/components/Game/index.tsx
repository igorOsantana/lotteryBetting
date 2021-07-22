import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';

import { useAppDispatch } from '../../hooks';
import { removeBetById } from '../../store/slices/cartSlice';
import { DialogModal } from '../UI/DialogModal';

import { styles } from './styles';

type GameProps = {
  id: number;
  balls: string;
  date: string;
  price: number;
  typeGame: string;
  color: string;
  cart?: boolean;
};

export const Game: React.FC<GameProps> = ({
  id,
  balls,
  date,
  price,
  typeGame,
  color,
  cart,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [handleAnimation, setHandleAnimation] = useState(false);

  const dispatch = useAppDispatch();

  const convertPriceToBRL = (num: number) =>
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  const handleRemoveItemCart = () => setShowModal(true);

  useEffect(() => {
    if (confirmModal) {
      setHandleAnimation(true);
      const time = setTimeout(() => {
        setConfirmModal(false);
        dispatch(removeBetById({ id, price }));
      }, 500);
      return () => clearTimeout(time);
    } else setHandleAnimation(false);
  }, [confirmModal]);

  return (
    <Animatable.View
      animation={handleAnimation ? 'bounceOutRight' : 'bounceIn'}
      duration={500}
      style={styles.container}
    >
      {showModal && (
        <DialogModal
          btnText='Remove'
          text='remove'
          visible={showModal}
          setVisible={setShowModal}
          setConfirm={setConfirmModal}
          danger
        />
      )}
      <View
        style={[
          styles.borderGame,
          color ? { borderColor: color, backgroundColor: color } : null,
        ]}
      />
      <View style={styles.contentGame}>
        <Text style={styles.balls}>{balls}</Text>
        <View style={styles.infoGameView}>
          <Text style={styles.infoGame}>
            {date} - (R${convertPriceToBRL(price)})
          </Text>
          {cart && (
            <TouchableOpacity
              hitSlop={styles.hitSlop}
              onPress={handleRemoveItemCart}
            >
              <FontAwesome name='trash-o' size={18} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={[styles.typeGame, color ? { color: color } : null]}>
          {typeGame}
        </Text>
      </View>
    </Animatable.View>
  );
};
