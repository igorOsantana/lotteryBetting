import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ResetPassword } from '../screens/ResetPassword';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Screen name='Sign In' component={SignIn} />
      <Screen name='Sign Up' component={SignUp} />
      <Screen name='Reset Password' component={ResetPassword} />
    </Navigator>
  );
};
