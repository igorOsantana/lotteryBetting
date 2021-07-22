import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getToken } from '../services/auth';
import { signIn } from '../store/slices/userSlice';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ResetPassword } from '../screens/ResetPassword';

import { PrivateRoutes } from './private.routes';

import { theme } from '../global/styles/theme';
import { useState } from 'react';

const { Navigator, Screen } = createStackNavigator();

export const RootRoutes: React.FC = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const isAuthenticated = useAppSelector(state => state.users.isLogged);

  const dispatch = useAppDispatch();

  const checkIfHasToken = async () => {
    const token = await getToken();
    setUserToken(token);
  };

  useEffect(() => {
    checkIfHasToken();
    if (userToken !== null) dispatch(signIn());
  }, [userToken]);

  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      {isAuthenticated ? (
        <Screen name='PrivateRoutes' component={PrivateRoutes} />
      ) : (
        <>
          <Screen name='Sign In' component={SignIn} />
          <Screen name='Sign Up' component={SignUp} />
          <Screen name='Reset Password' component={ResetPassword} />
        </>
      )}
    </Navigator>
  );
};
