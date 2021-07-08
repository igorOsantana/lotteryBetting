import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authUser } from '../../store/slices/userSlice';
import { View, Text, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { LayoutSign } from '../../components/LayoutSign';
import { ButtonArrow } from '../../components/ButtonArrow';
import { InputDefault } from '../../components/InputDefault';
import { InputPassword } from '../../components/InputPassword';

import { styles } from './styles';

type initialValuesProps = {
  email: string;
  password: string;
};

const initialValues: initialValuesProps = {
  email: '',
  password: '',
};

export const validationYup = Yup.object({
  email: Yup.string().email('Email inválido.').required('Email é obrigatório.'),
});

export const SignIn = () => {
  const isAuthenticated = useAppSelector(state => state.users.isLogged);
  const isLoading = useAppSelector(state => state.users.isLoading);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const goToResetPasswordHandler = () => navigation.navigate('Reset Password');

  const registerHandler = () => navigation.navigate('Sign Up');

  const submitHandler = async (values: initialValuesProps) =>
    dispatch(authUser(values));

  return (
    <LayoutSign title='Authentication'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationYup}
        onSubmit={submitHandler}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <InputDefault
              label='Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && (
              <Animatable.Text animation='shake' style={styles.error}>
                {errors.email}
              </Animatable.Text>
            )}
            <InputPassword
              label='Password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Text onPress={goToResetPasswordHandler} style={styles.forget}>
              I forget my password
            </Text>
            <View style={styles.viewButton}>
              <ButtonArrow onPress={handleSubmit as any}>
                <Text>Log In</Text>
              </ButtonArrow>
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.viewButton}>
        <ButtonArrow colorGray onPress={registerHandler}>
          <Text>Sign Up</Text>
        </ButtonArrow>
      </View>
    </LayoutSign>
  );
};
