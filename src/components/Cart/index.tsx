import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { clearCart, setHasAddNewBet } from '../../store/slices/cartSlice';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import api from '../../services/api';
import * as Animatable from 'react-native-animatable';

import { ContentScroll } from '../UI/ContentScroll';
import { CartItem } from '../CartItem';
import { ButtonArrow } from '../ButtonArrow';
import { AnimationAddCart } from '../UI/AnimationAddCart';
import { Spinner } from '../UI/Spinner';
import { AlertModal } from '../UI/AlertModal';
import { DialogModal } from '../UI/DialogModal';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export const Cart: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const [handleAnimation, setHandleAnimation] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [confirmSave, setConfirmSave] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartContent = useAppSelector(state => state.cart.cartContent);
  const totalPrice = useAppSelector(state => state.cart.cartTotalPrice);

  const dispatch = useAppDispatch();

  const cartIsEmpty = cartContent.length === 0;
  const totalPriceToShow = totalPrice.toFixed(2).replace('.', ',');

  const handleCloseCart = () => navigation.closeDrawer();

  const handleSaveBets = () => {
    if (totalPrice < 30) {
      setShowAlertModal(true);
      handleCloseCart();
    } else if (totalPrice >= 30) setShowDialogModal(true);
  };

  const saveBetsInDatabase = useCallback(async () => {
    const bets = cartContent.map(bet => ({
      game_id: bet.id,
      balls: bet.balls.join(', '),
    }));
    const betsToBeSaved = { bets: bets };

    try {
      await api.post('/bets', betsToBeSaved);
      setShowAnimation(true);
    } catch (error) {
      console.log(error.message);
    }
  }, [cartContent, api]);

  useEffect(() => {
    if (showAnimation) {
      setIsLoading(true);
      const time = setTimeout(() => {
        dispatch(clearCart());
        navigation.navigate('Home');
        dispatch(setHasAddNewBet());
        setShowAnimation(false);
        handleCloseCart();
        setIsLoading(false);
      }, 4700);
      return () => clearTimeout(time);
    }
  }, [showAnimation]);

  useEffect(() => {
    if (confirmSave) {
      saveBetsInDatabase();
      setConfirmSave(false);
    }
  }, [confirmSave]);

  useEffect(() => {
    setHandleAnimation(false);
    const time = setTimeout(() => {
      if (cartIsEmpty) setHandleAnimation(true);
    }, 400);
    return () => clearTimeout(time);
  }, [cartIsEmpty]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showAlertModal && (
        <AlertModal
          text={
            cartContent.length === 0 ? 'emptyCart' : 'cartInsufficientValue'
          }
          visible={showAlertModal}
          setVisible={setShowAlertModal}
        />
      )}
      {showDialogModal && (
        <DialogModal
          btnText='Save'
          text='save'
          visible={showDialogModal}
          setVisible={setShowDialogModal}
          setConfirm={setConfirmSave}
        />
      )}
      <View style={styles.container}>
        <View>
          <View style={styles.iconClose}>
            <TouchableOpacity onPress={handleCloseCart}>
              <AntDesign
                name='close'
                size={34}
                color={theme.colors.green_app}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Ionicons
              name='cart-outline'
              size={34}
              color={theme.colors.green_app}
            />
            <Text style={styles.textHeader}>CART</Text>
          </View>
        </View>
        <View style={[styles.body, cartIsEmpty && styles.centerText]}>
          {showAnimation ? (
            <AnimationAddCart />
          ) : (
            <ContentScroll>
              {cartIsEmpty ? (
                <Animatable.View
                  animation='fadeInRightBig'
                  style={styles.cartEmpty}
                >
                  <MaterialCommunityIcons
                    name='cart-remove'
                    size={70}
                    color='gray'
                  />
                  <Text style={styles.cartEmptyText}>Cart is empty...</Text>
                </Animatable.View>
              ) : (
                cartContent.length > 0 &&
                cartContent.map(bet => (
                  <CartItem
                    id={bet.id}
                    key={bet.bet_id}
                    bet_id={bet.bet_id}
                    balls={bet.balls}
                    color={bet.color}
                    price={bet.price}
                    type={bet.type}
                    date={bet.date}
                  />
                ))
              )}
            </ContentScroll>
          )}
        </View>
        {!cartIsEmpty && (
          <View style={styles.totalPrice}>
            <Text style={[styles.textTotalPrice, styles.grayColor]}>CART</Text>
            <Text style={styles.textTotalPrice}>TOTAL:</Text>
            <Text style={[styles.grayColor, styles.price]}>
              R${totalPriceToShow}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.buttonSave}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ButtonArrow onPress={handleSaveBets}>
            <Text>Save</Text>
          </ButtonArrow>
        )}
      </View>
    </SafeAreaView>
  );
};
