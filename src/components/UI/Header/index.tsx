import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { signOut } from '../../../store/slices/userSlice';
import { removeToken } from '../../../services/auth';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Badge } from '../Badge';

import { theme } from '../../../global/styles/theme';
import { styles } from './styles';
import { useEffect } from 'react';

type HeaderProps = {
  handleOpenCart?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ handleOpenCart }) => {
  const [handleAnimation, setHandleAnimation] = useState(false);

  const cartItemsLength = useAppSelector(
    state => state.cart.cartContent.length
  );

  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { name: currentScreen } = useRoute();

  const handlePressLogo = () => navigation.navigate('Home');

  const handleSignOut = async () => {
    await removeToken();
    dispatch(signOut());
  };

  useEffect(() => {
    if (cartItemsLength > 0) setHandleAnimation(true);
    const time = setTimeout(() => {
      setHandleAnimation(false);
    }, 500);
    return () => clearTimeout(time);
  }, [cartItemsLength]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={handlePressLogo}>
          <View style={styles.containerBtnLogo}>
            <Text style={styles.btnLogo}>TGL</Text>
            <View style={styles.btnLogoBorder} />
          </View>
        </TouchableOpacity>

        <View style={styles.buttonsView}>
          {currentScreen === 'New Bet' && (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={handleOpenCart}
            >
              <Ionicons
                name='cart-outline'
                size={34}
                color={theme.colors.green_app}
                style={styles.iconButton}
              />
              {cartItemsLength > 0 && (
                <Badge animation={handleAnimation} numCart={cartItemsLength} />
              )}
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <MaterialIcons
              name='logout'
              size={34}
              color={theme.colors.gray_light}
              onPress={handleSignOut}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
