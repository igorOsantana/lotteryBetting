import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

import { LayoutSign } from '../../components/LayoutSign';
import { FormSign } from '../../components/FormSign';

export const SignIn = () => {
  return (
    <LayoutSign title='Authentication'>
      <FormSign />
    </LayoutSign>
  );
};
