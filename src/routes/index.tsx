import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootRoutes } from './root.routes';

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  );
};
