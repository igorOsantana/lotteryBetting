import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NewBet } from '../screens/NewBet';
import { Cart } from '../components/Cart';

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerCart: React.FC = () => {
  return (
    <Navigator
      drawerPosition='right'
      drawerContent={props => <Cart {...props} />}
    >
      <Screen name='New Bet' component={NewBet} />
    </Navigator>
  );
};
