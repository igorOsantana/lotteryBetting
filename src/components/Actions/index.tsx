import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import * as Animatable from 'react-native-animatable';
import { format } from 'date-fns';
import {
  addNewBet,
  clearBalls,
  completeBalls,
  removeBall,
} from '../../store/slices/cartSlice';

import Ball from '../Ball';
import { ButtonAction } from '../ButtonAction';
import { AlertModal } from '../UI/AlertModal';
import { DialogModal } from '../UI/DialogModal';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type ActionsProps = {
  balls: number[];
  color: string;
  onAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Actions: React.FC<ActionsProps> = ({
  balls,
  color,
  onAddToCart,
}) => {
  const [miniBalls, setMiniBalls] = useState<JSX.Element[]>([]);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const game = useAppSelector(state => state.cart.selectedGame);

  let arraySorted = [...balls].sort((a, b) => a - b);

  const dispatch = useAppDispatch();

  const handleMiniBalls = useCallback(() => {
    let arrayMiniBalls: JSX.Element[] = [];

    arraySorted.forEach(ball => {
      arrayMiniBalls.push(
        <Ball
          key={ball}
          number={String(ball)}
          color={color}
          handlerSelect={() => handleRemoveBall(ball)}
          mini
        />
      );
    });
    setMiniBalls(arrayMiniBalls);
  }, [balls]);

  const handleRemoveBall = (num: number) => dispatch(removeBall(num));

  const handleCompleteGameButton = () => {
    if (balls.length === game?.['max-number']) {
      setShowAlertModal(true);
    } else dispatch(completeBalls());
  };

  const handleClearGameButton = () => setShowDialogModal(true);

  const handleAddToCart = () => {
    if (balls.length === game!['max-number']) {
      const newBet = {
        id: game!.id,
        bet_id: new Date().getTime() + Math.random(),
        type: game!.type,
        balls: arraySorted,
        price: game!.price,
        color: game!.color,
        date: format(new Date(), 'dd/MM/yyyy'),
      };
      dispatch(addNewBet(newBet));
      dispatch(clearBalls());
      onAddToCart(true);
    } else if (balls.length < game!['max-number']) {
      setShowAlertModal(true);
    }
  };

  useEffect(() => {
    handleMiniBalls();
  }, [balls]);

  useEffect(() => {
    if (confirmModal) dispatch(clearBalls());
  }, [confirmModal]);

  return (
    <>
      {showAlertModal && (
        <AlertModal
          text={
            balls.length === game?.['max-number']
              ? 'alreadyEnough'
              : 'remainingBalls'
          }
          visible={showAlertModal}
          setVisible={setShowAlertModal}
        />
      )}
      {showDialogModal && (
        <DialogModal
          btnText='Clear'
          text='clear'
          visible={showDialogModal}
          setVisible={setShowDialogModal}
          setConfirm={setConfirmModal}
          danger
        />
      )}
      <Animatable.View
        animation='fadeInDown'
        duration={300}
        style={styles.container}
      >
        <View style={styles.balls}>{miniBalls}</View>
        <View style={styles.buttons}>
          <ButtonAction onPress={handleCompleteGameButton}>
            <Text>Complete game</Text>
          </ButtonAction>
          <ButtonAction onPress={handleClearGameButton}>
            <Text>Clear game</Text>
          </ButtonAction>
          <ButtonAction cart onPress={handleAddToCart}>
            <Text numberOfLines={1} style={styles.text}>
              <Ionicons
                name='cart-outline'
                size={18}
                color={theme.colors.white}
              />
              &nbsp;Add to cart
            </Text>
          </ButtonAction>
        </View>
      </Animatable.View>
    </>
  );
};
