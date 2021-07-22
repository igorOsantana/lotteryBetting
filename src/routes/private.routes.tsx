import React, { useCallback, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { selectGame, setAllGames } from '../store/slices/cartSlice';
import { useAppDispatch } from '../hooks';
import { StyleSheet, View, Text } from 'react-native';
import api from '../services/api';

import { Home } from '../screens/Home';
import { Account } from '../screens/Account';
import { DrawerCart } from './cart.drawer.routes';
import { NewBetCustomTab } from '../components/NewBetCustomTab';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export const PrivateRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  const getGames = useCallback(async () => {
    try {
      const { data } = await api.get('/games');
      dispatch(setAllGames(data));
      dispatch(selectGame(data[0]));
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
    }
  }, [api]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.green_app,
        inactiveTintColor: theme.colors.gray_light,
        showLabel: false,
        style: styles.tabContainer,
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabContent}>
              {focused && <View style={styles.tabBorder} />}
              <SimpleLineIcons name='home' size={26} color={color} />
              <Text style={styles.label}>Home</Text>
            </View>
          ),
        }}
      />
      <Screen
        name='DrawerCart'
        component={DrawerCart}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <MaterialCommunityIcons
                name='currency-usd-circle-outline'
                size={90}
                color={color}
              />
            </View>
          ),
          tabBarButton: props => <NewBetCustomTab {...props} />,
        }}
      />
      <Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabContent}>
              {focused && <View style={styles.tabBorder} />}
              <MaterialCommunityIcons
                name='account-outline'
                size={26}
                color={color}
              />
              <Text style={styles.label}>Account</Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 65,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabBorder: {
    position: 'absolute',
    top: -2,
    width: '25%',
    borderColor: theme.colors.green_app,
    backgroundColor: theme.colors.green_app,
    borderRadius: 60,
    borderWidth: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.gray_dark,
  },
});
